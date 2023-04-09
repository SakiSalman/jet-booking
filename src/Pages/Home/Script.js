
import React from 'react'

function Script() {
  return (
    <div>


    </div>
  )
}

export default Script

//Mobile Menu

let main_menu = document.getElementById('main_menu');
let mobile_btn = document.getElementById('mobile_btn');

mobile_btn.addEventListener("click", ()=>{
    main_menu.classList.toggle("hidden");
});