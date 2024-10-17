import { fetchExperiences } from "../services/Alldata";
import { useQuery } from '@tanstack/react-query';
import Slider from 'react-slick';

export const Experience = () => {
  const { isLoading, error, data: experiences } = useQuery({ queryKey: ['experiences'], queryFn: fetchExperiences });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'theClass',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="my-32 container mx-auto" id="experience">
      <h1 className="text-5xl uppercase text-center mb-8 underline underline-offset-8 decoration-blue-500 font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        Experience
      </h1>

      <section>
        <div
          id="slider-container"
          className=" mt-12"
        >
          <Slider {...settings}>
            {experiences.map((element, index) => {
              return (
                <article
                  key={element.id}
                  style={{ display: 'grid !important' }}
                  className="bg-gradient-to-b w-full from-green-500 via-blue-500 to-purple-600 p-0.5"
                >
                  <div className="bg-[#160246] p-4">

                    <h2 className="text-2xl font-bold text-white">{element.company}</h2>
                    <div className="flex items-center mt-2">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></div>
                      <div className="text-gray-400 text-left">
                        <span className="font-bold mr-4">Location:</span>
                        {element.location}
                      </div>
                    </div>


                    <div className="flex items-center mt-2">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></div>
                      <div className="text-gray-400 text-left">
                        <span className="font-bold mr-4">Start Date:</span>
                        {element.start_date}
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></div>
                      <div className="text-gray-400 text-left">
                        <span className="font-bold mr-4">End Date:</span>
                        {element.end_date}
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></div>
                      <div className="text-gray-400 text-left">
                        <span className="font-bold mr-4">Description:</span>
                        {element.description}
                      </div>
                    </div>
                  </div>

                </article>

              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};


