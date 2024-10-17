import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenStorge";
import { BASE_URL } from '../config';

export const projectsApi = createApi({

  reducerPath: 'ProjectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // Corrected "basequery" to "baseQuery"
  endpoints: (builder) => ({
    allProject: builder.query({
      query: () => 'projects/',
    }),
    postProject: builder.mutation({
      query: (project) => {
        const { access_token } = getToken()
        return {
          url: 'project/',
          method: 'POST',
          body: project,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        const { access_token } = getToken()
        return {
          url: `project/${id}/`,
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }


      }
    }),
    updateProject: builder.mutation({
      query: ({ id, formData }) => {
        console.log(id)
        const { access_token } = getToken()
        return {
          url: `project/${id}/`,
          method: "PUT",
          body: formData,
          headers: {
            'authorization': `Bearer ${access_token}`,

          }
        }
      }
    })

  })
});

export const { useAllProjectQuery, usePostProjectMutation, useDeleteProjectMutation, useUpdateProjectMutation } = projectsApi

