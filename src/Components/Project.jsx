import CloseIcon from '@mui/icons-material/Close';
import { fetchProject } from "../services/Alldata";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from 'react-markdown';
export const Project = ({ projectId, setShowModal }) => {
  const { isLoading, error, data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProject,
  });

  if (isLoading) return <h1 className="text-center">Loading...</h1>;
  if (error) return <h1 className="text-center">Error: {error.message}</h1>;

  const project = projects?.find((p) => p.id === parseInt(projectId));

  if (!project) return <h1 className="text-center">Project not found</h1>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="prose max-w-full p-6 overflow-y-auto h-full" >
  <div className="relative bg-white rounded-lg overflow-y-auto  p-8 shadow-xl w-full h-full m-0 transition ease-out duration-300 transform opacity-100 scale-100 z-60">
    <button
      className="bg-transparent border-0 text-black float-right"
      onClick={() => setShowModal(false)}
    >
      <CloseIcon />
    </button>
          <h1 className="text-gray-900 text-center font-bold text-3xl mb-2">{project.name}</h1>
      <ReactMarkdown className="text-base leading-8 my-5">
            {project.description}
          </ReactMarkdown>
          </div>
  </div>
</div>

  );
};

