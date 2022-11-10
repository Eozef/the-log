import Button from "./button";

export default function Hero() {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        Hi I&apos;m <span className="dark:text-blue-800">Joseph</span>
      </h1>
      <h3 className="text-4xl my-3">I am a Developer</h3>
      <p className="text-gray-500 mb-8">
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
