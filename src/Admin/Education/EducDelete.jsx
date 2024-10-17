import CloseIcon from '@mui/icons-material/Close';
import { useAllEducationQuery, useDeleteEducationMutation } from '../../services/EducationApi';
export const EducDelete = ({ setDeleteModal, id }) => {

  const [deleteEducation] = useDeleteEducationMutation()
  console.log("id delete", id)
  const { data: educations } = useAllEducationQuery()
  console.log("projects", educations)

  const single = educations ? educations.find((ele) => ele.id === id) : null;
  return (
    <div className="flex  overflow-x-hidden overflow-y-auto fixed mt-12  inset-0 z-50 bg-gray-900 bg-opacity-50 outline-none focus:outline-none">

      <div className="relative  sm mx-auto bg-white my-10">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-2 border-b bg-light-gray border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Delete Education</h3>
            <button className="bg-transparent border-0 text-black float-right" onClick={() => setDeleteModal(false)}>
              <CloseIcon />
            </button>
          </div>

          <div className="relative flex-auto h-[500px] ">
            <div class="max-w-lg mx-auto bg-white w-96  p-5">
              <h2 class="text-center text-2xl font-semibold mt-3">{single.degree}</h2>
              <div class="mt-5">
                <h2 class="text-xl font-bold">Are You Sure You Want To Delete {single.degree}?</h2>
              </div>
              <div className="flex items-end justify-end mt-12">
                <button
                  className="border-2 w-max mx-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 w-max mx-auto text-white  font-semibold px-10 py-2 rounded-2xl hover:shadow-sm transition-all duration-500"
                  type="button"
                  onClick={() => setDeleteModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-red-600 w-max mx-auto text-white font-semibold px-10 py-2 rounded-2xl hover:shadow-sm transition-all duration-500"
                  type="button"
                  onClick={() => { setDeleteModal(false); { deleteEducation(id) } }}
                >
                  Delete
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>



  )
}
