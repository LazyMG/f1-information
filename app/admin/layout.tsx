import AdminHeader from "@/components/admin/AdminHeader";
import Footer from "@/components/shared/Footer";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AdminHeader />
      <main className="mt-28 px-4 sm:px-6 md:px-20 lg:px-28 xl:px-36 w-full box-border pb-40 mb-10">
        <div className="flex flex-col gap-3 max-w-7xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default AdminLayout;
