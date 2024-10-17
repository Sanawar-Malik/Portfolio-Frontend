import { fetchServices } from "../services/Alldata";
import { useQuery } from '@tanstack/react-query';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Service = () => {
  const { isLoading, error, data: services } = useQuery({ queryKey: ['servicess'], queryFn: fetchServices });
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }
  // useEffect(() => {
  //   Aos.init({
  //     easing: 'ease-out-quart',
  //     delay: 0,
  //     duration: 750
  //   })
  // }, [])

  return (
    <div>
      <section className="flex items-center justify-center flex-col my-32 container mx-auto" id="service">

        <h1 className="text-5xl uppercase underline underline-offset-8 decoration-blue-500 font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">Services</h1>
        <div data-aos="fade-right" className="flex flex-row flex-wrap justify-center gap-5 mt-10">
          {services.map((item, index) => (
            <div key={index} className="relative w-40 h-40  bg-gradient-to-b from-green-500 via-blue-500 to-purple-600 p-0.5 shadow-lg">
              <div className="bg-[#160246] w-full h-full flex flex-col justify-evenly items-center">
                <img className="w-10 h-10 object-fill object-center transition duration-50" loading="lazy" src={`http://localhost:8000${item.image}`} alt={item.name} />
                <h3 className="text-white sm:text-[14px] text-[12px] font-bold text-center">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};









