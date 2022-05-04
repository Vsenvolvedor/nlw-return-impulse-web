import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import React from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentTypeStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessTypeStep } from './Steps/FeedbackSucessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de um lâmpada'
    }

  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = React.useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = React.useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedBackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessTypeStep onFeedbackRestartRequested={handleRestartFeedback} />
      ): (
        <>
            {!feedBackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedBackType} />
          ) : (
            <FeedbackContentTypeStep 
              feedbackType={feedBackType} 
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent = {() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
        
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a> 
      </footer>
    </div>
  )
}