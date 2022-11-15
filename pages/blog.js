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
        const { title, author, category, date, bannerImage, tags } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <article className="font-semibold mt-20 mr-10" key={title}>
            <Link href={`/posts/${slug}`}>
              <h1 className="text-2xl font-bold">{title}</h1>
            </Link>
            <h3 className="text-xs mt-2 text-gray-500">{date}</h3>
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
