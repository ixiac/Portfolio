export type ProjectType = {
  imgSrc: string;
  title: string;
  tags: string[];
  descTitle: string;
  desc: string;
  projectLink: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};