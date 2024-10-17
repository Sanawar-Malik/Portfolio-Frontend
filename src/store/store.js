import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";
import authReducer from "../featuers/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { serviceApi } from "../services/ServiceApi";
import { educationApi } from "../services/EducationApi";
import { experienceApi } from "../services/ExperienceApi";
import { projectsApi } from "../services/ProjectsApi";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [educationApi.reducerPath]: educationApi.reducer,
    [experienceApi.reducerPath]: experienceApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    auth: authReducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, serviceApi.middleware, educationApi.middleware, experienceApi.middleware, projectsApi.middleware),
})
setupListeners(store.dispatch)
