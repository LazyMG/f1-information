import ConstructorCard from "./constructor-card";

const ConstructorContainer = () => {
  return (
    <div
      className="mt-5 w-full md:grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex flex-col"
      id="constructor-management__main-container"
    >
      {Array.from({ length: 20 }).map((_, idx) => (
        <ConstructorCard key={idx} />
      ))}
    </div>
  );
};

export default ConstructorContainer;
