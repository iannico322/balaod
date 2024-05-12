import Reveal2 from "@/components/animation/reveal2"
import Reveal3 from "@/components/animation/reveal3"

import image1 from './../assets/images/samples/about-us-1.jfif'
import image2 from './../assets/images/samples/about-us-2.jfif'
import image3 from './../assets/images/samples/about-us-3.jfif'
import Logo from './../assets/images/logo/BalaodWhiteOutFull@3x.png'
import { FacebookIcon, Mail, Twitter } from "lucide-react"
import CoverSlide from "@/components/animation/coverSlide"


const Page2 = () => {
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
       <CoverSlide>
        <div id="who-we-are" className=" px-20 sm:px-5 flex flex-col  w-full min-h-[80vh] pb-20 bg-primary-foreground pt-20 items-center justify-center  ">
          <div className=" flex flex-col justify-center gap-10  ">
          <Reveal2>
        

<h1 className=" text-primary font-fbold  md:text-4xl text-9xl font-semibold">
WHO WE ARE?
</h1>
</Reveal2>
         
<Reveal3>
          <div className=" flex gap-5">
         

            <p className=" font-flight   text-4xl text-primary  sm:text-sm">
            Balay Alternative Legal Advocates for Development in Mindanaw (Balaod Mindanaw), or popularly know as “Balaod”, is a legal resource non-government organization who believes in the legal empowerment of marginalized groups and communities as a way of advancing their access to justice.
          </p>
          </div>
          </Reveal3>
          
          </div>
        </div>
        </CoverSlide>
        <div id="what-we-do" className=" relative flex rounded-sm px-20 pl-36 sm:px-5 flex-col  w-full h-[80vh]  items-start  ">
          <div className=" absolute flex flex-col items-center h-full w-[30px] left-0 ml-20 ">
            <div className=" h-[50%] w-[20px] bg-primary-foreground">
            </div>
            <div className=" translate-y-[-20px] bg-primary-foreground rounded-full h-[50px] w-[50px]">

            </div>
          </div>

          <div className=" relative w-full pt-20 min-h-0 max-h-[370px] overflow-hidden  grid grid-cols-3 gap-2">
            {[image1,image2,image3].map((e:any)=>(
              <img src={e} className="  justify-self-center col-span-1 object-cover" alt="" />
            ))}
            

          </div>

          <div className=" flex  justify-center gap-10 pt-10  ">
          <Reveal2>
          <div className=" flex flex-col">

<h1 className=" text-primary font-fbold  md:text-4xl text-7xl font-semibold">
WHAT WE DO ?

</h1>

</div>
</Reveal2>
         
<Reveal3>
          <div className=" flex gap-5 ">
         

            <p className=" font-flight   text-3xl text-primary  sm:text-sm">
            Paralegal Formation and Capacity-building, Alternative Lawyering, Policy Formulation, and Advocacy Campaigning that is guided by active and non-violent participation as a vital standard.


          </p>
          </div>
          </Reveal3>
          
          </div>
        </div>
        <footer className=" min-h-0 py-10 pb-5 items-start flex w-full justify-center bg-primary  border border-none border-t-2 border-primary-foreground text-accent">
        <div className=" px-20 w-[80%] flex items-start justify-between">
          <div className=" flex items-start gap-10 font-flight">
            <div className=" flex flex-col items-start gap-2">
            <img src={Logo} className="  h-24 object-contain" alt="" />
            <p className=" text-base text-accent">Copyright © 2024 Balaod Mindanaw.</p>
          </div>

          <div className=" flex flex-col gap-2 text-sm">
            <p className=" cursor-pointer">Home</p>
            <p className=" cursor-pointer">About Us</p>
            <p className=" cursor-pointer">Our Programs</p>
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
balaodmindaw@bakaod.org <br />
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

export default Page2