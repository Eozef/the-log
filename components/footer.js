export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-800 text-base font-bold dark:text-gray-300 ">
      <span>
        <a href="https://github.com/Eozef">github</a> ||
        <a href="https://www.linkedin.com/in/jingyi-yg/"> linkedin </a>
      </span>
      &copy; {new Date().getFullYear()} All Rights Reversed
    </footer>
  );
}
