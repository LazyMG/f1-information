const CircuitCard = () => {
  return (
    <div
      className="bg-blue-gray-100 p-5 grid md:grid-cols-5 gap-2 rounded-lg box-border shadow"
      id="circuit-container"
    >
      <div className="flex items-center md:col-span-2" id="circuit-card__img">
        <img className="w-full" src="/red_bull.avif" />
      </div>
      <div
        className="md:col-span-3 flex-1 flex flex-col justify-between"
        id="circuit-card__info"
      >
        <p className="text-lg font-semibold" id="circuit-card__info-header">
          팀 정보
        </p>
        <p className="md:text-sm" id="circuit-card__info-id">
          팀 ID: RED_BULL
        </p>
        <p className="md:text-sm" id="circuit-korName">
          한국 이름: Red Bull
        </p>
        <p className="md:text-sm" id="circuit-name">
          영어 이름: Red Bull
        </p>
        <p className="md:text-sm" id="circuit-card__info-created">
          등록 날짜: 2025-04-15
        </p>
        <p className="md:text-sm" id="circuit-card__info-update">
          업데이트 날짜: 2025-04-15
        </p>
      </div>
    </div>
  );
};

export default CircuitCard;
