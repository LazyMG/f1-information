import DriverCard from "./driver-card";

const DriverContainer = ({ drivers }: { drivers: any[] }) => {
  return (
    <div
      className="mt-5 w-full md:grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex flex-col"
      id="driver-management__main-container"
    >
      {drivers.map((driver, idx) => (
        <DriverCard key={idx} driver={driver} />
      ))}
    </div>
  );
};

export default DriverContainer;
