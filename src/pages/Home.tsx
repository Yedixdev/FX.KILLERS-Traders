import Welcome from "../components/Home-Welcome"
import AboutMe from "../components/Home-AboutMe"
import GlobalBrands from "@/components/Home-GlobalBrands"

const Home = () => {
   return(
      <>
         <div className="pt-20">
            <div className="w-full">
               <Welcome/>
               <GlobalBrands/>
               <AboutMe/>
            </div>
         </div>
      </>
   )
}

export default Home