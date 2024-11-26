interface VisitorCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const VisitorCard: React.FC<VisitorCardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-slate-100 cursor-pointer rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
    >
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-rose-700">{title}</h2>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VisitorCard;
