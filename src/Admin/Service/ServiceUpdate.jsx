import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { useUpdateServiceMutation } from "../../services/ServiceApi";
import { BASE_URL } from '../../config';

export const ServiceUpdate = ({ setUpdateModal, id }) => {
  const [UpdateService, { isLoading }] = useUpdateServiceMutation();
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [image, setimage] = useState(null);

  const handleDescriptionChange = (newDescription) => {
    setdescription(newDescription);
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}services/${id}/`);
          setname(response.data.name);
          setdescription(response.data.description);
          setimage(response.data.image)
        } catch (error) {
          console.error('Error fetching project data:', error);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const res = await UpdateService({ id, formData });

      if (res.error) {
        setServerError(res.error.data.errors);
      }

      if (res.data) {
        navigate("");
        setUpdateModal(false);
      }
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };
  return (
    <div className=''>
      {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}

      <div className="flex  overflow-x-hidden mt-12  overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-50 outline-none focus:outline-none">

        <div className="relative w-4/5 sm mx-auto bg-white my-10">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-2 border-b bg-light-gray border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Update Project</h3>
              <button className="bg-transparent border-0 text-black float-right" onClick={() => setUpdateModal(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="relative p-6  flex-auto h-[500px] overflow-auto">
              <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                  <label for="new-password" className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input type="text" name="name" id='name' value={name} onChange={e => setname(e.target.value)} required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                  {server_error.name ? <p className='text-sm text-red-400'>{server_error.name[0]}</p> : ""}
                </div>
                <div className='mb-2'>
                  <label for="new-password" className="block text-sm font-medium text-gray-700">Image</label>
                  <div className="mt-1">
                    <input type="file" name="image" id='image' onChange={e => setimage(e.target.files[0])} required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                  {server_error.image ? <p className='text-sm text-red-400'>{server_error.image[0]}</p> : ""}
                </div>
                <div >
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <div className="mt-1 row-col-">
                    <MDEditor type="text" value={description}
                      onChange={handleDescriptionChange} required
                      className="px-2 py-3 h-[500px] block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                  {server_error.description ? <p className='text-sm text-red-400'>{server_error.description[0]}</p> : ""}
                </div>
                <div className="relative flex  flex-col mt-4  justify-center">
                  <button type='submit' className="bg-gradient-to-r from-fuchsia-600 to-purple-600 w-max mx-auto text-white font-semibold px-10 py-2 rounded-2xl hover:shadow-sm transition-all duration-500">Update Project</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >

    </div>

  )
}
