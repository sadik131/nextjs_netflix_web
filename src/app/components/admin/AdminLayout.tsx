import React from "react";
import AdminSidebar from "./AdminSideBar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-100 text-black">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
