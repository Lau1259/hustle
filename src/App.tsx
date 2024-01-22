import { useEffect, useState } from "react";
import JobCard from "./components/JobCard/JobCard";
import Card from "./hoc/ui/Card/Card";
import Data from "./local/jobs.json";

function App() {
  const [selected, setSelected] = useState(0);
  const [appCount, setAppCount] = useState(0);
  const [replyCount, setReplyCount] = useState(0);
  const [offerCount, setOfferCount] = useState(0);

  const detailsClickHandler = (id: number) => {
    setSelected(id - 1);
  };

  const getStats = () => {
    setAppCount(
      Data.reduce((d, b) => {
        return b.applied ? d + 1 : d;
      }, 0)
    );
    setReplyCount(
      Data.reduce((d, b) => {
        return b.replied ? d + 1 : d;
      }, 0)
    );
    setOfferCount(
      Data.reduce((d, b) => {
        return b.offer ? d + 1 : d;
      }, 0)
    );
  };

  const RecentActivity = Data.map((d) => (
    <JobCard
      position={d.position}
      company={d.company}
      status={d.status}
      src={d.src}
      id={d.id}
      key={`act-${d.id}`}
      clickHandler={detailsClickHandler}
    />
  ));

  const setStatusStyle = (status: string) => {
    const statusStyles: { [key: string]: string } = {
      "in-progress": "bg-amber-500",
      applied: "bg-lime-500",
      rejected: "bg-red-800 text-white",
    };
    return statusStyles[status.toLowerCase()];
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <section className="container max-w-screen-md p-4 mx-auto my-0 bge-">
        <h1 className="text-5xl font-bold dark:text-lime-500 mb-2">Hustle</h1>
        <Card className="grid grid-cols-3 place-items-center">
          <p>
            Applications sent:{" "}
            <span className="dark:bg-lime-300 px-2 py-1 rounded dark:text-black font-bold ml-2">
              {appCount}
            </span>{" "}
          </p>
          <p>
            Replies:{" "}
            <span className="dark:bg-lime-300 px-2 py-1 rounded dark:text-black font-bold ml-2">
              {replyCount}
            </span>{" "}
          </p>
          <p>
            Offers:{" "}
            <span className="dark:bg-lime-300 px-2 py-1 rounded dark:text-black font-bold ml-2">
              {offerCount}
            </span>{" "}
          </p>
        </Card>
      </section>
      <section className="container max-w-screen-md p-4 mx-auto my-0">
        <header>
          <h2 className="text-3xl font-bold dark:text-lime-500 mb-2">
            Recent Activity:
          </h2>
        </header>
        <div
          className="
          max-h-48
          overflow-y-scroll"
        >
          {RecentActivity}
        </div>
      </section>
      <section className="container max-w-screen-md p-4 mx-auto my-0">
        <Card>
          <div className="container flex gap-x-2 justify-between">
            <p
              className="
            text-2xl
            font-bold
            "
            >
              {Data[selected].position}
            </p>
            <p
              className={`rounded-lg px-4 py-2 text-sm capitalize ${setStatusStyle(
                Data[selected].status
              )}`}
            >
              {Data[selected].status}
            </p>
          </div>
          <div className="container flex gap-x-2">
            <p>{Data[selected].company}</p>
            <p>{Data[selected].location}</p>
          </div>
          <section
            className="
            container grid grid-cols-2 grid-flow-dense mt-4 gap-x-4
          "
          >
            <div>
              <p>Actions Taken:</p>
              <ul className="list-disc ml-6">
                {Data[selected].log.map((e, i) => (
                  <li key={`log-${i}`}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="row-span-2 p-4 rounded-lg bg-slate-100">
              <p>Contacts:</p>
              <section className="flex flex-col gap-8 overflow-y-scroll max-h-32">
                {Data[selected].people.length >= 1
                  ? Data[selected].people.map((p) => (
                      <div
                        key={`person-${p.id}`}
                        className={`rounded-lg px-4 border-2 font-semibold bg-slate-50 ${
                          p.type == "main"
                            ? "border-lime-400 bg-lime-100"
                            : "border-slate-800"
                        }`}
                      >
                        <p>{p.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(p.latest).toLocaleDateString()}
                        </p>
                        <div className="flex justify-between text-gray-500">
                          {p.socials?.email && (
                            <a
                              className="hover:text-black"
                              href={`mailto:${p.socials?.email}`}
                            >
                              Email
                            </a>
                          )}

                          {p.socials?.whatsapp && (
                            <a
                              className="hover:text-black"
                              href={`https://api.whatsapp.com/send?phone=${p.socials?.whatsapp}`}
                            >
                              WhatsApp
                            </a>
                          )}
                          {p.socials?.linkedin && (
                            <a
                              className="hover:text-black"
                              href={`https://www.linkedin.com/in/${p.socials?.linkedin}`}
                            >
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    ))
                  : "🥺 Sorry, it looks like you haven't made any contacts yet"}
              </section>
            </div>
            <div className="mt-8 flex ">
              <a
                href={Data[selected].src}
                className="
                text-s
                text-center
                hover:underline 
                rounded-lg
                px-2
                py-1
                dark:bg-lime-600
                dark:text-gray-100
                font-semibold
                min-w-full"
              >
                Apply
              </a>
            </div>
          </section>
        </Card>
      </section>
    </>
  );
}

export default App;
