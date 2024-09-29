
import Link from 'next/link'
import { Presentacion } from '@/components/Presentaciones/Pres'
import { CardPres } from '@/components/Cards/CardPres'
//Muy buena atención, total calidad precio! 
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Deliciosos Menús para Todos los Gustos</h1>
            <p className="text-xl mb-8">Descubre nuestras dos opciones de menú irresistibles</p>
            <Link
              href="#menus"
              className="bg-white text-primary font-bold py-2 px-4 rounded-full hover:bg-primary-foreground transition duration-300"
            >
              Ver Menús
            </Link>
          </div>
        </section>

        <section id="presentacion" className="grid grid-cols-6 justify-center py-20">

            <Presentacion 
                img={"https://i.pinimg.com/564x/5b/e1/c1/5be1c1893d4206e5fcea386e73065a51.jpg"}
                nText={"Calidad Inigualable"}
                text={"Nuestros chefs eligen los ingredientes más frescos, asegurando una experiencia culinaria excepcional."}
                imgPosition={'col-start-2 col-span-4'}
            />

            <Presentacion 
                img={'https://i.pinimg.com/564x/8e/dc/92/8edc9265fb3b36537518d6df242ba5e7.jpg'}
                nText={'Sabores únicos'}
                text={'Cada bocado revela sabores que conectan con tradiciones y momentos especiales.'}
                imgPosition={'col-start-1 col-end-4'}
            />

            <Presentacion 
                img={'https://i.pinimg.com/736x/89/8d/ff/898dff82acfce4079f139749f13ffcd8.jpg'}
                nText={'Ambiente amigable'}
                text={'Un local acogedor que celebra la gastronomía y la amistad, donde cada comida deja una huella memorable.'}
                imgPosition={'col-end-7 col-span-3'}
            />
        </section>
        <section id='Opiniones' className='grid grid-cols-4 gap-4 p-2 m-2 md:grid-cols-3'>
            <div className='flex justify-center col-start-2 col-span-3 md:col-start-1 md:col-end-2 '>
                <CardPres 
                    bgImage={'https://i.pinimg.com/564x/9b/fa/1f/9bfa1ffcb2c2e7dd42dad925b96ccabf.jpg'}
                    name={'Rocio'}
                    imageUser={'https://i.pinimg.com/564x/96/3a/47/963a470446a465b9465042f4562fecfe.jpg'}
                    text={'buenisimo hermano'}
                    position={{ bottom: '70%', right: '-18%' }} 
                />
            </div>
            
            <div className='flex justify-center col-start-1 col-end-4 md:col-start-2 md:col-end-3 '>
                <CardPres 
                    bgImage={'https://i.pinimg.com/564x/9b/fa/1f/9bfa1ffcb2c2e7dd42dad925b96ccabf.jpg'}
                    name={'Rocio'}
                    imageUser={'https://i.pinimg.com/564x/96/3a/47/963a470446a465b9465042f4562fecfe.jpg'}
                    text={'buenisimo hermano'}
                    position={{ bottom: '10%', right: '16%' }} 
                />
            </div>
            
            <div className='flex justify-center col-start-2 col-end-5 md:col-start-3 md:col-end-4 '>
                <CardPres 
                    bgImage={'https://i.pinimg.com/564x/9b/fa/1f/9bfa1ffcb2c2e7dd42dad925b96ccabf.jpg'}
                    name={'Rocio'}
                    imageUser={'https://i.pinimg.com/564x/96/3a/47/963a470446a465b9465042f4562fecfe.jpg'}
                    text={'buenisimo hermano'}
                    position={{ bottom: '50%', right: '-19%' }} 
                />
            </div>
        </section>
        <section className='flex flex-col items-center justify-center'>
          <div className='border-b-2 border-black m-2 p-2 w-11/12 rounded-md'></div>
          <Link
          href='/encargar'
          > Seguir Viendo </Link>
        </section>
      </main>
    </div>
  )
}