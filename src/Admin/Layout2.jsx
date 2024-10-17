import Admin from "./Admin"
import { EducInfo } from "./Education/EducInfo"
import { ExperInfo } from "./Experience/ExperInfo"
import { ProjectInfo } from "./Project"
import { ServiceInfo } from "./Service/ServiceInfo"

export const Layout2 = () => {
  return (
    <div className="bg-gray-200 mb-8">
      <Admin />
      <ProjectInfo />
      <ServiceInfo />
      <EducInfo />
      <ExperInfo />
    </div>
  )
}
