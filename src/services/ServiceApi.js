import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenStorge";
import { BASE_URL } from '../config';

export const serviceApi = createApi({

  reducerPath: 'ProjectApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // Corrected "basequery" to "baseQuery"
  endpoints: (builder) => ({
    allServices: builder.query({
      query: () => 'services/',


    }),
    postService: builder.mutation({
      query: (project) => {
        const { access_token } = getToken()
        return {
          url: 'service/',
          method: 'POST',
          body: project,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    deleteService: builder.mutation({
      query: (id) => {
        const { access_token } = getToken()
        return {
          url: `service/${id}/`,
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }


      }
    }),
    updateService: builder.mutation({
      query: ({ id, formData }) => {
        console.log(id)
        const { access_token } = getToken()
        return {
          url: `service/${id}/`,
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

export const { useAllServicesQuery, usePostServiceMutation, useDeleteServiceMutation, useUpdateServiceMutation } = serviceApi

