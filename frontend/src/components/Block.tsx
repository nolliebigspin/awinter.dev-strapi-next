"use client";

import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

export type BlockProps = {
  content: BlocksContent;
  className?: string;
};

const Block = ({ content, className }: BlockProps) => {
  return (
    <div className={className}>
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => (
            <p className="text-neutral900 max-w-prose">{children}</p>
          ),
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1 className="text-3xl font-bold">{children}</h1>;
              case 2:
                return <h2>{children}</h2>;
              case 3:
                return <h3>{children}</h3>;
              case 4:
                return <h4>{children}</h4>;
              case 5:
                return <h5>{children}</h5>;
              case 6:
                return <h6>{children}</h6>;
              default:
                return <h3>{children}</h3>;
            }
          },
          link: ({ children, url }) => <Link href={url}>{children}</Link>,
        }}
        modifiers={{
          bold: ({ children }) => <strong>{children}</strong>,
          italic: ({ children }) => <span className="italic">{children}</span>,
        }}
      />
    </div>
  );
};

export default Block;
