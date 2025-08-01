import CircuitDetail from "@/components/admin/circuit/circuit-detail";

const AdminCircuitPage = async ({
  params,
}: {
  params: Promise<{ circuitId: string }>;
}) => {
  return (
    <div
      className="flex flex-col gap-5 max-w-7xl mx-auto w-full"
      id="contructor-info-editor"
    >
      <CircuitDetail />
    </div>
  );
};

export default AdminCircuitPage;
