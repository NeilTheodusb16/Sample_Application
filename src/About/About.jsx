import React from "react";
import './About.css'

function About () {


    return (
        <>
       {/*  <div className="  flex p-4">
            <div className="row ">
            <h4 className="col">EXPERTISE</h4>
            <p className="pl-1 pr-4">Welcome! I am an experienced MD Homeopath with 5 years of clinical expertise dedicated to holistic healthcare. I earned my BHMS degree in 2015 and completed my MD in Homeopathic Medicine in 2020, specializing in diagnosing and treating complex chronic cases. My clinical background, combined with a passion for innovative healthcare approaches, allows me to guide patients toward improved well-being.  </p>
            
            </div>
            <img src="https://via.placeholder.com/150" className="row w-44 h-44" alt="..." />
        </div>
        <div className="  p-4">

            <img src="https://via.placeholder.com/150" className="img1 w-44 h-44 p-1" alt="..." />
            <h4 className="">EXPERTISE</h4>
            <p className="pl-1 pr-4">Welcome! I am an experienced MD Homeopath with 5 years of clinical expertise dedicated to holistic healthcare. I earned my BHMS degree in 2015 and completed my MD in Homeopathic Medicine in 2020, specializing in diagnosing and treating complex chronic cases. My clinical background, combined with a passion for innovative healthcare approaches, allows me to guide patients toward improved well-being.  </p>
            </div>


            <div className="  p-4">


</div> */}
 <p className="text-xl text-center mb-4   pt-2 font-semibold">Expertise</p>
    <div className="section m-2 mt-4 pt-2 text-center mb-4 bg-gray-400">

   
    <div className="flex flex-col sm:flex-row  items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 ">
        <img 
            src="https://via.placeholder.com/150" 
            className="w-44 h-44 rounded-full border-2 border-gray-300"
            alt="Dr. [Name] - MD Homeopath" 
        />
        <p className=" mt-5">
            Welcome! I am an experienced MD Homeopath with 5 years of clinical expertise dedicated to holistic healthcare. 
            I earned my BHMS degree in 2015 and completed my MD in Homeopathic Medicine in 2020, specializing in diagnosing and treating complex chronic cases. 
            My clinical background, combined with a passion for innovative healthcare approaches, allows me to guide patients toward improved well-being.
        </p>

        
    </div>
    </div>
 
    <p className="text-center text-xl font-semibold mb-4">VISION</p>
    <div className="bg-gray-400 m-2 section flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <img 
            src="https://via.placeholder.com/150" 
            className="img1 w-44 h-44 rounded-full border-2 border-gray-300"
            alt="Dr. [Name] - MD Homeopath" 
        />
        <p className="text-center mt-5">
        At [ Clinic Name], we envision a healthier, more balanced world where natural healing methods are embraced. Our goal is to create a community empowered by holistic health and well-being.

        </p>

        
    </div>

    <p className="text-center text-xl font-semibold mb-4 mt-4">MISSION</p>
    <div className="bg-gray-400 m-2 section flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
       
        <p className="text-center mt-5">
        We are committed to providing exceptional homeopathy consultations that focus on your individual health journey. Our mission is to listen, understand, and support you with personalized treatment plans that address both your physical and emotional needs. We strive to educate and inspire, helping you to harness the power of homeopathy for lasting wellness. 
        </p>
        <img 
            src="https://via.placeholder.com/150" 
            className="img w-44 h-44 rounded-full border-2 border-gray-300"
            alt="Dr. [Name] - MD Homeopath" 
        />
        
    </div>
    
{/*         <p className="text-center">Expertise</p>
        <div className="section-container">
        <img src="https://via.placeholder.com/150" className="  img1 w-44 h-44" alt="..." />
            <p className="">Personalized Care</p>
           

        </div>
        <p className="text-center">Expertise</p>
        <div className="row section-container">
            
            <p className="col">Personalized Care</p>
            <img src="https://via.placeholder.com/150" className="card-img-top w-44 h-44" alt="..." />

        </div> */}

 
    <div className="text-center p-4  w-full mb-2  ">
        <p className="mb-4 font-bold custom-text">WHY CHOOSE US?</p>

        <div className="card-container grid gap-2 justify-center">
            <div className="card relative  w-100 text-center p-3 m-2">
            <h4><strong>Personalized Care</strong> </h4>
            <p className="pt-1">We create individualized treatment plans tailored to your unique needs, addressing both physical and emotional health.
            </p>
            </div>
            <div className="card  w-100 text-center p-3 m-2">
            <h4><strong>Holistic Approach </strong> </h4>
            <p className="pt-1">We focus on treating the root causes of your issues for comprehensive well-being.</p>
            </div>
            <div className="card  w-100 text-center p-3 m-2">
            <h4><strong>Natural Remedies</strong> </h4>
            <p className="pt-1">Our safe, natural treatments are gentle on your body and effective in promoting healing.
            </p>
            </div>
            <div className="card  w-100 text-center p-3 m-2">
            <h4><strong>Compassionate Support</strong> </h4>
            <p className="pt-1">We provide a nurturing environment where your health journey is prioritized, and your concerns are heard.</p>
            </div>
            <div className="card  w-100 text-center p-3 m-2">
            <h4><strong>Proven Results</strong> </h4>
            <p className="pt-1">Many clients experience significant improvements in their health and quality of life.</p>
            </div>
            <div className="card  w-100 text-center p-3 m-2">
            <h4><strong>Flexible Options</strong> </h4>
            <p className="pt-1">WEnjoy the convenience of online consultations to fit your schedule.
            </p>
            </div>
            
        </div>
{/*         <p><i>Take the first step towards a healthier you—schedule your consultation today!</i></p>
 */}    </div>
 
    <p className="text-center"><i>Take the first step towards a healthier you—schedule your consultation today!</i></p>

       </>
    )
}

export default About