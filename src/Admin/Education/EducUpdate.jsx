import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUpdateEducationMutation } from '../../services/EducationApi';
import axios from 'axios';
import { BASE_URL } from '../../config';

export const EducUpdate = ({ setUpdateModal, id }) => {
  const [updateEducation, { isLoading }] = useUpdateEducationMutation()
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [degree, setdegree] = useState('')
  const [institute, setinstitute] = useState('')
  const [start_date, setstart_date] = useState('')
  const [end_date, setend_date] = useState('')
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}educations/${id}/`);
          setdegree(response.data.degree);
          setinstitute(response.data.institute)
          setstart_date(response.data.start_date)
          setend_date(response.data.end_date)

        } catch (error) {
          console.error('Error fetching project data:', error);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append("degree", degree);
    formData.append("institute", institute);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    try {
      const res = await updateEducation({ id, formData });

      if (res.error) {
        console.log(typeof res.error.data.errors);
        console.log(res.error.data.errors);
        setServerError(res.error.data.errors);
      }

      if (res.data) {
        console.log(typeof res.data);
        console.log(res.data);
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
      <div className="flex  overflow-x-hidden mt-12  overflow-y-auto fixed  inset-0 z-50 bg-gray-900 bg-opacity-50 outline-none focus:outline-none">

        <div className="relative w-4/5 sm mx-auto bg-white my-10">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-2 border-b bg-light-gray border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Update Education</h3>
              <button className="bg-transparent border-0 text-black float-right" onClick={() => setUpdateModal(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="relative p-6  flex-auto h-[500px] overflow-auto">
              <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                  <label for="new-password" className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input type="text" name="degree" id='degree' value={degree} onChange={e => setdegree(e.target.value)} required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                  {server_error.degree ? <p className='text-sm text-red-400'>{server_error.degree[0]}</p> : ""}

                </div>
                <div className='mb-2'>
                  <label for="new-password" className="block text-sm font-medium text-gray-700">Institute</label>
                  <div className="mt-1">
                    <input type="text" name="institute" id='institute' value={institute} onChange={e => setinstitute(e.target.value)} required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                  {server_error.institute ? <p className='text-sm text-red-400'>{server_error.institute[0]}</p> : ""}
                </div>
                <div className='mb-2'>
                  <label for="new-password" className="block text-sm font-medium text-gray-700">Start_Date</label>
                  <div className="mt-1">
                    <input type="text" name="start_date" id='start_date' value={start_date} onChange={e => setstart_date(e.target.value)} required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                  {server_error.start_date ? <p className='text-sm text-red-400'>{server_error.start_date[0]}</p> : ""}
                </div>
                <div className='mb-2'>
                  <label for="new-password" className="block text-sm font-medium text-gray-700">End_Date</label>
                  <div className="mt-1">
                    <input type="text" name="end_date" id='end_date' value={end_date} onChange={e => setend_date(e.target.value)} required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                  {server_error.end_date ? <p className='text-sm text-red-400'>{server_error.end_date[0]}</p> : ""}
                </div>
                <div className="relative flex  flex-col mt-4  justify-center">
                  <button type='submit' className="bg-gradient-to-r from-fuchsia-600 to-purple-600 w-max mx-auto text-white font-semibold px-10 py-2 rounded-2xl hover:shadow-sm transition-all duration-500">Update Education</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >

    </div>
  )
}



