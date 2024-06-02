import Reveal2 from '@/components/animation/reveal2'
import TextSlide from '@/components/animation/textSlide'
import EmblaCarousel from './Partner'

import partner1 from './../../assets/images/partners/alg-web-logo-copy.png'
import partner2 from './../../assets/images/partners/logo_0.png'
import partner3 from './../../assets/images/partners/gjn-logo-stacked-left-aligned-CO.png'
import partner4 from './../../assets/images/partners/R.png'
import partner5 from './../../assets/images/partners/DSWD-Logo.png'

const Partners = () => {
  return (
    <div id="Partners-and-Networks" className=" rounded-sm pt-40  sm:px-0 flex flex-col  w-full py-10  gap-10 sm:gap-5   min-h-0 items-center justify-center  ">
      <TextSlide>
      <h1 className=" text-4xl font-fbold text-primary text-center "><span>Partners and Networks
</span></h1>
      </TextSlide>
      
<div className=" w-full flex justify-center">


<Reveal2>
  <div className=" w-full min-h-0 flex justify-center mt-20 sm:mt-10">

  <EmblaCarousel slides={[partner1,partner2,partner3,partner4,partner5]} options={{ loop: true }} />

</div>
</Reveal2>
</div>
      </div>
  )
}

export default Partners