export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-800 text-sm dark:text-gray-300">
      <span className="text-gray-800 dark:text-gray-300 font-bold text-lg mr-2">
        Joseph
      </span>{" "}
      &copy; {new Date().getFullYear()} All Rights Reversed
    </footer>
  );
}
