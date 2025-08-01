const CircuitRegsistPage = () => {
  return (
    <div
      className="md:grid md:grid-cols-3 md:gap-6 flex flex-col"
      id="editor-section-layout"
    >
      <h1
        className="text-3xl font-bold md:mb-0 mb-5"
        id="editor-section-layout__header"
      >
        기본 정보
      </h1>
      <div
        className="col-span-2 shadow-md sm:p-6 px-4 py-5 flex flex-col"
        id="circuit-info-editor__section-description"
      >
        <form
          className="grid md:grid-cols-6 grid-cols-1 gap-6"
          id="driver-info-editor__section-description__form"
        >
          <div className="flex flex-col col-span-3 gap-2 max-w-full">
            <label className="text-xl" htmlFor="circuit-id">
              ID
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="circuit-id"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="circuit-korName">
              Korean Name
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="circuit-korName"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="circuit-name">
              Name
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="circuit-name"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="circuit-name">
              Laps
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="circuit-name"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="circuit-name">
              Length
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="circuit-name"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="circuit-name">
              Fastest Race Lap
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="circuit-name"
            />
          </div>
          <div className="flex flex-col col-span-3 gap-2">
            <label className="text-xl" htmlFor="circuit-name">
              Country
            </label>
            <input
              className="border border-black rounded-md py-2 px-3 text-lg"
              id="circuit-name"
            />
          </div>
        </form>
        <div className="flex justify-end items-end w-full">
          <button>저장</button>
        </div>
      </div>
    </div>
  );
};

export default CircuitRegsistPage;
