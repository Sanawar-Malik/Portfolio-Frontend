import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { usePostProjectMutation } from '../../services/ProjectsApi';

export const ProjectAdd = ({ setShowModal }) => {
  const [addProject, { isLoading }] = usePostProjectMutation()
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [image, setimage] = useState(null)
  const handleDescriptionChange = (newDescription) => {
    setdescription(newDescription);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
 
    const res = await addProject(formData);

    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      navigate("");
      setShowModal(false);
    }
  }

  return (
    <div className=''>
      {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
      <div className="flex  overflow-x-hidden mt-12  overflow-y-auto fixed  inset-0 z-50 bg-gray-900 bg-opacity-50 outline-none focus:outline-none">

        <div className="relative w-4/5 sm mx-auto bg-white my-10">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-2 border-b bg-light-gray border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Add Project</h3>
              <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="relative p-6  flex-auto h-[500px] overflow-auto">
              <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                  <label for="new-password" className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input type="text" name="name" id='name' onChange={e => setname(e.target.value)} required
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
                  <button type='submit' className="bg-gradient-to-r from-fuchsia-600 to-purple-600 w-max mx-auto text-white font-semibold px-10 py-2 rounded-2xl hover:shadow-sm transition-all duration-500">Add Project</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >

    </div>
  )
}
