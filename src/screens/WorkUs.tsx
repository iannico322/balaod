

import Logo from './../assets/images/logo/BalaodWhiteOutFull@3x.png'
import { FacebookIcon, Mail, Twitter } from "lucide-react"
import CoverSlide from "@/components/animation/coverSlide"
import Cover from './../assets/images/samples/977fb91a-3b8d-486b-9ef9-67c7349a80a5.jpg'
import Program1 from "./../assets/images/samples/programs1.png";
import Program2 from "./../assets/images/samples/programs2.png";
import Program3 from "./../assets/images/samples/programs3.jfif";
import Program4 from "./../assets/images/samples/programs4.jfif";
import Reveal4 from "@/components/animation/reveal4"
import { Button } from '@/components/ui/button';




const WorkUs = () => {
  const programs =[{
    title:"Human Rights Promotion",
    img:Program1,
    description:"This involves the work of assessing the status of human rights in many marginalized communities, capacitating community paralegals in forwarding their rights, and facilitating the advocation of policies and programs that strengthen and enhance their rights-claiming mechanisms."
  },
  {
    title:"Environmental Justice",
    img:Program2,
    description:"BALAOD firmly believes that all the natural resources: land, trees, air, water and all the living plants and animals are critical common resources that must be shared and enjoyed by, and for the growth and development of,  all generations, present and future. "
  },
  {
    title:"Women and Children Protection",
    img:Program3,
    description:"The number of cases of abuse, exploitation and discrimination against women and children in our society show the extent by which this affected sector are marginalized, oppressed and objectified. BALAOD strives to work for the dismantling of structural policies, discriminate practices and even traditional mindsets that put women and children at the oppressive end."
  },

  {
    title:"Institutional Development",
    img:Program4,
    description:"In order to effectively perform its mission and successfully pursue its vision, BALAOD must also strive to continuously enhance its operations and ways of doing things in order to be responsive to the needs of its partner communities and to the challenges posed upon by society."
  },


]
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
    <CoverSlide>
    <div id="who-we-are" className=" px-20 sm:px-5 flex flex-col  w-full min-h-[40vh] pb-20 bg-primary-foreground pt-20 items-center justify-center bg-fixed bg-cover bg-center object-contain  " style={{backgroundImage:`url(${Cover})`}}>
        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] ">
        </div>
          <div className="  z-20 flex flex-col items-center justify-center gap-5  ">
        
            <h1 className=" mt-20  rounded-full text-accent font-fbold  md:text-4xl text-6xl font-semibold">
            Work With Us
            </h1>

            
      </div>
          </div>
    </CoverSlide>


    <h1 className="  bg-primary-foreground py-5 px-10 w-full  text-accent font-fbold  md:text-4xl text-2xl font-semibold text-center">Contact Details</h1>

    <div className=' flex justify-around'>

    
    <div className=' flex flex-col justify-around gap-5 py-20 px-[5vw]'>
      {[{
        head:"Email",
        url:"mailto:balaodmindanaw@gmail.com",
        link:"balaodmindanaw@gmail.com"
      },
      {
        head:"Facebook",
        url:"https://www.facebook.com/BALAODMindanaw",
        link:"BALAOD Mindanaw"
      },
      {
        head:"Address",
        url:"https://www.facebook.com/BALAODMindanaw",
        link:"B19 L24, Kalantas St., P.N Roa, Calaanan, Canitoan, Cagayan de Oro, PH, 9000"
      }


      ].map((e:any)=>(
        <div className=' flex flex-col gap-2' >
        <h1 className=' font-fbold text-xl text-primary uppercase'>{e.head}</h1>
        <a className=' w-[300px] cursor-pointer text-gray-600 pl-5 font-fregular' href={e.url
        }>{e.link
        }</a>
      </div>
      ))}
    </div>

    <div>
 
    </div>

    

   </div>




    

   
        
        <footer className=" min-h-0 py-10  pb-5 items-start flex w-full justify-center bg-primary  border border-none border-t-2 border-primary-foreground text-accent">
        <div className=" px-20 w-[80%] flex items-start justify-between">
          <div className=" flex items-start gap-10 font-flight">
            <div className=" flex flex-col items-start gap-2">
            <img src={Logo} className="  h-24 object-contain" alt="" />
            <p className=" text-base text-accent">Copyright © 2024 Balaod Mindanaw.</p>
          </div>

          <div className=" flex flex-col gap-2 text-sm">
            <p className=" cursor-pointer">Home</p>
            <p className=" cursor-pointer">About Us</p>
            <p className=" cursor-pointer">Our WorkUs</p>
            <p className=" cursor-pointer">Work With Us</p>

          </div>

          <div className=" flex flex-col gap-2 text-sm">
            <a href="#who-we-are" className=" cursor-pointer">Who we are?</a>
            <a href="#what-we-do" className=" cursor-pointer">What we Do?</a>

          </div>
          </div>
          

          <div>
            <h1 className=" font-fbold">CONTACT US</h1>
            <p className=" font-fregular">(+63) 923-1271-122 <br />
balaodmindanaw@gmail.com <br />
Cagayan de Oro City, PH, 9000</p>
<div className=" flex gap-5 py-5 cursor-pointer ">

  <FacebookIcon/> <Twitter/> <Mail/>
</div>
          </div>
          

        </div>

      </footer>
  
    </div>
  )
}

export default WorkUs