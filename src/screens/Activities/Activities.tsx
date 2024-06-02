import Reveal from '@/components/animation/reveal'
import Reveal2 from '@/components/animation/reveal2'
import TextSlide from '@/components/animation/textSlide'
import ActivitiesCard from '@/components/card/card'
import { useNavigate } from 'react-router-dom'
import Sample from './../../assets/images/samples/9d146eac-ca05-4249-9eaf-37fdee7ec489.jfif'
import Sample2 from './../../assets/images/samples/438161546_463636099496909_3614983135274376987_n.jpg'



const Activities = () => {

  const data =[
    {
    
      "title": " Paglalakad ng mga kinatawan at opisyal ng Legal Rights and Natural Resources Center (LRC)",
      "image": Sample2,
      "author": "Frank Carter",
      "content": `<p>The automotive industry has rebounded strongly, with increased production and sales indicating a positive outlook for the sector. After a period of disruption caused by the pandemic, the industry is experiencing renewed growth, driven by a combination of factors including rising consumer demand, technological advancements, and supportive government policies.</p><p></p><p><strong><em>"One of the main drivers of the automotive industry's recovery is the resurgence in consumer demand. As economic conditions improve and consumer confidence rises, more people are purchasing vehicles. This trend is particularly evident in emerging markets, where rising incomes and urbanization are fueling demand for both passenger and commercial vehicles."</em></strong></p><p></p><p>Technological innovation is also playing a crucial role in the industry's revival. The development and adoption of electric vehicles (EVs) are accelerating, with many automakers expanding their EV offerings. Advances in battery technology, charging infrastructure, and government incentives are making EVs more accessible and attractive to consumers. Additionally, autonomous driving technologies and connected car features are transforming the automotive landscape, enhancing safety and convenience for drivers.</p><p></p><p>Government policies aimed at supporting the automotive industry are further bolstering growth. Many countries have implemented measures such as subsidies, tax incentives, and regulatory support to encourage the production and adoption of greener and smarter vehicles. These initiatives are helping to create a favorable environment for the automotive sector to thrive.</p><p></p><h2><span style="color: rgb(255, 140, 0); font-size: [object Object]px">About</span></h2><p></p><p>However, the industry still faces several challenges. Supply chain disruptions, particularly in the semiconductor market, have caused production delays and shortages. Automakers are working to address these issues by diversifying their supplier base and investing in more resilient supply chain strategies. Additionally, the transition to electric and autonomous vehicles requires significant investment in research and development, as well as the retraining of the workforce to adapt to new technologies.</p><p></p><p>Overall, the automotive industry's strong rebound is a testament to its resilience and adaptability. By embracing innovation and responding to changing market dynamics, the sector is poised for continued growth and transformation. The shift towards more sustainable and connected vehicles will shape the future of mobility, offering new opportunities and challenges for automakers and consumers alike.</p><p></p>`,
      "date": "March 26, 2024"
  },
  {
      "title": "Pharmaceutical Sector Achieves Breakthroughs",
      "image": Sample,
      "author": "Robert Bailey",
      "content": `<p><em>The pharmaceutical sector has achieved significant breakthroughs, driving growth and innovation in the healthcare industry. Recent advancements in drug development and medical research have led to the introduction of new treatments and therapies for a wide range of diseases and conditions.</em></p><p></p><p style="text-align: center"><strong>One of the key drivers of this progress is the substantial investment in research and development (R&amp;D) by pharmaceutical companies. These investments have enabled the discovery of novel drugs and the improvement of existing medications. Cutting-edge technologies such as genomics, biotechnology, and artificial intelligence are being utilized to accelerate the drug discovery process and enhance the efficacy of treatments.</strong></p><p><br></p><h1><span style="color: rgb(255, 140, 0); font-size: [object Object]px">Regulatory approvals for new drugs </span></h1><h3><span style="color: #171719">have also been on the rise, reflecting the sector's robust pipeline of innovative products</span></h3><p></p><p>Regulatory agencies around the world are working closely with pharmaceutical companies to expedite the approval process for promising treatments. This collaborative approach is essential for bringing life-saving medications to market more quickly and addressing unmet medical needs.</p><p><br></p><p>In addition to drug development, the pharmaceutical sector is making strides in personalized medicine. This approach tailors treatments to individual patients based on their genetic makeup, lifestyle, and other factors. Personalized medicine has the potential to improve treatment outcomes, reduce side effects, and optimize healthcare resources.</p><p></p><p>Another area of focus is the expansion of access to healthcare. Pharmaceutical companies are partnering with governments, non-profit organizations, and other stakeholders to improve the availability and affordability of medications. Initiatives such as patient assistance programs, differential pricing, and collaborative research efforts are helping to ensure that more people can benefit from the latest medical advancements.</p><p></p><p>Despite these positive developments, the pharmaceutical sector faces ongoing challenges. The high cost of drug development, complex regulatory requirements, and the need for extensive clinical trials can hinder the pace of innovation. Additionally, issues such as drug pricing, patent disputes, and ethical concerns surrounding new treatments continue to generate debate.</p>`,
      "date": "April 12, 2024"
  },
  {
      "title": "Mining Industry Benefits from High Commodity Prices",
      "image": Sample2,
      "author": "Patricia Gray",
      "content": "<p>The mining industry is benefiting from high commodity prices, leading to increased production and economic gains. Strong global demand for minerals and metals has driven up prices, creating favorable conditions for mining companies. This trend is expected to continue as industrial activities and infrastructure projects around the world require substantial amounts of raw materials.</p><p>One of the primary factors contributing to the surge in commodity prices is the robust recovery of the global economy. As countries emerge from the pandemic, there has been a resurgence in construction, manufacturing, and other industries that rely heavily on mined resources. This has resulted in higher demand for key commodities such as copper, iron ore, and lithium.</p><p>Technological advancements are also playing a significant role in the mining industry's success. Innovations in mining equipment and processes have improved efficiency and productivity, allowing companies to extract and process minerals more effectively. Automation, remote sensing, and data analytics are some of the technologies being leveraged to enhance mining operations and reduce costs.</p><p>Environmental, social, and governance (ESG) considerations are increasingly important for the mining industry. Companies are under pressure to adopt sustainable practices and minimize their environmental impact. This includes efforts to reduce greenhouse gas emissions, manage water resources responsibly, and rehabilitate mining sites. Social and governance aspects, such as community engagement and ethical business practices, are also critical for maintaining a positive reputation and securing social license to operate.</p><p>Supply chain disruptions pose a potential challenge for the mining industry. The pandemic has highlighted vulnerabilities in global supply chains, and mining companies are taking steps to mitigate these risks. Diversifying suppliers, improving inventory management, and investing in logistics infrastructure are some of the strategies being employed to ensure a stable supply of critical materials.</p><p>Looking forward, the outlook for the mining industry remains positive. The transition to a low-carbon economy is expected to drive demand for minerals such as lithium, cobalt, and nickel, which are essential for renewable energy technologies and electric vehicles. Additionally, continued urbanization and infrastructure development will sustain demand for construction materials and metals.</p>",
      "date": "January 19, 2024"
  },
  {
      "title": "Automotive Industry Rebounds Strongly",
      "image": Sample,
      "author": "Kevin Hunter",
      "content": "<p>The automotive industry has rebounded strongly, with increased production and sales indicating a positive outlook for the sector. After a period of disruption caused by the pandemic, the industry is experiencing renewed growth, driven by a combination of factors including rising consumer demand, technological advancements, and supportive government policies.</p><p>One of the main drivers of the automotive industry's recovery is the resurgence in consumer demand. As economic conditions improve and consumer confidence rises, more people are purchasing vehicles. This trend is particularly evident in emerging markets, where rising incomes and urbanization are fueling demand for both passenger and commercial vehicles.</p><p>Technological innovation is also playing a crucial role in the industry's revival. The development and adoption of electric vehicles (EVs) are accelerating, with many automakers expanding their EV offerings. Advances in battery technology, charging infrastructure, and government incentives are making EVs more accessible and attractive to consumers. Additionally, autonomous driving technologies and connected car features are transforming the automotive landscape, enhancing safety and convenience for drivers.</p><p>Government policies aimed at supporting the automotive industry are further bolstering growth. Many countries have implemented measures such as subsidies, tax incentives, and regulatory support to encourage the production and adoption of greener and smarter vehicles. These initiatives are helping to create a favorable environment for the automotive sector to thrive.</p><p>However, the industry still faces several challenges. Supply chain disruptions, particularly in the semiconductor market, have caused production delays and shortages. Automakers are working to address these issues by diversifying their supplier base and investing in more resilient supply chain strategies. Additionally, the transition to electric and autonomous vehicles requires significant investment in research and development, as well as the retraining of the workforce to adapt to new technologies.</p><p>Overall, the automotive industry's strong rebound is a testament to its resilience and adaptability. By embracing innovation and responding to changing market dynamics, the sector is poised for continued growth and transformation. The shift towards more sustainable and connected vehicles will shape the future of mobility, offering new opportunities and challenges for automakers and consumers alike.</p>",
      "date": "February 08, 2024"
  },
  ]
  const navigate = useNavigate()
  return (
    <div className="  mt-36 relative  flex  gap-10 flex-col  items-center min-h-0 w-full ">
    <TextSlide>
      
      <h1 className=" text-4xl font-fbold text-primary "><span>Activities</span></h1>
      
    
      
    </TextSlide>
   <Reveal2>
    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-4  gap-4   w-full sm:px-5 px-[4vw] min-h-0  justify-center items-center  ">
        {data.slice(0,4).map((e:any,key:any)=>(

                <ActivitiesCard key={key} e={e} id={key} />

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