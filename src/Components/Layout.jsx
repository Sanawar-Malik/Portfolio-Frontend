
import { About } from "./About"
import { Education } from "./Education"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Projects } from "./Projects"
import { Service } from "./Service"
import { Experience } from "./Experience"
import { Footer } from "./Footer"

export const Layout = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Service />
      <Experience defaultColor="bg-green-500" />
      <Education defaultColor="bg-green-500" />
      <Footer />
    </div>

  )
}
