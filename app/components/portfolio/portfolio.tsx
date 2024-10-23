import Image from 'next/image';
import hero from '@/app/public/hero4.jpg'
import hero2 from '@/app/public/hero5.jpg'
const PortFolio = () => {
    return (
        <div  className="h-[60rem]">
            <h1 className="text-7xl mt-32 text-center font-serif py-4 mb-4">PortFolio Projects</h1>
            <h1 className="text-6xl font-serif mt-8 text-orange-500 ml-28 text-">Project:1</h1>
            <h1 className=" text-4xl ml-28 mt-8 font-semibold">E-commerce Mobile App Design</h1>
            <p className=" ml-28 ">is simply dummy text of the printing and typesetting industry. Lorem  <br />has been the industry's standard dummy text ever since the 1500s, when <br /> specimen book. It has survived not only five centuries,is simply dummy <br /> text of the printing and typesetting industry. Lorem  <br />has been the industry's standard dummy text ever since the 1500s, when <br /> specimen book. It has survived not only five centuries,</p>
            <Image className=' ml-[55rem] -mt-72'
        src={hero}
        alt="image" 
        width={400}
        height={400}
      />
            <h1 className="text-6xl font-serif mt-36 text-orange-500 ml-28 ">Project:2</h1>
            <h1 className=" text-4xl ml-28 mt-8 font-semibold">SocialMedia Mobile App Design</h1>
            <p className=" ml-28 ">is simply dummy text of the printing and typesetting industry. Lorem  <br />has been the industry's standard dummy text ever since the 1500s, when <br /> specimen book. It has survived not only five centuries,is simply dummy <br /> text of the printing and typesetting industry. Lorem  <br />has been the industry's standard dummy text ever since the 1500s, when <br /> specimen book. It has survived not only five centuries,</p>
            <Image className=' ml-[55rem] -mt-72'
        src={hero2}
        alt="image" 
        width={400}
        height={400}
      />
        </div>
    )
}
export default PortFolio;