import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import './Footer.css'
function Footer() {
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneNo] = useState('');
    const [comments, setComments] = useState('');
    const handleForm = (event) => {
/*         event.preventdefault();
 */        console.log(event)
    }
    const sendEmail = () => {
/* 
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'bneiltheodus@gmail.com',
            From : "bneiltheodus@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
         */
    }
    return (
        <>
        <div className="footer  w-full   justify-content-center pt-4 pb-4 bg-slate-700 text-white">
            
            <div className=" items-center  row col lg:border-r-2 xs:border-b-2 mb-2 text-center">
            <p className="hover:text-orange-800 pb-1">Quick Links</p>
            <ul  >
                <li className='hover:text-orange-800 text-center'>
                    <a href="/home">Home</a>
                </li>
                <li className='hover:text-orange-800'>
                    <a href="/home">About</a>
                    </li>
                    <li className='hover:text-orange-800'>
                    <a href="/home">Treatments</a>
{/*                         <NavLink to="/treatments" activeClassName="active-link">Treatments</NavLink>
 */}                    </li>
                    <li className='hover:text-orange-800'>
                    <a href="/home">Book My Appointment</a>
{/*                         <NavLink to="/book-appointment" activeClassName="active-link">Book My Appointment</NavLink>
 */}                    </li>
                    <li className='hover:text-orange-800'>
                    <a href="/contactus">Contact</a>
{/*                         <NavLink to="/contactus" activeClassName="active-link">Contact</NavLink>
 */}                    </li>
                </ul>


            </div>
            <div className="flex items-center min-w-s xs:border-t-2 row col text-center ">
            <p className="hover:text-orange-800">Links</p>

            <a href="www.google.com" className="row hover:text-blue-800 align-items-center" ><FaFacebook /></a>
            <a href="www.google.com" className="row hover:text-green-500" ><IoLogoWhatsapp /></a>
            </div>

           {/*  <div className="flex items-center min-w-s row col text-center">
                <p className="pb-2">Contact us</p>

                <form className="row"  onSubmit={sendEmail()} >
                <label >Email</label>
                <input type="text" value={email} onChange={(e) => {console.log(e.target.value),setEmail(e.target)}}/>

                <label >Phone No</label>
                <input type="text"  value={phoneno} onChange={(e) => setPhoneNo(e.target.value)}/>
                <label >Comments</label>
                <textarea  className="h-36" value={comments} onChange={(e) => setComments(e.target.value)}/>

                <button type="submit">submit</button>
                </form>
            </div> */}
        </div>
        
        </>
    )
}


export default Footer