
import Footer from '@/components/footer/Footer'
import Tiptap from './Tiptap'
import { Link } from 'react-router-dom'
import { LocateIcon } from 'lucide-react'



const Blog = () => {
  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">

<img src={JSON.parse(localStorage.getItem("selected" )|| "").image} className=' mt-5 text-xl mb-5 object-cover h-[50vh]' alt="" />

        <div className=" mt-5 px-[10vw] md:px-5">
        <Link to="/balaod/kudlit" className=" w-[90px] font-fmedium flex items-center justify-between px-2 py-2 bg-background text-black font-bold border border-gray-300 hover:bg-[#e4e4e4]">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Kudlit
    </Link>
    <div className=" flex justify-between border border-x-0 py-5 text-base font-fmedium mt-4 ">
        <p>{JSON.parse(localStorage.getItem("selected" )|| "").date} </p>
        <p className=' flex gap-3 items-center'> <LocateIcon className=' h-4 w-4'/> Cagayan de Oro, 9000</p> 
    </div>

    <div className=" flex flex-col  mt-5 font-fmedium text-lg gap-5 mb-36">

    
    <div>
            <h1 className=" text-primary text-3xl font-fbold">{JSON.parse(localStorage.getItem("selected" )|| "").title}
            </h1>
        <p className=' font-fmedium'>By: {JSON.parse(localStorage.getItem("selected" )|| "").author}</p>
        </div>

    <Tiptap/>
{/*         
        <div>
            <h1 className=" text-primary text-3xl font-fbold">Community Engagement: Local Citizens Participate in Process
            </h1>
        <p className=' font-fmedium'>By: Aurora Parong</p>
        </div>
        

       

        <p>Community engagement plays a pivotal role in fostering collaboration and ensuring that local citizens have a voice in the decision-making processes that affect their lives. The photo above, taken during a community meeting organized by Balay Mindanaw, captures the essence of this engagement.</p>

        <h1 className=' font-fbold text-xl'>The Importance of Community Involvement</h1>

        <p>Involving community members in planning and decision-making processes leads to more effective and sustainable outcomes. When citizens are actively engaged, they are more likely to support and contribute to initiatives, creating a sense of ownership and responsibility. This collaborative approach helps in addressing local issues with locally informed solutions.</p>

        <h1 className=' font-fbold text-xl'>Balay Mindanaw's Approach</h1>


        <p>Balay Mindanaw, an organization dedicated to promoting inclusive and sustainable peace in Mindanao, exemplifies effective community engagement. They facilitate various platforms where local citizens can participate actively, share their insights, and influence the processes that impact their communities.</p>
    */}
   
   
    </div>
                

        </div>

       


        <Footer/>
        
        

    </div>
  )
}

export default Blog