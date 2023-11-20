import * as prod from "react/jsx-runtime";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { unified } from "unified";

import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

/**
 * @param {string} text
 * @returns {JSX.Element}
 */

export async function markdownToReact(readme: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, production)
    .processSync(readme).result;
  return result;
}
