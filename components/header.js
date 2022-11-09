import Link from "next/link";

export default function Header() {
  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "./about" },
  ];
  return (
    <header className="h-16 flex items-center justify-between">
      <div className="flex gap-4 ">
        {navigations.map((nav) => (
          // eslint-disable-next-line react/jsx-key
          <Link
            href={nav.path}
            className="font-semibold text-gray-400 hover:text-gray-500"
          >
            {nav.label}
          </Link>
        ))}
      </div>
      <button>Icon</button>
    </header>
  );
}
