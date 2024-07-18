import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async () => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
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
      }
    }
  `;

  return fetchHygraphQuery(query);
};

export default async function Home() {
  const response = await getPageData();

  console.log(response);

  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
