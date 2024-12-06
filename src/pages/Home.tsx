import Welcome from "../components/Home-Welcome"
import AboutMe from "../components/Home-AboutMe"

const Home = () => {
   return(
      <>
         <div className="pt-20">
            <div className="w-full">
               <Welcome/>
               <AboutMe/>
            </div>
         </div>
      </>
   )
}

export default Home