import Card from "@/app/ui/card";

const tutorials = [
  {
    title: "Slides atrativos",
    description: "Aprenda a fazer slides com a plataforma Canva",
    href: "/tutorials/slides-canva",
  },
  {
    title: "Quiz dinâmicos",
    description: "Aprenda a fazer quiz do tipo Kahoot para a sala de aula",
    href: "/tutorials/quiz-kahoot",
  },
  {
    title: "Boas anotações",
    description: "Aprenda a tomar notas de maneira eficiente",
    href: "/tutorials/anotacoes",
  },
  {
    title: "Google Docs",
    description: "Aprenda a usar o Google Docs, o substituto do Word",
    href: "/tutorials/google-docs",
  },
  {
    title: "Pesquisas",
    description: "Aprenda a fazer boas pesquisas utilizando palavras-chave",
    href: "/tutorials/pesquisas",
  },
  {
    title: "IA eficiente",
    description: "Aprenda a fazer boas perguntas para o ChatGPT",
    href: "/tutorials/chatgpt",
  },
];


export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-12">
      <main className="flex flex-col items-start">
        <h1 className="text-5xl font-bold text-foreground">
          Seja bem-vindo(a)!
        </h1>
        <div className="mt-4 text-lg bg-accent/20 text-accent font-medium px-6 py-2 rounded-full">
          O que deseja aprender hoje?
        </div>

        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.title}
              title={tutorial.title}
              description={tutorial.description}
              href={tutorial.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
}