import ConstructorDetail from "@/components/admin/constructor/constructor-detail";

const AdminConstructorPage = async ({
  params,
}: {
  params: Promise<{ contructorId: string }>;
}) => {
  const { contructorId } = await params;
  return (
    <div
      className="flex flex-col gap-5 max-w-7xl mx-auto w-full"
      id="contructor-info-editor"
    >
      <ConstructorDetail />
    </div>
  );
};

export default AdminConstructorPage;
