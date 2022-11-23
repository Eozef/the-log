import Button from "./button";
import Contact from "./contact";

export default function Hero() {
  return (
    <section className="mt-20 mb-20">
      <h1 className="text-gray-800 text-7xl font-bold dark:text-gray-300">
        Hi I&apos;m <span className="dark:text-blue-800">Joseph</span>
      </h1>
      <h3 className="text-gray-800 text-4xl my-3 dark:text-gray-300">
        I am a Developer
      </h3>
      <ul className="text-gray-800 mb-8 dark:text-gray-300 ">
        <li>On the Internet since 2005, which is my actual <q>home town</q></li>
        <li>I post stuff about coding and write code</li>
        <li>Live in Sydney</li>
      </ul>
      <Button onClick={Contact} className="bg-blue-800 text-white px-8">
        Hire Me!
      </Button>
    </section>
  );
}
