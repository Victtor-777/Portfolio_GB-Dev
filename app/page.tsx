import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
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
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      companyName
      companyUrl
      description {
        raw
      }
      endDate
      startDate
      technologies {
        name
      }
    }
  }
  `;

  console.log(query);

  return fetchHygraphQuery(
    query
    // 60 * 60 * 24 // 24 hours
  );
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();

  console.log(pageData);

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
