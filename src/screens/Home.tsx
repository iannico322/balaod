
import Reveal from "@/components/animation/reveal"
import TextSlide from "@/components/animation/textSlide"
import ActivitiesCard from "@/components/card/card"
// import CudlitCard from "@/components/card/card2"
import Cover from './../assets/images/samples/42fb9365-3627-4ac0-8127-4305a99fe179.jfif'
import CoverSlide from "@/components/animation/coverSlide"
// import { Button } from "@/components/ui/button"
import Reveal2 from "@/components/animation/reveal2"
import Reveal3 from "@/components/animation/reveal3"

import partner1 from './../assets/images/partners/alg-web-logo-copy.png'
import partner2 from './../assets/images/partners/logo_0.png'
import partner3 from './../assets/images/partners/gjn-logo-stacked-left-aligned-CO.png'
import partner4 from './../assets/images/partners/R.png'
import partner5 from './../assets/images/partners/DSWD-Logo.png'

import partner6 from './../assets/images/partners/sec.png'
import partner7 from './../assets/images/partners/cdo_seal.png'
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer/Footer"







// import { Button } from "@/components/ui/button"


const Page1 = () => {
  const handleClick = (event:any, targetId:any) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
      <CoverSlide>
      <div className=" rounded-b-md relative  flex items-start justify-center h-[100vh] w-full overflow-hidden bg-fixed bg-cover bg-center object-contain " style={{backgroundImage:`url(${Cover})`}} >

        <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "></div>
      

        <div className=" relative h-full  w-full flex justify-between items-center  overflow-hidden ">
          <div className=" mt-10 sm:mt-0 md:mt-5 sm:px-2 relative flex flex-col gap-9 sm:gap-4  z-10 w-full px-20   min-h-0  lg:px-10 md:items-center py-10 sm:py-2 sm:items-start sm:w-[90%]">
            
              <h1 className=" w-[800px] text-accent  font-fbold text-3xl ">
             
                <span className=" text-5xl">BALAOD </span><span className=" font-fmedium">envisions a society where <b className=" font-fsemi-bold">legal empowerment </b> is a <b className=" font-fsemi-bold">way of life</b>  and a  <b className=" font-fsemi-bold">means to protect</b> and </span>  advance peoples access to justice and resources.
             
              
              </h1>
            

       
              <hr className=" animate__animated animate__slideInDown md:w-[70%] md:border-2 w-[20%] border-[2px] sm:border-[1px] border-primary-foreground sm:w-[50%]" />


            <Reveal>
              <button  
              onClick={(e) => {handleClick(e, 'more')
                
              }}
              className=" hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase  sm:text-sm bg-transparent border border-primary-foreground text-xl p-4">
                Read More
              </button>
            </Reveal>

            
          </div>
       
         
        </div>
        <div className=" z-30 flex px-5 absolute bottom-0 w-full h-12 items-center justify-end text-accent bg-black/20 text-sm ">

{/* <h1>© DIMITAR DILKOFF via AFP</h1> */}

</div>
      </div>
      </CoverSlide>

    
        <div id="more" className=" rounded-sm px-[5vw] sm:px-5 flex-col  w-full  min-h-0 pt-20 items-center justify-center  ">
          <div className=" flex  justify-center gap-10 items-start  ">
          <Reveal2>
          <div className=" flex flex-col">

<h1 className=" text-primary font-fbold  md:text-4xl text-7xl font-semibold">
Balaod
</h1>
<p className=" text-primary text-2xl  font-fextra-bold-italic">Noun. <span className=" font-fregular">A Cebuano term for law</span></p>
</div>
</Reveal2>
         
<Reveal3>
          <div className=" flex gap-5">
         

            <p className=" font-flight   text-3xl text-primary  sm:text-sm">
          To achieve our advocacies on gender equality, and legal improvement in the ownership and use of natural resources (resource tenure) within the context of people actively participating in governance, we constantly engage with various marginalized groups through legal empowerment approach

          </p>
          </div>
          </Reveal3>
          
          </div>
        </div>
      {/* Activities part */}

      <hr  className=" w-full border border-primary h-2 border-none border-b-2"/>
      <div className="  mt-36 relative  flex  gap-10 flex-col  items-center min-h-0 w-full ">
        <TextSlide>
          
          <h1 className=" text-4xl font-fbold text-primary "><span>Activities</span></h1>
          
        
          
        </TextSlide>
       <Reveal2>
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-4  gap-4   w-full sm:px-5 px-[4vw] min-h-0  justify-center  ">
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
        </div>
      </Reveal2>


        {/* <TextSlide>
          <h1 className=" text-4xl font-bold text-primary">Codlit</h1>
        </TextSlide>

        <div className=" grid grid-rows-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-6  gap-4  w-full min-h-0  justify-center mb-10">
          <CudlitCard className=" col-span-3 md:col-auto" />
          <CudlitCard className="col-span-3 md:col-auto" />
          <CudlitCard className="col-span-2 md:col-auto" />
          <CudlitCard className="col-span-2 md:col-auto" />
          <CudlitCard className="col-span-2 md:col-auto" />
        </div> */}


      </div>
      {/* Activities part */}

      <div id="Partners-and-Networks" className=" rounded-sm pt-40 px-20 sm:px-5 flex flex-col  w-full py-10  gap-10   min-h-0 items-center justify-center  ">
      <TextSlide>
      <h1 className=" text-4xl font-fbold text-primary text-center "><span>Partners and Networks
</span></h1>
      </TextSlide>
      
<div className=" w-full flex justify-center">

<Reveal2>
  <div className=" w-full min-h-0 flex justify-center">

  
<div  className=" flex flex-wrap justify-center   w-[90%] gap-5 sm:gap-2">
  {[partner1,partner2,partner3,partner4,partner5].map((e:any)=>(
    <img src={e} className=" col-span-1  h-32 sm:h-24 object-contain" alt="" />
  ))}

</div>
</div>
</Reveal2>
</div>
      </div>

      <div id="Accreditations" className=" rounded-sm  px-20 sm:px-5 flex flex-col  w-full py-10 pt-40  gap-20   min-h-0 items-center justify-center  ">
      <TextSlide>
        <h1 className=" text-4xl font-fbold text-primary text-center "><span>Accreditations
</span></h1>
</TextSlide>
      
<div className=" w-full flex justify-center">

<Reveal2>
  <div className=" w-full min-h-0 flex justify-center">
<div  className=" grid grid-cols-3 items-center justify-center w-full gap-10  sm:gap-2">
  {[partner7,partner6,partner5].map((e:any)=>(
    <div className=" flex flex-col gap-5">
      <img src={e} className=" col-span-1 sm:col-span-3 justify-self-center h-36 sm:h-24 object-contain" alt="" />
      <Button className=" font-fmedium bg-background text-primary border border-primary w-[80%] self-center">Learn More</Button>
    </div>
    
  ))}

</div>
</div>
</Reveal2>
</div>
      </div>

      <div className=" w-full h-[30vh]">

      </div>


   

     <Footer/>


    </div>
  );
}

export default Page1