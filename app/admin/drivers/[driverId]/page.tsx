import { getCountries, getDriverInfo } from "@/actions/admin/driver-actions";
import DriverDetail from "@/components/admin/driver/driver-detail";
import { Suspense } from "react";

const DriverDetailWrapper = async ({ driverId }: { driverId: string }) => {
  // 컴포넌트 내에서 데이터 패칭을 진행합니다.
  const driverInfo = await getDriverInfo(driverId);
  // console.log(driverInfo);
  if (!driverInfo) {
    // 예시: 데이터가 없을 때 에러 발생
    throw new Error("운전자 정보를 찾을 수 없습니다.");
  }

  const countries = await getCountries();
  if(!countries){
    throw new Error("나라 정보 에러");
  }
  const setUpData = {
    countries
  }
  return <DriverDetail driverInfo={driverInfo} setUpData={setUpData}/>;
};

const AdminDriverPage = async ({
  params,
}: {
  params: Promise<{ driverId: string }>;
}) => {
  const { driverId } = await params;
  return (
    <div
      className="flex flex-col gap-5 max-w-7xl mx-auto w-full"
      id="driver-info-editor"
    >
      <Suspense fallback={<div>로딩 중...</div>}>
        <DriverDetailWrapper driverId={driverId} />
      </Suspense>
    </div>
  );
};

export default AdminDriverPage;
