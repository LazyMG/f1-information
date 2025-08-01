import DriverDetail from "@/components/admin/driver/driver-detail";

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
      <DriverDetail />
    </div>
  );
};

export default AdminDriverPage;
