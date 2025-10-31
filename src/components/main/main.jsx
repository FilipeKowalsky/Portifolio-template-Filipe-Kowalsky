import { BannerSection } from './section/bannerSec/bannerSection';
import { AboutMeSection } from './section/aboutSec/aboutMeSection';
import { Projects } from "./section/projectSec/project";
import { TechSection } from "./section/techSec/techSection";

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