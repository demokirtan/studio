export type Experience = {
    id: string;
    title: string;
    company: string;
    companyLink?: string;
    period: string;
    imageId: string;
    description?: string;
  };
  
  export const experiences: Experience[] = [
    {
      id: "1",
      title: "SEO Intern",
      company: "CoreNet Tech",
      companyLink: "https://corenettechltd.com/",
      period: "08/2025–Present",
      imageId: "experience-1",
      description: "Assisted in optimizing websites for search engines, focusing on both onpage and off-page SEO strategies. Conducted keyword research and analysis to improve website visibility and search rankings. Utilized tools like Google Search Console and Yoast SEO to monitor performance and implement improvements."
    }
  ];
    