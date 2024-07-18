import { KnownTech } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  introTechnologies: KnownTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: KnownTech[];
};

// export type Technologie = {
//   name: string;
// };

// export type Technologies = {
//   technologies: Technologie[];
// };

export type HomePageData = {
  page: HomePageInfo;
  // tech: Technologies;
};
