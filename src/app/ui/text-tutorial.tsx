'use client';

interface TextTutorialProps {
  contentUrl: string;
  title: string;
}

const TextTutorial = ({ contentUrl, title }: TextTutorialProps) => {
  const getToolName = () => {
    try {
      const url = new URL(contentUrl);
      const hostname = url.hostname.toLowerCase();
      
      if (hostname.includes('canva')) return 'Canva';
      if (hostname.includes('notion')) return 'Notion';
      if (hostname.includes('docs.google')) return 'Google Docs';
      if (hostname.includes('chat.openai')) return 'ChatGPT';
      
      return 'Ferramenta';
    } catch {
      return 'Ferramenta';
    }
  };

  const getTutorialContent = () => {
    const toolName = getToolName();
    
    switch (toolName) {
      case 'Canva':
        return {
          steps: [
            'Acesse o site do Canva e crie uma conta gratuita',
            'Escolha o tipo de design que deseja criar (apresentação, post, etc.)',
            'Selecione um template que combine com seu objetivo',
            'Personalize cores, fontes e imagens conforme sua necessidade',
            'Adicione seus próprios textos e elementos visuais',
            'Baixe ou compartilhe seu design finalizado'
          ],
          tips: [
            'Use cores consistentes para manter a identidade visual',
            'Não sobrecarregue o design com muitos elementos',
            'Mantenha o texto legível com bom contraste'
          ]
        };
      
      case 'Google Docs':
        return {
          steps: [
            'Acesse docs.google.com e faça login com sua conta Google',
            'Clique em "Documento em branco" para criar um novo documento',
            'Use a barra de ferramentas para formatar seu texto',
            'Organize seu conteúdo com títulos e subtítulos',
            'Adicione imagens, tabelas e outros elementos conforme necessário',
            'Compartilhe o documento com outras pessoas para colaboração'
          ],
          tips: [
            'Use estilos de título para organizar melhor o documento',
            'Aproveite os recursos de colaboração em tempo real',
            'Configure as permissões de compartilhamento adequadamente'
          ]
        };
      
      case 'ChatGPT':
        return {
          steps: [
            'Acesse chat.openai.com e crie uma conta',
            'Seja específico e claro em suas perguntas',
            'Forneça contexto suficiente para obter respostas relevantes',
            'Use prompts estruturados para tarefas complexas',
            'Refine suas perguntas com base nas respostas recebidas',
            'Aproveite as conversas anteriores para manter o contexto'
          ],
          tips: [
            'Seja específico sobre o que você quer',
            'Peça exemplos quando necessário',
            'Use o ChatGPT como um assistente, não como fonte única de verdade'
          ]
        };
      
      default:
        return {
          steps: [
            'Acesse a ferramenta através do link fornecido',
            'Explore as funcionalidades principais',
            'Pratique com exemplos simples primeiro',
            'Gradualmente aumente a complexidade dos seus projetos'
          ],
          tips: [
            'Dedique tempo para explorar todas as funcionalidades',
            'Pratique regularmente para desenvolver fluência'
          ]
        };
    }
  };

  const content = getTutorialContent();

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Como usar o {getToolName()}
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Passo a passo:
            </h3>
            <ol className="space-y-3">
              {content.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Dicas importantes:
            </h3>
            <ul className="space-y-2">
              {content.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <a
          href={contentUrl}
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

export default TextTutorial;
