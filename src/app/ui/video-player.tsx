'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

function extractYouTubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeId = extractYouTubeId(videoUrl);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getToolUrl = () => {
    // Extrair domínio da URL para determinar a ferramenta
    try {
      const url = new URL(videoUrl);
      return url.origin;
    } catch {
      return '#';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
        {youtubeId && !isPlaying ? (
          <div className="relative aspect-video bg-slate-700 flex items-center justify-center">
            <button
              onClick={handlePlay}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              aria-label="Reproduzir vídeo"
            >
              <svg 
                className="w-8 h-8 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        ) : youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="aspect-video bg-slate-700 flex items-center justify-center">
            <p className="text-white">Vídeo não disponível</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <a
          href={getToolUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
        >
          Acessar ferramenta
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default VideoPlayer;
