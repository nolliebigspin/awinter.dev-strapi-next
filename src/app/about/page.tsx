import Header from "@/components/Header";
import { MarkdownDisplay } from "@/components/Markdown";
import { ABOUT_PAGE_ID } from "@/constants";
import { genericFetch } from "@/lib/genericFetch";
import { PageData } from "@/lib/pageTypes";

const About = async () => {
  const data = await genericFetch<PageData>(ABOUT_PAGE_ID);
  return (
    <>
      <Header title={data.fields.page_title} />
      <MarkdownDisplay arr={data.fields.page_content} />
    </>
  );
};

export default About;
