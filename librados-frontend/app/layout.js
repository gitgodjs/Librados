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
    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@300&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"/>
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
        <Footer/>
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
