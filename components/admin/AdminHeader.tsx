import Link from "next/link";

const AdminHeader = () => {
  return (
    <header
      className="fixed top-0 px-2 sm:px-6 md:px-20 lg:px-28 xl:px-36 w-full h-20 shadow bg-white z-[999]"
      id="admin-header"
    >
      <nav
        className="relative flex items-center justify-between gap-10 w-full h-full max-w-7xl mx-auto"
        id="admin-header__container"
      >
        <div
          id="admin-header__menu-button"
          className="absolute inset-y-0 left-0 flex items-center sm:hidden"
        >
          menu button
        </div>
        <div
          id="admin-header__main-container"
          className="flex flex-1 gap-10 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div
            id="admin-header__logo"
            className="flex flex-shrink-0 items-center"
          >
            logo
          </div>
          <ul
            id="admin-header__nav-container"
            className="group relative hidden sm:ml-6 sm:flex text-xl gap-10"
          >
            <Link href={"/admin/races"}>경기</Link>
            <Link href={"/admin/drivers"}>선수</Link>
            <Link href={"/admin/constructors"}>팀</Link>
            <Link href={"/admin/circuits"}>서킷</Link>
          </ul>
        </div>
        <div
          id="admin-header__login"
          className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          login
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
