import DriverCard from "./driver-card";

const DriverContainer = () => {
  return (
    <div
      className="mt-5 w-full md:grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex flex-col"
      id="driver-management__main-container"
    >
      {Array.from({ length: 20 }).map((_, idx) => (
        <DriverCard key={idx} />
      ))}
    </div>
  );
};

export default DriverContainer;
