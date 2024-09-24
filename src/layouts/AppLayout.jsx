import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <main className="min-h-screen container">
        <Outlet />
      </main>
      <div className="p-11 text-center bg-slate-900">
        Made By Nikhil
      </div>
    </div>
  );
};

export default AppLayout;
