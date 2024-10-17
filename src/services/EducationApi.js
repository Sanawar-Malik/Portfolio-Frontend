import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenStorge";
import { BASE_URL } from '../config';

export const educationApi = createApi({

  reducerPath: 'EducationApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // Corrected "basequery" to "baseQuery"
  endpoints: (builder) => ({
    allEducation: builder.query({
      query: () => 'educations/',


    }),
    postEducation: builder.mutation({
      query: (edu) => {
        const { access_token } = getToken()
        return {
          url: 'education/',
          method: 'POST',
          body: edu,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    deleteEducation: builder.mutation({
      query: (id) => {
        const { access_token } = getToken()
        return {
          url: `education/${id}/`,
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }


      }
    }),
    updateEducation: builder.mutation({
      query: ({ id, formData }) => {
        console.log(id)
        const { access_token } = getToken()
        return {
          url: `education/${id}/`,
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

export const { useAllEducationQuery, usePostEducationMutation, useDeleteEducationMutation, useUpdateEducationMutation } = educationApi

