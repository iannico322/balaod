import Reveal from '@/components/animation/reveal'
import Reveal2 from '@/components/animation/reveal2'
import TextSlide from '@/components/animation/textSlide'
import ActivitiesCard from '@/components/card/card'
import { useNavigate } from 'react-router-dom'

const Activities = () => {


  const navigate = useNavigate()
  return (
    <div className="  mt-36 relative  flex  gap-10 flex-col  items-center min-h-0 w-full ">
    <TextSlide>
      
      <h1 className=" text-4xl font-fbold text-primary "><span>Activities</span></h1>
      
    
      
    </TextSlide>
   <Reveal2>
    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-4  gap-4   w-full sm:px-5 px-[4vw] min-h-0  justify-center items-center  ">
        {JSON.parse(localStorage.getItem('activities')||"").slice(0,4).map((e:any,key:any)=>(

                <ActivitiesCard key={key} e={e} />

        ))}
      
      
    </div>

       
          
        
    
  </Reveal2>



  <Reveal>
          <button  
          onClick={()=>{
            window.scrollTo(0, 0);
            navigate("/balaod/kudlit")

          }}
          className=" w-[400px] sm:w-[300px]  hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase  sm:text-sm bg-transparent border border-primary-foreground text-xl p-4">
            View More
          </button>
        </Reveal>
      




  </div>
  )
}

export default Activities