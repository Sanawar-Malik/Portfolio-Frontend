import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "../services/Alldata";
import { useEffect, useState } from "react";
import { Project } from "./Project";
import ReactMarkdown from 'react-markdown';
import { BASE_URL_IMAGE } from '../config';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState(); // Changed to projectId

  const { isLoading, error, data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProject,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const openModal = (id) => {
    setProjectId(id); // Set the projectId when opening the modal
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setProjectId(null); // Reset projectId when closing
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col my-32 container mx-auto" id="projects">
        <h1 className="text-5xl uppercase underline underline-offset-8 decoration-blue-500 font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-8">Projects</h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            projects.map(project => (
              <div key={project.id} className="rounded-lg border-2 border-transparent bg-gradient-to-b from-green-500 via-blue-500 to-purple-600 text-gray-400">
                <div className="bg-[#160246] rounded-lg overflow-hidden">
                  <img className="h-48 w-full object-cover object-end" src={project.image} alt="Project" />
                  <div className="p-6">
                    <h4 className="text-white mt-2 font-semibold text-lg leading-tight truncate">{project.name}</h4>
                    <div className="mt-1">
                      <ReactMarkdown className="text-body mb-4">{project.description.length > 25 
                          ? `${project.description.substring(0, 25)}...` 
                          : project.description}
                      </ReactMarkdown>
                    </div>
                    <div className="mt-2 flex items-center">
                      <button onClick={() => openModal(project.id)} className="underline underline-offset-8">View</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {showModal && <Project projectId={projectId} setShowModal={closeModal} />}
      </div>
    </div>
  );
};

