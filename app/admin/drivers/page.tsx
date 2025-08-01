import DriverContainer from "@/components/admin/driver/driver-container";
import Link from "next/link";

const AdminDriversPage = () => {
  return (
    <div
      className="flex flex-col gap-3 max-w-7xl mx-auto w-full"
      id="driver-management"
    >
      <h1 className="text-3xl font-semibold" id="driver-management__header">
        선수 관리
      </h1>
      <div className="flex justify-end" id="driver-management__add-button">
        <Link href="/admin/drivers/regist">추가</Link>
      </div>
      <div
        className="flex justify-between items-center flex-col md:flex-row md:gap-0 gap-3 w-full"
        id="driver-management__util-container"
      >
        <form className="w-full md:w-fit" id="driver-management__search-form">
          <input
            className="border border-black rounded-md py-2 px-3 text-md w-full md:w-fit"
            id="driver-management__search-input"
          />
        </form>
        <div
          className="w-full md:w-fit"
          id="driver-management__filter-container"
        >
          <select
            className="w-full md:w-fit border border-black p-2 text-md box-border"
            id="driver-management__filter-select"
          >
            <option defaultChecked>정렬 순서</option>
            <option>이름 순</option>
            <option>업데이트 순</option>
          </select>
        </div>
      </div>
      <DriverContainer />
    </div>
  );
};

export default AdminDriversPage;
