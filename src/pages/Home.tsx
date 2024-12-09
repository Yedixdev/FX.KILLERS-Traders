import Welcome from "../components/Home-Welcome"
import AboutMe from "../components/Home-AboutMe"
import GlobalBrands from "@/components/Home-GlobalBrands"
import Testimonials from "@/components/Home-Testimonial"
import HomeFeatures from "@/components/Home-Features"

const Home = () => {
   return(
      <div className="min-w-full bg-gray-200 flex flex-col justify-center pt-24 items-center min-h-screen">
         <Welcome/>
         <GlobalBrands/>
         <Testimonials/>
         <HomeFeatures/>
         <AboutMe/>
      </div>
   )
}

export default Home