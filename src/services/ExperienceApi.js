import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenStorge";
import { BASE_URL } from '../config';

export const experienceApi = createApi({

  reducerPath: 'ExperienceApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // Corrected "basequery" to "baseQuery"
  endpoints: (builder) => ({
    allExperiences: builder.query({
      query: () => 'experiences/',


    }),
    postExperience: builder.mutation({
      query: (exp) => {
        const { access_token } = getToken()
        return {
          url: 'experience/',
          method: 'POST',
          body: exp,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    deleteExperience: builder.mutation({
      query: (id) => {
        const { access_token } = getToken()
        return {
          url: `experience/${id}/`,
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }


      }
    }),
    updateExperience: builder.mutation({
      query: ({ id, formData }) => {
        console.log(id)
        const { access_token } = getToken()
        return {
          url: `experience/${id}/`,
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

export const { useAllExperiencesQuery, usePostExperienceMutation, useDeleteExperienceMutation, useUpdateExperienceMutation } = experienceApi

