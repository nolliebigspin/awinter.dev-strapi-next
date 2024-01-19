"use client";

import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

export type BlocksProps = {
  content: BlocksContent;
  className?: string;
};

const Blocks = ({ content, className }: BlocksProps) => {
  return (
    content && (
      <div className={`max-w-prose ${className}`}>
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) =>
              // @ts-expect-error: lack of lib ts
              children[0].props.text !== "" ? (
                <p className="text-base">{children}</p>
              ) : (
                <br />
              ),
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return (
                    <h1 className="mb-4 text-4xl font-bold">{children}</h1>
                  );
                case 2:
                  return <h2 className="mb-4 text-4xl">{children}</h2>;
                case 3:
                  return (
                    <h3 className="mb-2 text-2xl font-bold">{children}</h3>
                  );
                case 4:
                  return <h4 className="mb-2 text-2xl">{children}</h4>;
                case 5:
                  return <h5 className="mb-2 text-xl font-bold">{children}</h5>;
                case 6:
                  return <h6 className="text-xl">{children}</h6>;
                default:
                  return <h3 className="text-4xl font-bold">{children}</h3>;
              }
            },
            link: ({ children, url }) => (
              <Link href={url} className="italic hover:underline">
                {children}
              </Link>
            ),
            "list-item": ({ children }) => <li>• {children}</li>,
          }}
          modifiers={{
            bold: ({ children }) => (
              <strong className="font-extrabold">{children}</strong>
            ),
            italic: ({ children }) => (
              <span className="italic">{children}</span>
            ),
          }}
        />
      </div>
    )
  );
};

export default Blocks;
