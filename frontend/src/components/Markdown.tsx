import { PageContent } from "@/lib/pageTypes";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export type MarkdownProps = {
  children: string;
  className?: string;
};

const Markdown = ({ children, className }: MarkdownProps): JSX.Element => {
  return (
    <ReactMarkdown
      className={className}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold">{children}</h1>
        ),
        h2: ({ children }) => <h2 className="text-4xl">{children}</h2>,
        h3: ({ children }) => (
          <h3 className="text-2xl font-bold">{children}</h3>
        ),
        h4: ({ children }) => <h4 className="text-2xl">{children}</h4>,
        h5: ({ children }) => <h5 className="text-xl font-bold">{children}</h5>,
        h6: ({ children }) => <h6 className="text-xl">{children}</h6>,
        p: ({ children }) => <p className={`font-regular mb-6`}>{children}</p>,
        br: () => <br />,
        a: ({ children, href, target }) => (
          <Link
            href={href ?? "/"}
            className="font-bold italic hover:underline"
            target={target}
          >
            {children}
          </Link>
        ),
        strong: ({ children }) => (
          <strong className={`font-bold`}>{children}</strong>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export const MarkdownDisplay = ({
  arr,
  className,
}: {
  arr: PageContent;
  className?: string;
}) => {
  const content = arr.content.map((item) => item.content[0].value).join("\n\n");

  return <Markdown className={className}>{content}</Markdown>;
};

export default Markdown;
