"use client";
import Link from 'next/link';
import { AnimatedPresentacion } from '@/components/Presentaciones/Pres';
import { CardPres } from '@/components/Cards/CardPres';

export default function LandingPage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative py-36 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/55/4e/02/554e02185fb6497b0f2ab182489b2dbf.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" />
          <div className="relative z-10 container mx-auto px-2 text-center">
            <h1 className="text-4xl font-semibold italic font-kanit mb-4">Deliciosos Menús para Todos los Gustos</h1>
            <p className="text-xl font-kanit italic mb-8">Con sabores suaves como los paisajes.</p>
            <div className='flex gap-2 justify-center'>
              <button
                onClick={() => scrollToSection('Presentacion')}
                className="bg-white text-primary font-bold py-2 px-4 rounded-full hover:bg-primary-foreground transition duration-300"
              >
                Así Somos
              </button>
              <Link
                href="/menu"
                className="bg-white text-primary font-bold py-2 px-4 rounded-full hover:bg-primary-foreground transition duration-300"
              >
                Platillos
              </Link>
              <button
                onClick={() => scrollToSection('Opiniones')}
                className="bg-white text-primary font-bold py-2 px-4 rounded-full hover:bg-primary-foreground transition duration-300"
              >
                Opiniones
              </button>
            </div>
          </div>
        </section>

        <section id="Presentacion" className="grid grid-cols-1 justify-center py-20">
          <AnimatedPresentacion />
        </section>
        <div className='border-t-2 border-principal mt-4 mb-8'></div>
        <section id='Opiniones' className='grid mb-8'>
          <h2 className='font-semibold font-montserrat italic text-3xl text-center mb-8'>Algunos comentarios</h2>
          <CardPres />
        </section>
      </main>
    </div>
  );
}
