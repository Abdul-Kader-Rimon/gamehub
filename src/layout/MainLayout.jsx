import React, { useContext } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../pages/Loader";
import { AuthContext } from "../Provider/AuthContext";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
    
  const { loading } = useContext(AuthContext);
  const navigation = useNavigation();

  const isLoading = loading || navigation.state === "loading"
     
  return (
    <div>
      <HelmetProvider>
         <div className="relative flex flex-col min-h-screen">
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
            <Loader/>
          </div>
        )}
        <Navbar />
        
        <main className="flex-1">
            
          <Outlet />
        </main>

        <Footer />
      </div>
       </HelmetProvider>
     
    </div>
  );
};

export default MainLayout;
