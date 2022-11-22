import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Blog from "../blog";
import Link from "next/link";

// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <main className="font-semibold mt-20 mb-20">
      {/* <img src={bannerImage} /> */}
      <h1 className="text-4xl font-bold dark:text-gray-200">{title}</h1>
      <div className="text-xs mt-5 ">
        <h2 className="text-xs  dark:text-gray-200">
          {date} || {tags}
        </h2>
      </div>
      <div
        className="prose dark:text-gray-300 mt-10 prose dark: prose-code:text-blue-500  prose-a:text-gray-500 prose-h2:text-gray-500  prose-h3:text-gray-500 prose-p: font-normal"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
