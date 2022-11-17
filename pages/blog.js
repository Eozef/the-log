import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

// The Blog Page Content
export default function Blog({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, metaDesc, category, date, bannerImage, tags } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <article className="mt-20 mr-10" key={title}>
            <Link href={`/posts/${slug}`}>
              <h1 className="text-gray-800 text-3xl font-bold mt-20 mr-5">{title}</h1>
            </Link>
            <h3 className="text-xs mt-2 text-gray-500">{date}</h3>
            <h3 className="mt-2 font-semibold text-gray-500">{metaDesc}</h3>
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
