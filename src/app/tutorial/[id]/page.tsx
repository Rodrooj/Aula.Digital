import { getTutorialById } from "@/lib/database";
import { notFound } from "next/navigation";
import VideoPlayer from "@/app/ui/video-player";
import TextTutorial from "@/app/ui/text-tutorial";

interface TutorialPageProps {
  params: {
    id: string;
  };
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const tutorial = await getTutorialById(parseInt(params.id));

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {tutorial.titulo}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {tutorial.descricao}
        </p>
      </div>

      {tutorial.tipo === 'video' ? (
        <VideoPlayer 
          videoUrl={tutorial.link_conteudo}
          title={tutorial.titulo}
        />
      ) : (
        <TextTutorial 
          contentUrl={tutorial.link_conteudo}
          title={tutorial.titulo}
        />
      )}
    </div>
  );
}
