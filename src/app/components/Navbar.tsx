import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 mx-aotu sm:max-w-4x1 md:max-w-6x1'>
      <div className='flex items-center space-x-4'>
          <img src="/home-outline.svg" alt="icono cigarranet" className='w-7' />
            
            {/* Link a home */}
            <Link href={'/'}>
            <h1 className='text-xl'> 
              <span className='font-bold text-violet-800'>Cigarra.Net</span>
            </h1>
            </Link>

            </div>

            {/* Links de escritorio */}
            <div className="items-center justify-between hidden sm:flex">
              <span className='mx-5'>Funcionalidades</span>
              <span className='mx-5'>Precios</span>
              <span className='mx-5'>Recursos</span>
            </div>


            {/* Segunda sección */}
            <div className='items-center justify-between hidden sm:flex'>
                <Link href={'/Login'}>
                  <span className='mx-2'>Iniciar sesión</span>
                </Link>
                <Link href={'/Registro'}>
                  <Button className="bg-purple-500 hover:bg-purple-200">Registrarse</Button>
                </Link>
            </div>

      </div>
    
  )
}

export default Navbar