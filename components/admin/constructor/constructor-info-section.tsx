"use client";

export interface TempConstructor{
  constructor_id: string
  constructor_images: string[]
  created_at: string
  id: number
  kor_name: string
  name: string
  thumb_url: string | null
}

const ConstructorInfoSection = () => {
  return (
    <div
      className="md:grid md:grid-cols-3 md:gap-6 flex flex-col"
      id="editor-section-layout"
    >
      <h1
        className="text-3xl font-bold md:mb-0 mb-5"
        id="editor-section-layout__header"
      >
        팀 기본 정보
      </h1>
      <div
        className="col-span-2 shadow-md sm:p-6 px-4 py-5 flex flex-col"
        id="constructor-info-editor__section-description"
      >
        <form
          className="grid md:grid-cols-6 grid-cols-1 gap-6"
          id="constructor-info-editor__section-description__form"
        >
          <div className="flex flex-col col-span-3 gap-2 max-w-full">
            <label className="text-xl" htmlFor="constructor-id">
              ID
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="constructor-id"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="constructor-korName">
              Korea Name
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="constructor-korName"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="constructor-name">
              Name
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="constructor-name"
            />
          </div>

          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="constructor-currentDriver">
              Current Driver
            </label>
            <div className="flex gap-2 justify-between">
              <div className="flex-1 relative focus-within:rotate-parent">
                <select className="peer w-full border border-black rounded-md py-2 px-3 text-lg appearance-none">
                  <option>Red Bull</option>
                  <option>Ferrari</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center transition-transform duration-200 ease-in-out peer-focus-within:rotate-180">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <button className="bg-blue-200 py-2 px-4 rounded-lg w-fit text-sm">
                추가
              </button>
            </div>
            <div
              className="overflow-x-auto w-full"
              id="constructor-currentDriver__container"
            >
              <div className="flex gap-1 text-xs max-w-full">
                {/* {Array.from({ length: 5 }).map((_, idx) => (
                <>
                  <div className="flex items-center p-1 border bg-yellow-200">
                    <p className="mr-1 p-1 bg-black text-white cursor-pointer">
                      X
                    </p>
                    Max Verstappen
                  </div>
                  <div className="flex items-center p-1 border bg-yellow-200">
                    <p className="mr-1 p-1 bg-black text-white cursor-pointer">
                      X
                    </p>
                    George Russell
                  </div>
                  <div className="flex items-center p-1 border bg-yellow-200">
                    <p className="mr-1 p-1 bg-black text-white cursor-pointer">
                      X
                    </p>
                    Pierre Gasly
                  </div>
                </>
              ))} */}
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-end items-end w-full">
          <button>저장</button>
        </div>
      </div>
    </div>
  );
};

export default ConstructorInfoSection;
