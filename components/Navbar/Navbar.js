'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, MapPin, Info, LogIn, UserPlus } from 'lucide-react'

export default function DesktopNavbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <header className="relative bg-transparent text-primary-foreground sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Column 1: App Name */}
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-primary-foreground/80">
              MiRestaurante
            </Link>
          </div>

          {/* Column 2: Navigation Icons */}
          <div className="grid grid-cols-4 bg-principal p-1 text-softWhite rounded-full text-center items-center justify-items-center">
            <Link 
              href="/" 
              className={`flex flex-col items-center justify-center w-full h-full hover:text-primary-foreground/80 rounded-full ${isActive('/') ? 'bg-softWhite text-principal' : 'text-primary-foreground'}`} 
              aria-label="Inicio"
            >
              <Home className="w-6 h-6" />
            </Link>
            <Link 
              href="/encargar" 
              className={`flex flex-col items-center justify-center w-full h-full hover:text-primary-foreground/80 rounded-full ${isActive('/encargar') ? 'bg-softWhite text-principal' : 'text-primary-foreground'}`} 
              aria-label="Encargar"
            >
              <ShoppingBag className="w-6 h-6" />
            </Link>
            <Link 
              href="/ubicacion" 
              className={`flex flex-col items-center justify-center w-full h-full hover:text-primary-foreground/80 rounded-full ${isActive('/ubicacion') ? 'bg-softWhite text-principal' : 'text-primary-foreground'}`} 
              aria-label="Ubicación"
            >
              <MapPin className="w-6 h-6" />
            </Link>
            <Link 
              href="/informacion" 
              className={`flex flex-col items-center justify-center w-full h-full hover:text-primary-foreground/80 rounded-full ${isActive('/informacion') ? 'bg-softWhite text-principal' : 'text-primary-foreground'}`} 
              aria-label="Información"
            >
              <Info className="w-6 h-6" />
            </Link>
          </div>

          {/* Column 3: Sign Up / Sign In Buttons */}
          <div className="flex justify-end space-x-4">
            <div className='flex rounded-md border-2 border-principal'>
              <button className="flex items-center bg-secondary text-secondary-foreground px-4 py-2 hover:bg-secondary/90 transition duration-300">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </button>
              <button className="flex bg-principal text-white items-center bg-accent text-accent-foreground px-4 py-2 hover:bg-accent/90 transition duration-300">
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </button>
            </div>
            
          </div>
        </div>
      </nav>
    </header>
  )
}