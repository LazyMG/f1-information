import Link from "next/link";
import { TempConstructor } from "./constructor-info-section";


const ConstructorCard = ({constructor}:{constructor:TempConstructor}) => {
  return (
    <Link
    href={`/admin/constructors/${constructor.constructor_id}`}
      className="bg-blue-gray-100 p-5 grid md:grid-cols-5 gap-2 rounded-lg box-border shadow"
      id="constructor-card"
    >
      <div
        className="flex items-center md:col-span-2"
        id="constructor-card__img"
      >
        <img className="w-full" src="/red_bull.avif" />
      </div>
      <div
        className="md:col-span-3 flex-1 flex flex-col justify-between"
        id="constructor-card__info"
      >
        <p className="text-lg font-semibold" id="constructor-card__info-header">
          팀 정보
        </p>
        <p className="md:text-sm" id="constructor-card__info-id">
          팀 ID: {constructor.constructor_id}
        </p>
        <p className="md:text-sm" id="constructor-korName">
          한국 이름: {constructor.kor_name}
        </p>
        <p className="md:text-sm" id="constructor-name">
          영어 이름: {constructor.name}
        </p>
        <p className="md:text-sm" id="constructor-card__info-created">
          등록 날짜: {constructor.created_at}
        </p>
        <p className="md:text-sm" id="constructor-card__info-update">
          업데이트 날짜: {constructor.created_at}
        </p>
      </div>
    </Link>
  );
};

export default ConstructorCard;
