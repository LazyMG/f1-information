import { getConstructorInfo } from "@/actions/admin/constructor-actions";
import ConstructorDetail from "@/components/admin/constructor/constructor-detail";
import { Suspense } from "react";

const ConstructorDetailWrapper = async ({ constructorId }: { constructorId: string }) => {
  // 컴포넌트 내에서 데이터 패칭을 진행합니다.
  const constructorInfo = await getConstructorInfo(constructorId);
  if (!constructorInfo) {
    // 예시: 데이터가 없을 때 에러 발생
    throw new Error("팀 정보를 찾을 수 없습니다.");
  }

  return <ConstructorDetail constructorInfo={constructorInfo} />;
};

const AdminConstructorPage = async ({
  params,
}: {
  params: Promise<{ constructorId: string }>;
}) => {
  const { constructorId } = await params;
  return (
    <div
      className="flex flex-col gap-5 max-w-7xl mx-auto w-full"
      id="contructor-info-editor"
    >
      <Suspense fallback={<div>로딩 중...</div>}>
        <ConstructorDetailWrapper constructorId={constructorId} />
      </Suspense>
    </div>
  );
};

export default AdminConstructorPage;
