import Link from "next/link";
import Image from "next/image";

interface TempDriver {
  id: number;
  created_at: string;
  driver_id: string;
  kor_name: string;
  given_name: string;
  family_name: string;
  birth_date: string;
  height: string;
  weight: string;
  current_number: number;
  last_season: number;
  thumb_url?: string;
  country: string;
}

const DriverCard = ({ driver }: { driver: TempDriver }) => {
  return (
    <Link
      href={`/admin/drivers/${driver.driver_id}`}
      className="bg-gray-100 p-5 flex  gap-5 rounded-lg box-border shadow"
      id="driver-card"
    >
      <div id="driver-card__img">
        {/* <img className="w-32" src={driver.thumb_url ?? ""} /> */}
        <Image
          src={driver.thumb_url ?? ""}
          alt="driver-thumbnail"
          width={128}
          height={128}
        />
      </div>
      <div
        className="flex-1 flex flex-col justify-between"
        id="driver-card__info"
      >
        <p className="text-lg font-semibold" id="driver-card__info-header">
          선수 정보
        </p>
        <p className="text-xs md:text-sm" id="driver-card__info-id">
          선수 ID: {driver.driver_id}
        </p>
        <p className="text-xs md:text-sm" id="driver-card__info-korName">
          한국 이름: {driver.kor_name}
        </p>
        <p className="text-xs md:text-sm" id="driver-card__info-name">
          영어 이름: {driver.given_name}
        </p>
        <p className="text-xs md:text-sm" id="driver-card__info-created">
          등록 날짜: {driver.created_at}
        </p>
        <p className="text-xs md:text-sm" id="driver-card__info-update">
          업데이트 날짜: 2025-04-15
        </p>
      </div>
    </Link>
  );
};

export default DriverCard;
