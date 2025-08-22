import { getCircuitInfo } from "@/actions/admin/circuit-actions";
import CircuitDetail from "@/components/admin/circuit/circuit-detail";
import { Suspense } from "react";

const CircuitDetailWrapper = async ({ circuitId }: { circuitId: string }) => {
  // 컴포넌트 내에서 데이터 패칭을 진행합니다.
  const circuitInfo = await getCircuitInfo(circuitId);
  if (!circuitInfo) {
    // 예시: 데이터가 없을 때 에러 발생
    throw new Error("서킷 정보를 찾을 수 없습니다.");
  }

  return <CircuitDetail circuitInfo={circuitInfo} />;
};

const AdminCircuitPage = async ({
  params,
}: {
  params: Promise<{ circuitId: string }>;
}) => {
  const { circuitId } = await params;

  return (
    <div
      className="flex flex-col gap-5 max-w-7xl mx-auto w-full"
      id="contructor-info-editor"
    >
      <Suspense fallback={<div>로딩 중...</div>}>
              <CircuitDetailWrapper circuitId={circuitId} />
            </Suspense>
    </div>
  );
};

export default AdminCircuitPage;
