import { Eye, CircleDot, Rocket, Play } from 'lucide-react';

export default function HomeMobile() {
    return (
    <div className='w-full flex justify-center bg-gray-200'>
        <div className="min-h-screen flex flex-col items-center gap-6 px-6">
  
  <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#0000B8] mt-20 max-w-md mx-auto px-4">
    "Building the Future of Tech Inclusion one community a time"
  </h1>

  <h1 className="text-center text-xl font-bold text-[#0000B8] px-4">
    using AI + Empathy
  </h1>

  <p className="text-center text-xs text-gray-700 max-w-sm mx-auto px-0">
    Creating an inclusive and sustainable future of edtech for young Africans that are marginalized, underprivileged, and specially assisted.
  </p>

  <button className="bg-[#0000B8] text-white rounded-full px-10 py-3 mt-6 hover:opacity-90 transition font-semibold text-lg w-fit whitespace-nowrap" style={{padding: '0.3rem 1.0rem'}}>
  Learn More
</button>

  <img src="/homeImage.png" alt="Description of the image" className="w-full max-w-sm h-auto" />

     <div className="flex flex-col items-center w-full gap-4 mt-6 bg-gray-150">
    <div className='' style={{ padding: '1.5rem 0.5rem' }}>
    <h2 className="text-[#0000B8] text-center text-2xl font-bold">Our Foundation</h2>
   <p className="text-center text-xs text-gray-700 max-w-sm mx-auto px-0" >Building sustainable impact through clear vision, focused mission, and measurable objectives
   </p>
   </div>

<div className="homestatements" style={{marginTop: '5px'}}>

    <div className="statements">
      <Eye className="icon-buttonmobile" size={24} strokeWidth={2} color="white" />
      <h2 className='foundationmobile text-[#0000B8] font-semibold'>Vision</h2>
      <p className="foundP text-xs text-gray-700 max-w-xs mx-auto px-0">
        To provide the best technological learning, grooming, and growing platform for marginalized and special needs people, and also become the number one ed-tech solution provider for individuals, businesses, and organizations globally.
      </p>
      </div>

      <div className="statements">
      <CircleDot className="icon-buttonmobile" size={24} strokeWidth={2} color="white"/>
      <h2 className='foundationmobile text-[#0000B8] font-semibold'>Mission</h2>
      <p className="foundP text-xs text-gray-700 max-w-xs mx-auto px-0">Our mission is to build an inclusive future where marginalized and special needs individuals have equal access to tech skills and opportunities. We aim to break barriers, promote inclusivity, and empower everyone to thrive in the global tech economy through accessibility and policy advocacy.
      </p>
        </div>
        
      <div className="statements">
      <Rocket className="icon-buttonmobile" size={24} strokeWidth={2} color="white"/>
      <h2 className='foundationmobile text-[#0000B8] font-semibold'>Objectives</h2>
      <p className="foundP text-xs text-gray-700 max-w-xs mx-auto px-0">By 2030, we aim to train 10,000+ marginalized individuals, onboard 5,000+ to our AI-powered platform, lead in inclusive edtech, influence policies in 20+ countries, and build hubs and partnerships for learning and jobs.
        </p>
</div>

</div>
            

<div className="flex items-center gap-6 py-4 "style={{marginTop: '-50px', marginBottom: '-50px' }}>

  <img src="partners.png" alt="" className="h-20 w-20 object-contain flex-shrink-0" />
  <img src="waff-removebg.png" alt="" className="h-4 w-8 object-contain flex-shrink-0" />
  <img src="falf-removebg.png" alt="" className="h-4 w-8 object-contain flex-shrink-0" />
  <img src="experteens-removebg.png" alt="" className="h-12 w-12 object-contain flex-shrink-0" />
  <img src="loi-removebg.png" alt="" className="h-4 w-12 object-contain flex-shrink-0"/>
</div>
</div>


   <div className="flex flex-col items-center bg-gray-200">
    <h2 className="text-[#0000B8] text-center text-2xl font-bold">Impact+</h2>
   <p className="text-center text-xs text-gray-700 mx-auto px-0" style={{width: '80%'}}>Measuring our global reach and the transformative effect we're having on communities worldwide
   </p>
   <img src="theMap.png" alt="" className="w-full h-auto mt-4" />
   </div>
  
<div className='flex flex-col items-center w-full bg-gray-150'>
   <h2 className="text-[#0000B8] text-center text-2xl font-bold" style={{marginTop: '30px'}}>Our Initiative</h2>
  <div className="statements" style={{ border: '0' }}>
  <div className="square-background">
  <img src="/IMG_7688-removebg-preview 1.png" alt=""/>  
  </div>

  <div className="textdiv" style={{ marginTop: '20px' }}>
  <img className="icons" src="/HSNAT2-removebg-preview 1.png"alt=""/>
  <h3 className="font-bold text-[#0000B8] text-center">
  Empowering Accessibility Through A.I
  </h3>

  <p className="text-sm text-center text-gray-700 max-w-sm mx-auto px-0">

      “Through our Hak-AbilityTech Initiative; we are building a world where the visually impaired, speech impaired, or hearing impaired can learn tech skills, work in tech establishments,and we are doing all this using A.I”
    <br/>- Victor Eyo
  </p>

  <button className='border-1 border-[#0000B8] text-[#0000B8] hover:bg-[#0000B8] hover:text-white' style={{ borderRadius: '30px', paddingLeft:'10px', paddingRight: '10px', marginTop: '20px', fontSize: '14px' }}>
    Learn More</button>
    </div>
    </div>

    <div className="imamobile">

      <div className="imabongmobile-full">
                        <img src="new_imabong.png" alt="" />
                    </div>

                     <div className="chatbotmobile">
                        <h2 className="text-[#0000B8] font-bold">
                            NOT SURE WHICH TECH SKILL
                            TO LEARN?
                        </h2>
                        <h4 className="text-gray-700 flex flex-start text-sm  max-w-sm mx-auto px-0\">
                             if you’re struggling to find the right tech program or 
                             don’t know where to start, chat with Imaobong — our A.I. chatbot ready to guide you.
                        </h4>
                        <button className='border-2 border-[#0000B8] text-[#0000B8] hover:bg-[#0000B8] hover:text-white' style={{ borderRadius: '30px', paddingLeft:'10px', paddingRight: '10px', marginTop: '30px', marginBottom:'20px'}}>Chat with Imabong</button>
                    </div>
                   
                </div>

                    <div className="statements" style={{ border: '0' }}>
                    <div className="imgdiv1">
                     <img src="homeImage.png" alt="" style={{ marginTop: '20px' }} />
                     </div>

                      <div className="textdiv">
                    <img className="icons" src="HakStudios.png" alt=""/>
                    <h3 className="text-[#0000B8] font-bold text-center">
                        When Inclusion Meets Creativity
                    </h3>
                    <p className="text-sm text-center text-gray-700 mx-auto px-0">
                        We build tech talent, design meaningful solutions, write impactful stories, and teach the next generation, all through the power of inclusive innovation.
                    </p>
                     <button className='border-1 border-[#0000B8] text-[#0000B8] hover:bg-[#0000B8] hover:text-white' style={{ borderRadius: '30px', paddingLeft:'10px', paddingRight: '10px', marginTop: '15px', fontSize: '14px'}}>Collaborate with us</button>

                
                </div>
                </div>
          


             <section className="homesection3m">
                <div className="imgdiv2mobile">
                <h4 className="text-white text-center"> Meet Hakportals!</h4>
                <p className="p2m">Easily launch your courses, ebooks, events, and products <br/>— and accept payments all in one place.
                    </p>

                     <div className="imgdiv1mobile">
                    <img src="hakportals.png" alt="" />
                    </div>
                    </div>

                </section>

 <section className="homesection4">
                <h2>Other Initiatives</h2>
                <p className="p2">Transforming lives through innovative programs designed<br/> 
                    to create inclusive opportunities in technology
                </p>

                <div className="homestatements">
                    <div className="statements">
                        <img className="icons" src="TECH_HUB.png" alt=""/>
                        <h3>Hakeela Tech Hub</h3>
                        <p className="flex flext-start text-sm text-gray-700 max-w-sm mx-auto px-0\">
                           A network of physical tech hubs across at least 10 African countries, providing young Africans with quiet, durable workspaces to learn, collaborate, innovate, and grow.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="statements">
                        <img className="icons" src="/HFUND2-removebg-preview 1.png" alt=""/>
                        <h3>Hakeela Fund</h3>
                        <p className="flex flext-start text-sm text-gray-700 max-w-sm mx-auto px-0\">
                            A dedicated scholarship program aimed at 
                            providing educational sponsorships for 
                            children and teens from marginalized 
                            communities across Africa.
                        </p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>


<section className="homesection6">
                <h2 className="text-[#0000B8] text-center text-2xl font-bold">Meet Our Team</h2>
                <p>
                    Check out the unique individuals that are<br/> 
                    powering these amazing initiatives
                </p>
                <div className="team">
                    <div>
                        <div className="circle-background">
                            <img src="/van-removebg-preview 1.png" alt="" />
                        </div>
                        <h5>Victor <br/>Eyo</h5>
                        <p>Founder, <br/>Director</p>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/toyin-removebg-preview 1.png" alt="" />
                        </div>

                        <h5>Oluwatoyin Yerokun</h5>
                        <p>Information/Project Director</p>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/emmanuel-removebg.png" alt="" />
                        </div>
                        <h5>Edor Emmanual</h5>
                        <p>Chief Product Designer</p>
                    </div>
                    <div>
                        <div className="circle-background">
                            <img src="/comfort-removebg-preview 1.png" alt="" />
                        </div>
                        <h5>Comfort Alphonsus</h5>
                        <p>Chief Graphics Designer</p>
                    </div>

                </div>

 <div className="learnmobile2">
                    <div className="homelearnmobile2">
                        <h2 className="font-bold">"Learn a Tech Skill with <br/>
                            Hakeela today"
                        </h2>
                        <button>Get Started</button>
                        <img src="/Frame 180.png" alt="" />
                    </div>
                </div>

<div className="supporttmobile">
                    <div className="supportmobile bg-gray-200">
                        <div className="donatemobile">
                            <button className='font-bold'>Support our mission</button>
                            <h1 className='font-bold'>Donate</h1>
                            <p>An interview with a participant from our Special needs and tech Workshop,<br/> 
                            Calabar chapter which aimed to teach digital skills to young people with<br/> 
                            hearing and speech disabilities. Join Hakeela as we empower special and<br/> 
                            marginalized youth in Africa with digital skills.</p>
                            <div className="bottons">
                                <button id="dbotton">Donate</button>
                                <button id="lbotton">Learn More</button>
                            </div>
                        </div>

                        <div className="interviewmobile">
                            <div className="playbotton"><Play color="white" size={20}/></div>
                            <h4>Special Needs Workshop Interview</h4>
                            <p>Watch an inspiring interview with a participant from our Calabar<br/> 
                            chapter workshop, sharing their journey of learning digital skills.</p>
                        </div>
                    </div>
                </div>
            </section>

              
 </div>
 </div>

</div>

    )
}
