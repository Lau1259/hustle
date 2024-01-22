interface Props {
  children?: any;
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`dark:bg-white dark:text-slate-950 rounded-md p-4 mb-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
