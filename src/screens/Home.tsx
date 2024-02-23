
import ActivitiesCard from "@/components/card/card"

const Page1 = () => {
  return (
    <div className=" min-h-0 w-full max-w-[1468px]  flex flex-col justify-center">
        <div className=" mt-[60px] relative  flex items-start justify-center h-[70vh] w-full overflow-hidden ">
        <img className=" absolute h-[70vh] w-full object-cover" src="./assets/images/Images-1984662529-1468x710.jpg" alt="" />
            <div className=" relative min-h-full justify-center w-full flex items-center overflow-hidden">
              <div className=" relative flex flex-col gap-9  z-10 w-full text-center items-center  min-h-0 px-8 md:items-center py-10 sm:py-2">

                <h1 className=" w-[70%]  md:text-center text-[#262626]"><span className=" w-full text-7xl text-secondary-foreground px-3 space-x-2 bg-accent leading-relaxed md:text-center lg:text-6xl lg:leading-normal md:text-5xl md:leading-normal sm:text-3xl sm:leading-normal font-medium tracking-normal  ">ISRAEL MUST END OCCUPATION
                OF PALESTINE TO STOP
                  FUELLING APARTHEID</span></h1>
                
                <button className=" hover:bg-primary/75 transition-all duration-200 font-black shadow-2xl  text-white uppercase w-[200px] bg-primary text-xl p-4">
                  
                 Read More
                </button>
                

              </div>

              

             
           
                 
              
             

            </div>
            
        </div>
        {/* Activities part */}
        <div className=" mt-10 relative  flex  gap-10 flex-col  items-center min-h-[100vh] w-full ">
          <h1 className=" text-5xl">Activities</h1>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-4  gap-4  w-full min-h-0  justify-center">
            <ActivitiesCard/>
            <ActivitiesCard/>
            <ActivitiesCard/>
            <ActivitiesCard/>
           
          </div>

          <div className=" flex-col gap-4 w-full bg-card-foreground/20 min-h-0 py-20 flex items-center justify-center text-center">
            <h1 className=" md:text-4xl text-5xl font-semibold">We campaign for a world where human rights are enjoyed by all</h1>
            <p className=" font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque iure, animi, magnam asperiores quisquam officia dolores veritatis aliquid ea delectus nulla recusandae minus eveniet omnis, assumenda molestiae. At, modi.</p>
          </div>

          <h1 className=" text-5xl">Cudlit</h1>

          <div className=" grid grid-rows-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-6  gap-4  w-full min-h-0  justify-center">
            <ActivitiesCard className=" col-span-3 lg:col-auto"/>
            <ActivitiesCard className="col-span-3 lg:col-auto"/>
            <ActivitiesCard className="col-span-2 lg:col-auto"/>
            <ActivitiesCard className="col-span-2 lg:col-auto"/>
            <ActivitiesCard className="col-span-2 lg:col-auto"/>
        
           
          </div>

        </div>
        {/* Activities part */}

        
  
    </div>
  )
}

export default Page1