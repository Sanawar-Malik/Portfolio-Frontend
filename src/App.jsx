import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout'

import { Project } from './Components/Project'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import Admin from './Admin/Admin'
import { Login } from './Components/Login';
import { ProjectInfo } from './Admin/Project';
import { ExperInfo } from './Admin/Experience/ExperInfo';
import { ServiceInfo } from './Admin/Service/ServiceInfo';
import { EducInfo } from './Admin/Education/EducInfo';
import { Layout2 } from './Admin/Layout2';
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/projects/:projectId" element={<Project />} />
        <Route exact path="/admin" element={access_token ? <Layout2 /> : <Navigate to="/login" />} >
          <Route path="ProjectInfo" element={<ProjectInfo />} />
          <Route path="experience" element={<ExperInfo />} />
          <Route path="service" element={<ServiceInfo />} />
          <Route path="education" element={<EducInfo />} />

        </Route>

        <Route exact path="/login" element={!access_token ? <Login /> : <Navigate to="/admin" />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
