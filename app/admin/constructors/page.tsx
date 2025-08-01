import ConstructorContainer from "@/components/admin/constructor/constructor-container";
import Link from "next/link";

const AdminConstructorsPage = () => {
  return (
    <div
      className="flex flex-col gap-3 max-w-7xl mx-auto w-full"
      id="constructor-management"
    >
      <h1
        className="text-3xl font-semibold"
        id="constructor-management__header"
      >
        팀 관리
      </h1>
      <div className="flex justify-end" id="constructor-management__add-button">
        <Link href="/admin/constructors/regist">추가</Link>
      </div>
      <div
        className="flex justify-between items-center flex-col md:flex-row md:gap-0 gap-3 w-full"
        id="constructor-management__util-container"
      >
        <form
          className="w-full md:w-fit"
          id="constructor-management__search-form"
        >
          <input
            className="border border-black rounded-md py-2 px-3 text-md w-full md:w-fit"
            id="constructor-management__search-input"
          />
        </form>
        <div
          className="w-full md:w-fit"
          id="constructor-management__filter-container"
        >
          <select className="w-full md:w-fit border border-black text-md py-2 px-3">
            <option defaultChecked>정렬 순서</option>
            <option>이름 순</option>
            <option>업데이트 순</option>
          </select>
        </div>
      </div>
      <ConstructorContainer />
    </div>
  );
};

export default AdminConstructorsPage;
