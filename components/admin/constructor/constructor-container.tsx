import ConstructorCard from "./constructor-card";
import { TempConstructor } from "./constructor-info-section";

const ConstructorContainer = ({constructors}:{constructors:TempConstructor[]}) => {
  return (
    <div
      className="mt-5 w-full md:grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex flex-col"
      id="constructor-management__main-container"
    >
      {constructors?.map((constructor, idx) => (
        <ConstructorCard key={idx} constructor={constructor}/>
      ))}
    </div>
  );
};

export default ConstructorContainer;
