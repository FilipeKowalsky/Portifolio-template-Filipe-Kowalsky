import { BannerSection } from './section/BannerSec/BannerSection';
import { AboutMeSection } from './section/AboutSec/AboutMeSection';
import { Projects } from "./section/ProjectSec/Project";
import { TechSection } from "./section/TechSec/TechSection";

export const Main = () => {
  return(
    <main>
      <BannerSection/>
      <AboutMeSection/>
      <TechSection/>
      <Projects/>
    </main>
  )
}