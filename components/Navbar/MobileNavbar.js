'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ShoppingBag, Home, Info, User } from 'lucide-react';

export default function MobileNavbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-softWhite fixed bottom-0 left-0 right-0 text-primary-foreground shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {/** Ubicación */}
        <Link 
          href="/ubicacion" 
          className={`flex flex-col items-center justify-center w-full h-full hover:bg-primary-foreground/10 transition-colors duration-200`} 
          aria-label="Ubicación"
        >
          <div className={`w-10 h-10 flex items-center justify-center ${isActive('/ubicacion') ? 'bg-principal w-14 h-14 rounded-full shadow-lg transform translate-y-[-3px]' : 'hover:bg-primary-foreground/10'}`}>
            <MapPin className={`w-6 h-6 ${isActive('/ubicacion') ? 'text-softWhite w-8 h-8' : 'text-primary-foreground'}`} />
          </div>
        </Link>

        {/** Encargar */}
        <Link 
          href="/encargar" 
          className={`flex flex-col items-center justify-center w-full h-full hover:bg-primary-foreground/10 transition-colors duration-200`} 
          aria-label="Encargar"
        >
          <div className={`w-10 h-10 flex items-center justify-center ${isActive('/encargar') ? 'bg-principal w-14 h-14 rounded-full shadow-lg transform translate-y-[-3px]' : 'hover:bg-primary-foreground/10'}`}>
            <ShoppingBag className={`w-6 h-6 ${isActive('/encargar') ? 'text-softWhite w-8 h-8' : 'text-primary-foreground'}`} />
          </div>
        </Link>

        {/** Inicio */}
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center w-full h-full hover:bg-primary-foreground/10 transition-colors duration-200`} 
          aria-label="Inicio"
        >
          <div className={`w-10 h-10 flex items-center justify-center ${isActive('/') ? 'bg-principal w-14 h-14 rounded-full shadow-lg transform translate-y-[-3px]' : 'hover:bg-primary-foreground/10'}`}>
            <Home className={`w-6 h-6 ${isActive('/') ? 'text-softWhite w-8 h-8' : 'text-primary-foreground'}`} />
          </div>
        </Link>

        {/** Información */}
        <Link 
          href="/informacion" 
          className={`flex flex-col items-center justify-center w-full h-full hover:bg-primary-foreground/10 transition-colors duration-200`} 
          aria-label="Información"
        >
          <div className={`w-10 h-10 flex items-center justify-center ${isActive('/informacion') ? 'bg-principal w-14 h-14 rounded-full shadow-lg transform translate-y-[-3px]' : 'hover:bg-primary-foreground/10'}`}>
            <Info className={`w-6 h-6 ${isActive('/informacion') ? 'text-softWhite w-8 h-8' : 'text-primary-foreground'}`} />
          </div>
        </Link>

        {/** Cuenta */}
        <Link 
          href="/cuenta" 
          className={`flex flex-col items-center justify-center w-full h-full hover:bg-primary-foreground/10 transition-colors duration-200`} 
          aria-label="Cuenta"
        >
          <div className={`w-10 h-10 flex items-center justify-center ${isActive('/cuenta') ? 'bg-principal w-12 h-12 rounded-full shadow-lg transform translate-y-[-3px]' : 'hover:bg-primary-foreground/10'}`}>
            <User className={`w-6 h-6 ${isActive('/cuenta') ? 'text-softWhite w-8 h-8' : 'text-primary-foreground'}`} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
