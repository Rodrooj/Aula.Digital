import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full max-w-6xl mx-auto py-4 px-8">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Aula<span className="text-accent">.</span>Digital
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-foreground transition-colors">
            Home
          </Link>
          <button className="flex items-center gap-2 text-white bg-accent px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
            Tutorials
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.94287 6.44287L8.00002 9.50002L11.0572 6.44287"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;