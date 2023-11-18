'use client'
import { useState } from 'react'
import './globals.css'



export default function RootLayout({ children }) {

  const [displayPhoneMenu, setDisplayPhoneMenu] = useState('none')

  function showAndHidePhoneMenu() {
    const menu = document.querySelector('.phoneMenu')
    const setVisibilty = displayPhoneMenu == 'none' ? 'block' : 'none'
    menu.style.display = setVisibilty
    setDisplayPhoneMenu(setVisibilty)
  }

  function showHidenSearchBar() {
    const menu = document.querySelector('.hidenSearchBar')
    menu.style.display = 'flex'
  }

  function hideHidenSearchBar() {
    const menu = document.querySelector('.hidenSearchBar')
    menu.style.display = 'none'
  }

  return (
    <html lang="en">
      
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <title>Love with lofs</title>
      </head>
      
      <body>


        <header className='w-full h-[75px] bg-[#F1EFEF] flex justify-between'>

          <div className='w-[115px] ml-[20px] flex justify-center items-center hover:cursor-pointer sm:hidden'>
            {/* <img className='max-w-[90px]' alt='' src='https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png'></img> */}
            <p className='text-[40px]'>LOGO</p>
          </div>

          <div onClick={showAndHidePhoneMenu} className='w-[55px] h-[55px] ml-[10px] mt-[10px] flex justify-center items-center rounded-[50%] hidden hover:bg-[#ddd] hover:cursor-pointer sm:flex'>
            <i style={{fontSize: '30px'}} className="fa fa-bars" aria-hidden="true"></i>
          </div>



          <div className='mx-[20px] flex items-center'>

          <div className='flex'>

            <p class="text-[25px] p-[17.5px] hover:cursor-pointer hover:bg-[#ddd] lg:hidden">Kontakt</p>
    
            <div class="group relative inline-block mr-[10px] sm:hidden">
              <p class="text-[25px] p-[17.5px] hover:cursor-pointer hover:bg-[#ddd]">Produkty</p>
              <div class="min-w-[160px] z-[999] hidden absolute bg-[#F1EFEF] group-hover:block">
                <a className='py-[12px] px-[16px] block hover:bg-[#ddd]' href="#">Link 1</a>
                <a className='py-[12px] px-[16px] block hover:bg-[#ddd]' href="#">Link 2</a>
                <a className='py-[12px] px-[16px] block hover:bg-[#ddd]' href="#">Link 3</a>
              </div>
            </div>

          </div>
            
            <div className='group w-[350px] h-[50px] flex items-center bg-[#ddd] mr-[30px] rounded-[50px] hover:cursor-pointer md:w-auto md:mr-[50px]'>
              <div className='w-[50px] h-[50px] absolute flex items-center justify-center rounded-[50%] z-[2] group-hover:bg-[#cfcccc]'>
               <i style={{fontSize: '30px'}} onClick={showHidenSearchBar} className=" fa fa-search" aria-hidden="true"></i>
              </div>
              <input type='text' placeholder='Czego szukasz?' className='w-full h-full bg-[#ddd] text-[25px] pl-[60px] px-[30px] no-underline	outline-none rounded-[50px] hover:bg-[#cfcccc] md:hidden'></input>                              
            </div>
            
            <div className='w-[60px] h-[60px] rounded-[50%] hover:bg-[#ddd] hover:cursor-pointer flex justify-center items-center mr-[5px]'>
              <i style={{fontSize: '40px'}} className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <div className='w-[60px] h-[60px] rounded-[50%] hover:bg-[#ddd] hover:cursor-pointer flex justify-center items-center mr-[20px] md:mr-[0px] sm:hidden'>
              <i style={{fontSize: '40px'}} className="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>

          <div className='hidenSearchBar absolute z-[3] w-full h-[75px] bg-[#F1EFEF] hidden items-center justify-center'>
            
            <div className='group w-[70vh] h-[50px] flex items-center bg-[#ddd] mr-[10px] ml-[10px] rounded-[50px] hover:cursor-pointer'>
              <div className='w-[50px] h-[50px] absolute flex items-center justify-center rounded-[50%] z-[2] group-hover:bg-[#cfcccc]'>
               <i style={{fontSize: '30px'}} className=" fa fa-search" aria-hidden="true"></i>
              </div>
              <input type='text' placeholder='Czego szukasz?' className='w-full h-full bg-[#ddd] text-[25px] pl-[60px] px-[30px] no-underline	outline-none rounded-[50px] hover:bg-[#cfcccc]'></input>                              
            </div>

            <div className='h-[75px] flex items-center cursor-pointer hover:bg-[#cfcccc] px-[10px]'>
              <p onClick={hideHidenSearchBar} className='text-[25px]'>Anuluj</p>
            </div>
         
          </div>

          <div className='phoneMenu hidden absolute z-[2] mt-[75px] w-[350px] bg-[#F1EFEF]'>
            <p className='w-full h-[55px] text-[40px] pl-[20px] cursor-pointer hover:bg-[#cfcccc]'><i style={{fontSize: '40px', marginRight: '10px'}} className="fa fa-book" aria-hidden="true"></i>Produkty</p>
            <p className='w-full h-[55px] text-[40px] pl-[20px] cursor-pointer hover:bg-[#cfcccc]'><i style={{fontSize: '40px', marginRight: '10px'}} className="fa fa-phone" aria-hidden="true"></i>Kontakt</p>
            <p className='w-full h-[55px] text-[40px] pl-[20px] cursor-pointer hover:bg-[#cfcccc]'><i style={{fontSize: '40px', marginRight: '10px'}} className="fa fa-user" aria-hidden="true"></i>Konto</p>
          </div>

        </header>
        
        {children}    
        
        <footer className='w-full flex justify-between items-center bg-[#F1EFEF] md:items-center md:items-start md:flex-col'>
          
          <div className='p-[20px] mx-[100px] md:mx-0 md:px-0'>
            {/* <img className='w-[150px] mb-[10px]' alt='' src='https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png'></img> */}
            <p className='text-[40px]'>LOGO</p>
            <div className='flex'>
              <i style={{fontSize: "50px"}} className="mr-[7px] fa fa-instagram" aria-hidden="true"></i>
              <i style={{fontSize: "50px", color: '#4267B2'}} className="mr-[7px] fa fa-facebook-official" aria-hidden="true"></i>
              <i style={{fontSize: "50px", color: 'red'}} className="mr-[7px] fa fa-youtube-play" aria-hidden="true"></i>
            </div>
          </div>
        
          <div className='flex flex-wrap md:flex-col'>

            <div className='m-[30px]'>
              <p className='text-[25px] font-bold'>Moje konto</p>
              <p className='text-[20px] text-[#7e7e7e]'>Ustawienia</p>
              <p className='text-[20px] text-[#7e7e7e]'>Zamówienia</p>
            </div>

            <div className='m-[30px]'>
              <p className='text-[25px] font-bold'>Pomoc</p>
              <p className='text-[20px] text-[#7e7e7e]'>Kontakt</p>
              <p className='text-[20px] text-[#7e7e7e]'>Zwroty i reklamacje</p>
              <p className='text-[20px] text-[#7e7e7e]'>Pytania i odpowiedzi</p>
              <p className='text-[20px] text-[#7e7e7e]'>Regulaminy</p>
              <p className='text-[20px] text-[#7e7e7e]'>Polityka prywatności</p>
            </div>

            <div className='m-[30px]'>
              <p className='text-[25px] font-bold'>Płatność i dostawa</p>
              <p className='text-[20px] text-[#7e7e7e]'>Metody dostawt</p>
              <p className='text-[20px] text-[#7e7e7e]'>Czas realizacji zamówienia</p>
              <p className='text-[20px] text-[#7e7e7e]'>Czas i koszt dostawy</p>
            </div>
            
          </div>
          
        
        </footer>
      
      </body>
    </html>
  )
}
