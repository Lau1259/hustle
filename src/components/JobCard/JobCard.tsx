import Card from "../../hoc/ui/Card/Card";
import GlobeIcon from "../../assets/globe-solid.svg";

interface Props {
  id: number;
  position: string;
  company: string;
  src: string;
  status: string;
  clickHandler: any;
}

const JobCard = ({
  position,
  src,
  company,
  id,
  clickHandler,
  status,
}: Props) => {
  return (
    <Card
      className="
      grid
      grid-cols-2
      gap-x-10"
    >
      <p
        className="
      text-xl
      font-bold 
      dark:text-slate-800 
      col-span-1
      truncate
      mb-1"
      >
        {position}
      </p>
      <div
        className="
        flex
        gap-2
        row-start-2 
        col-span-1"
      >
        <a
          href={src}
          className="
        overflow-hidden
        text-s 
        dark:bg-lime-300
        w-fit
        rounded-full
        px-4"
        >
          <p
            className="
          flex
          gap-2"
          >
            {company}
            <img
              className="
            h-4
            mx-0
            my-auto"
              src={GlobeIcon}
              alt={`Apply at ${company}`}
            />
          </p>
        </a>
        <p
          className="
          overflow-hidden
          text-s 
          capitalize
          dark:border-slate-300
          border-2
          w-fit
          rounded-full
          px-4"
        >
          {status}
        </p>
      </div>
      <section
        className="
        actions
        row-span-2 
        items-center
        flex
        flex-row 
        justify-end
        "
      >
        <button
          className="
          text-s 
          hover:underline 
          col-span-1
          rounded-lg
          px-2
          py-1
          dark:bg-slate-700
          dark:text-gray-100
          font-semibold"
          onClick={() => clickHandler(id)}
        >
          Details
        </button>
      </section>
    </Card>
  );
};

export default JobCard;
