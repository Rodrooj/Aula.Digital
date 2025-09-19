import Button from '@/app/ui/button';

interface CardProps {
  title: string;
  description: string;
  href: string;
}

const Card = ({ title, description, href }: CardProps) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg p-6 flex flex-col shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-300 flex-grow">{description}</p>
      <div className="mt-auto">
        <Button href={href}>
          Ver o conteúdo
          <span aria-hidden="true"> →</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;