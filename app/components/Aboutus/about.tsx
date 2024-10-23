import Image from 'next/image';
import hero from '@/app/public/hero3.jpg'
const Aboutus = () => {
    return (
        <div>
            <h1 className="font-serif text-8xl mt-36 ml-16 " >Boost Your <br /> <span className="text-orange-500"> Website </span> Seo </h1>
            <p className="ml-20 font-mono	">is simply dummy text of the printing and typesetting industry. Lorem  <br />has been the industry's standard dummy text ever since the 1500s, when <br /> specimen book. It has survived not only five centuries,</p>
            <Image className=' ml-[55rem] -mt-96'
        src={hero}
        alt="image" 
        width={400}
        height={400}
      />
            </div>
    )
}
export default Aboutus;