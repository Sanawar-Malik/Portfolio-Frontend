import { fetchEducations } from "../services/Alldata";
import { useQuery } from '@tanstack/react-query';
import schoolIcon from "../assets/school.svg";

export const Education = ({ defaultColor }) => {
  const { isLoading, error, data: educations } = useQuery({ queryKey: ['educations'], queryFn: fetchEducations });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="my-32 container mx-auto" id="education">
      <h1 className="text-5xl uppercase text-center mb-8 underline underline-offset-8 decoration-blue-500 font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        Education
      </h1>

      <div className="w-5/6 mx-auto justify-center">
        {educations.map((element, index) => {
          const colors = [
            "bg-red-500",
            "bg-blue-500",
            "bg-yellow-500",
            "bg-purple-500",
            "bg-orange-500",
          ];

          const color = defaultColor || colors[index % colors.length];

          return (
            <div key={element.id} className="flex my-8 relative">
              {/* Vertical line for larger screens */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-4/5 text-white mb-2">{element.start_date}</div>
                <div className={`${color} w-px h-full opacity-30`}></div>
                <img
                  src={schoolIcon}
                  alt="icon"
                  className={`${color} w-10 p-1 rounded-lg z-20`}
                />
              </div>

              <div className="bg-gradient-to-b from-green-500 via-blue-500 to-purple-600 p-0.5 flex flex-col w-full">
                <div className="bg-[#160246] px-4 py-6 w-full text-center z-10 relative">
                  <div className="text-lg md:text-xl lg:text-2xl uppercase text-white font-bold">{element.degree}</div>
                  <div className="flex items-center mt-2">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></div>
                    <div className="text-gray-400 text-left">
                      <span className="font-bold mr-4">Institute:</span>
                      {element.institute}
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
                  {/* Icon for smaller screens */}
                  <img
                    src={schoolIcon}
                    alt="icon"
                    className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

