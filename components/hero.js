import Button from "./button";

export default function Hero() {
  return (
    <section className="mt-20 mb-20">
      <h1 className="text-gray-800 text-7xl font-bold dark:text-gray-300">
        Hi I&apos;m <span className="dark:text-blue-800">Joseph</span>
      </h1>
      <h3 className="text-gray-800 text-4xl my-3 dark:text-gray-300">
        I am a Developer
      </h3>
      <p className="text-gray-800 mb-8 dark:text-gray-300 ">
        A dedicated and hard-working IT seeking the role of Software Developer,
        where I will be able to utilize my knowledge in front-end and back-end
        development, an understanding in UX Principles and experience. Along
        with my depth knowledge in Agile development methodology that I have
        acquired to assist the company to success and expansion of
        opportunities.
      </p>
      <Button className="bg-blue-800 text-white px-8">Hire Me!</Button>
    </section>
  );
}
