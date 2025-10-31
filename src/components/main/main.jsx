import { BannerSection } from './section/bannerSec/bannerSection';
import { AboutMeSection } from './section/aboutSec/aboutMeSection';
import { Projects } from "./section/ProjectSec/ProjectsSection";
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