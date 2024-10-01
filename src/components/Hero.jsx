import HeroImg from '../assets/Hero.png'
import heroBg from '../assets/heroBg.png'
import PrimaryButton from './PrimaryButton'

const BgStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
};

const Hero = () => {
  return (
    <>
        <div style={BgStyle} className="relative z-[-1] ">
              <div className="container py-16 sm:py-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                      {/* text-content section */}
                      <div className='space-y-7 text-dark order-2 sm:order-1'>
                          <h1 className='text-5xl'>Fresh & Healthy Meals {" "} <span className='text-secondary font-cursive text-7xl'>Delivered </span>{" "} to Your <br /> Doorstep</h1>
                          <p className='lg:pr-64 '>Savor the taste of wellness with meals starting at Rs150, delivered to you!</p>

                          {/* button section  */}
                          <div>
                              <PrimaryButton />
                          </div>
                      </div>
                      {/* Image section */}
                      <div className='relative z-30 order-1 sm:order-2'>
                          <img src={HeroImg} alt="" className='w-full sm:scale-125 sm:translate-x-16'/>
                      </div>
                  </div>
              </div>
        </div>
    </>
  )
}

export default Hero
