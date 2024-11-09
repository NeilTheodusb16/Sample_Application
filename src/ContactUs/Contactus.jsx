import React from "react"
import  "./Contactus.css"

function Contactus() {


    return (
        <>
        
        <div className="w-full bg-stone-600 h-48  flex items-center justify-center text-center text-white">
        <div>
        <p className="text-4xl">Contact Us</p>
        <a href="index.html">Home</a>/<a href="index.html">Contact Us</a>
    </div>
</div>

    <div className="row flex justify-center mt-10">
        <div className="card  flex-row justify-center p-4 max-w-xs mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
 </svg>
<span className="">+9199999999</span>
        </div>
        <div className="card  mx-4 flex items-center p-4 max-w-xs mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
            <span className="flex-1">nltheodus@gmail.com</span>
        </div>
    </div>


        </>
    )

}

export default Contactus
