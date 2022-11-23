import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

// The Blog Page Content
export default function Blog({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, metaDesc, date, tags } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <article className="mt-20 mb-20" key={title}>
            <Link href={`/posts/${slug}`}>
              <h1 className="text-gray-800 text-3xl font-bold dark:text-gray-200">
                {title}
              </h1>
            </Link>
            <h3 className=" text-gray-800 text-xs mt-2  dark:text-gray-300">
              {date} || {tags}
            </h3>
            <h3 className=" text-gray-800 mt-2 text-xl dark:text-gray-300">
              {metaDesc}
            </h3>
          </article>
        );
      })}
    </main>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
