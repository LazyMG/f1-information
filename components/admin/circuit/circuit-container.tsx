import CircuitCard from "./circuit-card";
import { TempCircuit } from "./circuit-detail";

const CircuitContainer = ({circuits}:{circuits:TempCircuit[]}) => {
  return (
    <div
      className="mt-5 w-full md:grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex flex-col"
      id="circuit-management__main-container"
    >
      {circuits.map((circuit) => (
        <CircuitCard key={circuit.circuit_id} circuit={circuit}/>
      ))}
    </div>
  );
};

export default CircuitContainer;
