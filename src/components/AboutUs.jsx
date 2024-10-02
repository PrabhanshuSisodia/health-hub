import { FaUser } from 'react-icons/fa6';
import BgPolygon from '../assets/polygon.png';
import Vector from '../assets/vector-wave.png'

const BgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
};

const AboutUs = () => {
  return (
    <>
          <div style={BgStyle} className='py-14'>
              <div className="container min-h-[500px] relative z-10">
                  <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
                      About Us
                  </h1>

                  {/* card section  */}
                  <div className='bg-white/80 p-10 my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias totam hic voluptate illum adipisci! Vero dolorem quo, dignissimos non ad voluptatum accusamus minima ducimus nihil repudiandae accusantium molestiae beatae quis.
                      Ut saepe consequuntur at voluptatum nam deserunt, neque, quis distinctio culpa iste, blanditiis ratione corporis pariatur minima facilis praesentium ab expedita doloribus vero quam. Unde labore odit itaque aliquid saepe!
                      <div className='pt-10 flex justify-center'>
                          <button className='flex justify-center items-center gap-2 bg-primary 
                                                text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300' >
                                  <FaUser />
                                  My Account
                              </button>
                      </div>
                  </div>
              </div>

              {/* Wave vector section  */} 
              <div>
                  <img src={Vector} alt="" className='absolute top-0 right-0 w-full'/>
              </div>
      </div>
    </>
  )
}

export default AboutUs
