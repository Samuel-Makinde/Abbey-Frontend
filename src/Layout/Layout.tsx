import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

// Define the type for the props
interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children,  }) => {
  return (
    <div>
      <Navbar />
       <Sidebar />
      <main>{children}</main>
       <Footer />
    </div>
  );
};

export default Layout;
