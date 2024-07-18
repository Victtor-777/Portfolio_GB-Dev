import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query MyQuery {
      technologies {
            name
          }
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        introTechnologies {
          name
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24 hours
  );
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
