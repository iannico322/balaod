import SlideUp from "@/components/animation/revealUp"
import ActivitiesCard from "@/components/card/card"
import Loader from "@/components/loader/loader"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"


const Page1 = () => {
  return (
    <div className=" min-h-0 w-full max-w-[1468px]  flex flex-col justify-center">
        <div className=" relative border border-border flex items-start justify-center h-[70vh] w-full overflow-hidden ">
            <div className="  mt-[60px] relative h-[700px] w-full flex items-center overflow-hidden">



              <div className=" flex flex-col gap-9 relative z-10 w-full  min-h-0 px-8 md:items-center">

                <h1 className=" w-[70%]  md:text-center"><span className=" w-full text-7xl text-secondary-foreground bg-white leading-relaxed md:text-center  ">ISRAEL MUST END OCCUPATION
                OF PALESTINE TO STOP
                  FUELLING APARTHEID</span></h1>
                
                
                <Button size="lg" variant="outline" className=" w-[100px]  bottom-0  p-2"> Read More</Button>

              </div>

              

             
           
                  <img className=" absolute h-[70vh] w-full object-cover" src="./assets/images/Images-1984662529-1468x710.jpg" alt="" />
              
             

            </div>
            
        </div>

        <div className=" mt-10 relative border border-border flex  gap-10 flex-col  items-center h-[100vh] w-full ">
          <h1 className=" text-5xl">Activities</h1>
          <div className=" flex flex-wrap gap-10 w-full min-h-0  justify-center">
            <ActivitiesCard/>
            <ActivitiesCard/>
            <ActivitiesCard/>
          </div>

        </div>

        
  
    </div>
  )
}

export default Page1