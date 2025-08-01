const RaceCard = () => {
  return (
    <div
      className="bg-blue-gray-100 p-5 grid md:grid-cols-5 gap-2 rounded-lg box-border shadow"
      id="race-container"
    >
      {/* 서킷 이미지 */}
      {/* 내용 수정 필요 */}
      <div className="flex items-center md:col-span-2" id="left-info">
        <img className="w-full" src="/red_bull.avif" />
      </div>
      <div
        className="md:col-span-3 flex-1 flex flex-col justify-between"
        id="right-info"
      >
        <p className="text-lg font-semibold">경기 정보</p>
        <p className="md:text-sm">경기 ID: RED_BULL</p>
        <p className="md:text-sm" id="constructor-korName">
          한국 이름: Red Bull
        </p>
        <p className="md:text-sm" id="constructor-name">
          영어 이름: Red Bull
        </p>
        <p className="md:text-sm">등록 날짜: 2025-04-15</p>
        <p className="md:text-sm">업데이트 날짜: 2025-04-15</p>
      </div>
    </div>
  );
};

export default RaceCard;
