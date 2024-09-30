'use client';

import "@/styles/globals.css"; 
import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import Script from "next/script";

import Navbar from '../components/Navbar/Navbar';
import MobileNavbar from '../components/Navbar/MobileNavbar';
import Footer from "@/components/Footer/Footer";

const RootLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); 
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize(); 
      window.addEventListener('resize', handleResize); 

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <Script
          src="https://kit.fontawesome.com/38eaca6879.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <title>Milanesa</title>
      </head>
      <body>
        <div className="nav-container">
          {isMobile ? <MobileNavbar /> : <Navbar />}
        </div>
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        {isMobile ?  <div /> : <Footer/>}
        <Toaster 
          position='bottom-center'
          duration={1500}
          toastOptions={{
            classNames: {
              error: '!bg-red-400 !text-lg !text-white',
              success: '!bg-green-500 !text-white !text-lg',
              warning: '!bg-yellow-400 !text-lg',
              info: '!bg-blue-400 !text-lg !text-white',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
