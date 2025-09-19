import Card from "@/app/ui/card";
import { getTutorials } from "@/lib/database";

export default async function Home() {
  const tutorials = await getTutorials();

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-12">
      <main className="flex flex-col items-start">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Seja bem-vindo(a)!
        </h1>
        <div className="mt-4 text-lg bg-green-100 text-green-800 font-medium px-6 py-2 rounded-full">
          O que deseja aprender hoje?
        </div>

        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              title={tutorial.titulo}
              description={tutorial.descricao || ""}
              href={`/tutorial/${tutorial.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
