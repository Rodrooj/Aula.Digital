import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
}

const Card = ({ title, description, href }: CardProps) => {
  return (
    <div className="bg-slate-800 text-white rounded-lg p-6 flex flex-col shadow-lg min-h-[200px] hover:bg-slate-700 transition-colors">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 flex-grow text-sm leading-relaxed">{description}</p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Ver o conteúdo
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;