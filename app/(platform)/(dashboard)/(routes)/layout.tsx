import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  const userName = "joao";

  return (
    <div className="flex min-h-screen bg-[#0a092d] text-white">
      <Sidebar />

      <div className="flex-1 ml-16">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default RoutesLayout;
