import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
    >
      {children}
    </Link>
  );
};

export default Button;