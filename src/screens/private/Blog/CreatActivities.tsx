
import Footer from '@/components/footer/Footer'
// import Tiptap from './Tiptap'
import { Link} from 'react-router-dom'
import { LocateIcon } from 'lucide-react'
// import axios from '../../../plugin/axios'
import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'
import TiptapEdit from './TiptapEdit'
import { Button } from '@/components/ui/button'




const CreatActivity = () => {
 const [_loading,_setLoading] = useState(false)

 const [data,setData] = useState<any>(JSON.parse(localStorage.getItem('saveEdit')||""))


  // function formatDate(dateString:any) {
  //   const date = new Date(dateString);
  //   const options:any = { year: 'numeric', month: 'long', day: '2-digit' };
  
  //   return new Intl.DateTimeFormat('en-US', options).format(date);
  // }

  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setData({ ...data, photo: file }); // Correctly store the file

    // Generate a preview URL for the selected image file
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    }
  };

 
  useEffect(()=>{
    
    console.log(data)
    localStorage.setItem('saveEdit',JSON.stringify(data))

  
  },[data])

  return (
    <div className=" min-h-0 w-full max-w-full  flex flex-col justify-center">
   
      <div className=' relative w-full flex  justify-center items-center h-[60vh] bg-black overflow-hidden'>
      
      
      <div className=" cursor-pointer z-20 absolute grid w-full max-w-xs items-center gap-1.5">
     
      <input id="picture" className=" cursor-pointer flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
      required
      placeholder="Photo"
      type="file"
      onChange={handleFileChange}
      />
</div>
          
        
        {preview && (
              <img src={preview} className=' relative w-full mt-5 text-xl mb-5 object-cover h-[60vh]' alt="" />
         
          )}
      </div>



        <div className=" mt-5 px-[10vw] md:px-5">
        <Link to="/balaod/kudlit" className=" w-[90px] font-fmedium flex items-center justify-between px-2 py-2 bg-background text-black font-bold border border-gray-300 hover:bg-[#e4e4e4]">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Kudlit
    </Link> 
    <div className=" flex justify-between border border-x-0 py-5 text-base font-fmedium mt-4 ">
      <div className=' flex items-center gap-4'>
      
        <input value={data.date} onChange={(e:any)=>{
          setData({...data,date:e.target.value})
        }} 
        className=' text-right border border-border' type='date' />
        <Switch 
          checked={data.showDate}
          onCheckedChange={(checked) => {
            setData({ ...data, showDate: checked });
          }}
        />
        
        
      </div>
        
        <div className=' flex items-center gap-4'>
           <input 
           value={data.location} onChange={(e:any)=>{
            setData({...data,location:e.target.value})
          }} 
          placeholder=' Cagayan de Oro, 9000'
           type="text" className=' w-[400px] text-right border border-border' />
           <LocateIcon className=' h-4 w-4'/>

           <Switch 
          checked={data.showLocation}
          onCheckedChange={(checked )=>{
            setData({...data,showLocation:checked })
          }}
          
        />
           
          
        </div>
        
    </div>

    <div className=" flex flex-col  mt-5 font-fmedium text-lg gap-5 mb-36">

    
  

    

    <div>
      <input type="text" value={data.title} onChange={(e:any)=>{
        setData({...data,title:e.target.value})
      }} required className=" w-full outline-none text-primary text-3xl font-fbold" placeholder='Title e.g Community Engagement: Local Citizens Participate in Process ' />
    </div>

 
    <TiptapEdit data={data.content} setData={setData} />
    <Button className=' font-fbold' >Publish Blog</Button>
   
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

export default CreatActivity