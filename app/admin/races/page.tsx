import RaceContainer from "@/components/admin/race/race-container";
import Link from "next/link";

const AdminRacesPage = () => {
  return (
    <div
      className="flex flex-col gap-3 max-w-7xl mx-auto w-full"
      id="race-management"
    >
      <h1 className="text-3xl font-semibold" id="race-management__header">
        경기 관리
      </h1>
      <div className="flex justify-end" id="race-management__add-button">
        <Link href="/admin/races/register">추가</Link>
      </div>
      <div
        className="flex justify-between items-center flex-col md:flex-row md:gap-0 gap-3 w-full"
        id="race-management__util-container"
      >
        <form className="w-full md:w-fit" id="race-management__search-form">
          <input
            className=" border border-black rounded-md py-2 px-3 text-md w-full md:w-fit"
            id="race-management__search-input"
          />
        </form>
        <div
          className="w-full md:w-fit text-md"
          id="race-management__filter-container"
        >
          <select className="w-full md:w-fit py-2 px-3 border border-black">
            <option defaultChecked>정렬 순서</option>
            <option>이름 순</option>
            <option>업데이트 순</option>
          </select>
        </div>
      </div>
      <RaceContainer />
    </div>
  );
};

export default AdminRacesPage;
