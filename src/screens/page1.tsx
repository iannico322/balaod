import SlideUp from "@/components/animation/revealUp"
import Loader from "@/components/loader/loader"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"


const Page1 = () => {
  return (
    <div className=" min-h-full w-full max-w-[1468px]  flex flex-col justify-center">
        <div className=" relative border border-border flex items-start justify-center h-[70vh] w-full ">
            <div className="  mt-16 relative h-[700px] w-full flex items-start overflow-hidden">



              <div className=" flex flex-col gap-9 relative z-10 w-full  min-h-0 px-8">
                <h1 className=" text-7xl w-[70%] text-accent-foreground bg-white/80 backdrop-blur-lg px-2 py-5 leading-[80px] font-bold">ISRAEL MUST END OCCUPATION
                OF PALESTINE TO STOP
                  FUELLING APARTHEID</h1>
                
                

              </div>

              <Button variant="outline" className=" w-[100px]  bottom-0  p-2"> Read More</Button>

             
           
                  <img className=" absolute h-[70vh] w-full object-cover" src="./assets/images/Images-1984662529-1468x710.jpg" alt="" />
              
             

            </div>
        </div>

        
  
    </div>
  )
}

export default Page1