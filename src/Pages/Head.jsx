
import React from 'react'
import logo from './Home/Img/logo.svg'
const Head = () => {

  return (
    <div>

<header>
<div class="px-3">
 <div class="container sm:flex sm:justify-between px-2 py-3 sm:px-4 mx-auto ">
   <div class="">
     <div class="logo flex justify-between items-center">
        <a href="#"><img className='w-48 items-center pt-3' src={logo} alt="" /></a>
       <span class="sm:hidden text-white cursor-pointer flex" id="mobile_btn">  
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
     </span>
     </div>
   </div>

   <nav class="sm:flex w-full sm:w-auto hidden mx-auto" id="main_menu">
     <ul  class="flex w-full sm:w-auto justify-center mx-auto py-3 flex-col sm:flex-row dark:text-white">
       <li class="ml-0 sm:ml-8"><a class="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow" href="#">Experience</a></li>

       <li class="ml-0 sm:ml-8"><a class="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow" href="#">Charter</a></li>

       <li class="ml-0 sm:ml-8"><a class="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow" href="#services">Shuttole</a></li>

       <li class="ml-0 sm:ml-8"><a class="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow" href="#brand">Deals</a></li>

       <li class="ml-0 sm:ml-8"><a class="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlowe" href="#portfolio">Membership</a></li>   
     </ul>
   </nav>

   <div className='hidden sm:block'>
    <ul className='flex items-center justify-end py-3 text-white gap-6'>
        <li><a href="#">Sing Up</a></li>
        <li><a href="#">Log In</a></li>
    </ul>
   </div>

 </div>
</div>
</header>  
 


    </div>
  )

}

export default Head