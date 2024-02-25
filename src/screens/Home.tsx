
import Reveal from "@/components/animation/reveal"
import TextSlide from "@/components/animation/textSlide"
import ActivitiesCard from "@/components/card/card"
import CudlitCard from "@/components/card/card2"

const Page1 = () => {
  return (
    <div className=" min-h-0 w-full max-w-[1468px]  flex flex-col justify-center">
      <TextSlide>
         
        
      <div className=" rounded-b-md mt-[60px] relative  flex items-start justify-center h-[60vh] w-full overflow-hidden ">
        
        
        <div className="  z-10 absolute h-[60vh] w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "></div>
        <img
          className=" absolute h-[60vh] w-full object-cover"
          src="./assets/images/Images-1984662529-1468x710.jpg"
          alt=""
        />
        

        <div className=" relative min-h-full justify-center w-full flex items-center overflow-hidden">
          <div className=" mt-10 sm:mt-0 md:mt-5 sm:px-2 relative flex flex-col gap-9  z-10 w-full   min-h-0 px-20 md:items-center py-10 sm:py-2 sm:items-center">
            
              <h1 className="animate__animated animate__fadeIn w-[70%] font-bold text-7xl text-accent  space-x-2   md:text-center lg:text-6xl lg:leading-normal md:text-5xl md:leading-normal sm:text-center sm:text-4xl sm:leading-normal ">
                On the 75th year of the Universal Declaration of Human Rights
              </h1>
            

       
              <hr className=" animate__animated animate__slideInDown md:w-[70%] md:border-2 w-[20%] border-[5px] border-primary-foreground" />


            <Reveal>
              <button className=" hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase w-[200px] bg-transparent border border-primary-foreground text-xl p-4">
                Read More
              </button>
            </Reveal>

            
          </div>
          <div className=" z-50 flex px-5 absolute bottom-0 w-full h-8 items-center justify-end text-accent bg-black/20 text-sm ">

              <h1>© DIMITAR DILKOFF via AFP</h1>

            </div>
        </div>
      </div></TextSlide>
      {/* Activities part */}
      <div className=" mt-16 relative  flex  gap-10 flex-col  items-center min-h-[100vh] w-full ">
        <TextSlide>
          
          <h1 className=" text-4xl font-bold text-primary "><span>Activities</span></h1>
          
        
          
        </TextSlide>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-4  gap-4  w-full min-h-0  justify-center">
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
        </div>

        <div className=" rounded-sm px-20 flex-col gap-4 w-full bg-[#ff8c00] min-h-0 py-20 flex items-center justify-center text-center">
          <h1 className=" text-accent  md:text-4xl text-5xl font-semibold">
            We campaign for a world where human rights are enjoyed by all
          </h1>
          <p className=" font-light text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            doloremque iure, animi, magnam asperiores quisquam officia dolores
            veritatis aliquid ea delectus nulla recusandae minus eveniet omnis,
            assumenda molestiae. At, modi.
          </p>
        </div>

        <TextSlide>
          <h1 className=" text-4xl font-bold text-primary">Codlit</h1>
        </TextSlide>

        <div className=" grid grid-rows-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-6  gap-4  w-full min-h-0  justify-center">
          <CudlitCard className=" col-span-3 lg:col-auto" />
          <CudlitCard className="col-span-3 lg:col-auto" />
          <CudlitCard className="col-span-2 lg:col-auto" />
          <CudlitCard className="col-span-2 lg:col-auto" />
          <CudlitCard className="col-span-2 lg:col-auto" />
        </div>
      </div>
      {/* Activities part */}
    </div>
  );
}

export default Page1