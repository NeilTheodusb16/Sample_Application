import React from "react"
import Homeimg from "../assets/HomeImg.jpg"
import './home.css'

import {Accordion,Carousel} from 'react-bootstrap';

function Home ()  {

  
  
    return (
        <>
        <div className="  ">
          <div className="w-full flex justify-start  gap-4 mt-4 row">

         
        {/* <div className="col items-center" >
  
            <p className="text-4xl pl-4 pt-4 pb-2 head">Welcome to …..Homoeopathy !</p>
            <p className="pl-4 pt-4 ">Homeopathy offers a holistic approach to healing by focusing on the root causes of illness
            instead of merely alleviating symptoms. Its broad and adaptable scope makes it suitable for a
            variety of acute and chronic conditions. Grounded in the principle of &quot;like cures like,&quot;
            homeopathy treats each person as a unique individual, taking into account their physical,
            emotional, and mental aspects. Safe for all ages, homeopathic treatment effectively addresses
            a wide range of health issues while promoting overall balance and well-being</p>

           
        </div> */}
                   <p className="text-2xl whitespace-normal mt-4 pl-4 pt-4 pb-2 head">Welcome to …..Homoeopathy !</p>
 
 <div className=" flex flex-col sm:flex-row pl-4  pb-2 items-center">
        
        <p className="p-3  pt-4">
            Welcome! I am an experienced MD Homeopath with 5 years of clinical expertise dedicated to holistic healthcare. 
            I earned my BHMS degree in 2015 and completed my MD in Homeopathic Medicine in 2020, specializing in diagnosing and treating complex chronic cases. 
            My clinical background, combined with a passion for innovative healthcare approaches, allows me to guide patients toward improved well-being.
        </p>
        <img 
           src={Homeimg}
            className="w-44 h-44 rounded-full border-2 border-gray-300 mt-3"
            alt="Dr. [Name] - MD Homeopath" 
        />
        
    </div>
       {/*  <div className="col-3 p-4 m-3" >
          
  
       

            <img src={Homeimg} className="custom pr-4"/>
        </div> */}
        <p className="mb-4 pb-4"><strong><i>Your wellness is our priority! Schedule an online homeopathic consultation and start
        healing today.</i></strong></p>
        </div>
        </div>

        
      <div className=" flex justify-start row p-4 mb-4">
      <h4 className="pb-3"><strong>Treatments</strong></h4>
      <p className="mb-4 pb-4"><i>Embrace holistic healing—book your online consultation and discover the benefits of homeopathy!</i></p>
{/*        <div className=" bg-blue-300 row ">
        <div className=" flex items-center max-w-xs h-48 ">
        <p className="col">Skin Conditions 

            </p>
        </div>

        <div className=" row flex items-center  max-w-xs h-48 overflow-auto">
        <p className="col">FAO'S</p>
        <p className="col">Respiratory Issues 
        </p>
        </div>
        <div className=" row flex items-center  max-w-xs h-48 overflow-auto">
        <p className="col">FAO'S</p>
        <p className="col">Digestive Disorders 
        </p>
        </div>
        <div className=" row flex items-center max-w-xs h-48  overflow-auto">
        <p className="col">FAO'S</p>
        <p className="col">Digestive Disorders 
        </p>
        </div>
        <div className=" row  flex items-center max-w-xs h-48  overflow-auto">
        <p className="col">FAO'S</p>
        <p className="col">Digestive Disorders 
        </p>
        </div>
        <div className=" row mx-4 flex items-center p-4 max-w-xs h-48 mb-4 overflow-auto">
        <p className="col">FAO'S</p>
        <p className="col">Digestive Disorders 
        </p>
        </div>
        <div className=" row mx-4 flex items-center p-4 max-w-xs h-48 mb-4 overflow-auto">
        <p className="col">FAO'S</p>
        <p className="col">Digestive Disorders 
        </p>
        </div>
        <div className=" row mx-4 flex items-center p-4 max-w-xs h-48 mb-4 overflow-auto">
        <p className="col">FAO'S</p>
        <p className="col">Digestive Disorders 
        </p>
        </div>
        </div> */}
      </div>

      <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-around carousel-inner-container">
          {/* Card 1 */}
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 1" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 1</h5>
                    <p className="card-text">This is card 1 description.</p>
                    <ul>
                      <li>Field 1: Data</li>
                      <li>Field 2: Data</li>
                      <li>Field 3: Data</li>
                      <li>Field 4: Data</li>
                      <li>Field 5: Data</li>
                      <li>Field 6: Data</li>
                    </ul>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title">Back of Card 1</h5>
                    <p className="card-text">This is the back of card 1 content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 2" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 2</h5>
                    <p className="card-text">This is card 2 description.</p>
                    <ul>
                      <li>Field 1: Data</li>
                      <li>Field 2: Data</li>
                      <li>Field 3: Data</li>
                      <li>Field 4: Data</li>
                      <li>Field 5: Data</li>
                      <li>Field 6: Data</li>
                    </ul>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title">Back of Card 2</h5>
                    <p className="card-text">This is the back of card 2 content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 3" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 3</h5>
                    <p className="card-text">This is card 3 description.</p>
                    <ul>
                      <li>Field 1: Data</li>
                      <li>Field 2: Data</li>
                      <li>Field 3: Data</li>
                      <li>Field 4: Data</li>
                      <li>Field 5: Data</li>
                      <li>Field 6: Data</li>
                    </ul>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title">Back of Card 3</h5>
                    <p className="card-text">This is the back of card 3 content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 4" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 4</h5>
                    <p className="card-text">This is card 4 description.</p>
                    <ul>
                      <li>Field 1: Data</li>
                      <li>Field 2: Data</li>
                      <li>Field 3: Data</li>
                      <li>Field 4: Data</li>
                      <li>Field 5: Data</li>
                      <li>Field 6: Data</li>
                    </ul>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title">Back of Card 4</h5>
                    <p className="card-text">This is the back of card 4 content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 5" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 5</h5>
                    <p className="card-text">This is card 5 description.</p>
                    <ul>
                      <li>Field 1: Data</li>
                      <li>Field 2: Data</li>
                      <li>Field 3: Data</li>
                      <li>Field 4: Data</li>
                      <li>Field 5: Data</li>
                      <li>Field 6: Data</li>
                    </ul>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title">Back of Card 5</h5>
                    <p className="card-text">This is the back of card 5 content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 6" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 6</h5>
                    <p className="card-text">This is card 6 description.</p>
                    <ul>
                      <li>Field 1: Data</li>
                      <li>Field 2: Data</li>
                      <li>Field 3: Data</li>
                      <li>Field 4: Data</li>
                      <li>Field 5: Data</li>
                      <li>Field 6: Data</li>
                    </ul>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title">Back of Card 6</h5>
                    <p className="card-text">This is the back of card 6 content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>


        <div className="mt-4 px-4 pt-4 mb-4">
      
            <h4 className="pb-3"><strong>FAO'S</strong></h4>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How does homeopathy work?
        </Accordion.Header>
        <Accordion.Body>
        Homeopathy operates on the principle of "like cures like." This means that a substance that causes symptoms in a healthy person can be used to treat similar symptoms in a sick person. Homeopathic remedies are chosen based on a thorough assessment of the individual's physical, emotional, and psychological state.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is homeopathy safe?</Accordion.Header>
        <Accordion.Body>
        Yes, homeopathic remedies are generally considered safe and free from harmful side effects. They are made from natural substances and are highly diluted. However, it’s essential to consult a qualified homeopath for proper guidance.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> How long does it take to see results?
        </Accordion.Header>
        <Accordion.Body>
        The time frame for seeing results can vary based on the individual and the condition being treated. Some may experience improvements within a few days, while others may require several weeks or months. A follow-up consultation is usually recommended to assess progress and adjust treatment if needed.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can homeopathy help with chronic conditions?
        </Accordion.Header>
        <Accordion.Body>
        Yes, homeopathy is often effective for chronic conditions, as it aims to address the root causes and supports the body’s healing processes. Many patients find relief from long-term issues through personalized homeopathic treatment.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can I use homeopathy alongside conventional medicine?
        </Accordion.Header>
        <Accordion.Body>
        Yes, homeopathy can often be used alongside conventional treatments. However, it’s important to inform your healthcare provider about any conventional medicines you are taking to ensure coordinated care.        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>

        
        </>
    )
}


export default Home