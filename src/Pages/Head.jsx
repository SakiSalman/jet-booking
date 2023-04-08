import React from 'react'

const Head = () => {
  return (
    <div>
        


<header>
<div class="dark:bg-black bg-black px-3">
 <div class="container sm:flex justify-between px-2 py-3 sm:px-4 mx-auto ">
   <div class="">
     <div class="logo flex justify-between">
       <h1 class="text-3xl font-bold text-white sm:mt-2"> <a href="#"> JET <span class="text-indigo-700">ONE</span></a></h1>
       <span class="sm:hidden text-white cursor-pointer flex" id="mobile_btn">  
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
     </span>
  
     </div>
  
   </div>

   <nav class="sm:flex w-full sm:w-auto hidden" id="main_menu">
     <ul  class="flex w-full sm:w-auto justify-end py-3 flex-col sm:flex-row dark:text-white">
       <li class="ml-0 sm:ml-8"><a class="text-white hover:text-indigo-600 font-bold transition-colors text-lg dark:text-indigo-300 dark:hover:text-indigo-500 dark:transition-colors uppercase" href="#">Home</a></li>

       <li class="ml-0 sm:ml-8"><a class="text-white hover:text-indigo-600 font-bold transition-colors text-lg dark:text-indigo-300 dark:hover:text-indigo-500 dark:transition-colors uppercase" href="#">About Us</a></li>

       <li class="ml-0 sm:ml-8"><a class="text-white hover:text-indigo-600 font-bold transition-colors text-lg dark:text-indigo-300 dark:hover:text-indigo-500 dark:transition-colors uppercase" href="#services">Services</a></li>

       <li class="ml-0 sm:ml-8"><a class="text-white hover:text-indigo-600 font-bold transition-colors text-lg dark:text-indigo-300 dark:hover:text-indigo-500 dark:transition-colors uppercase" href="#brand">Brand</a></li>

       <li class="ml-0 sm:ml-8"><a class="text-white hover:text-indigo-600 font-bold transition-colors text-lg dark:text-indigo-300 dark:hover:text-indigo-500 dark:transition-colors uppercase" href="#portfolio">Portfolio</a></li>

       
     </ul>
    
   </nav>
 </div>
</div>
</header>  
 


    </div>
  )

}

export default Head