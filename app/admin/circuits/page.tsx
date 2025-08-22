import { getCircuits } from "@/actions/admin/circuit-actions";
import CircuitContainer from "@/components/admin/circuit/circuit-container";
import { TempCircuit } from "@/components/admin/circuit/circuit-detail";
import Link from "next/link";

const AdminCircuitsPage = async () => {
  const circuits = await getCircuits();
  return (
    <div
      className="flex flex-col gap-3 max-w-7xl mx-auto w-full"
      id="circuit-management"
    >
      <h1 className="text-3xl font-semibold" id="circuit-management__header">
        서킷 관리
      </h1>
      <div className="flex justify-end" id="circuit-management__add-button">
        <Link href="/admin/circuits/regist">추가</Link>
      </div>
      <div
        className="flex justify-between items-center flex-col md:flex-row md:gap-0 gap-3 w-full"
        id="circuit-management__util-container"
      >
        <form className="w-full  md:w-fit" id="circuit-management__search-form">
          <input
            className=" border border-black rounded-md py-2 px-3 text-md w-full md:w-fit"
            id="circuit-management__search-input"
          />
        </form>
        <div className="w-full md:w-fit">
          <select className="w-full md:w-fit text-md border border-black py-2 px-3">
            <option defaultChecked>정렬 순서</option>
            <option>이름 순</option>
            <option>업데이트 순</option>
          </select>
        </div>
      </div>
      <CircuitContainer circuits={circuits as TempCircuit[]}/>
    </div>
  );
};

export default AdminCircuitsPage;
