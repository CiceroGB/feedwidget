import React from 'react'
import { CloseButton } from './CloseButton'

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { useState } from 'react'

export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        image: {
            source: bugImageUrl,
            alt: 'Bug image'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Idea image'
        }
    },
    OTHER: {
        title: 'Others',
        image: {
            source: thoughtImageUrl,
            alt: 'Ballon thought image'
        }
    }
}

type FeedbackType = keyof typeof feedbackTypes



export function WidgetForm() {

    const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header className="text-xl leading-6">
                Send a Feedback
                <CloseButton />
            </header>

            {!feedBackType ? (
                <div className="flex py-8 gap-2 w-full" >
                    {Object.entries(feedbackTypes).map(([key, value]) => (
                        <button
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => setFeedBackType(key as FeedbackType)}
                            key={key}>
                            <img src={value.image.source} alt="value.image.alt" />
                            <span>{value.title}</span>
                        </button>
                    ))}
                </div>
            ) : (
                <h1>Form</h1>
            )}

            <footer className="text-xs text-neutral-400">
                <span>
                    Developed by{' '}
                    <a
                        className="underline underline-offset-4"
                        href="https://github.com/CiceroGB/"
                        target="_blank"
                    >
                        CiceroGB
                    </a>
                </span>
            </footer>
        </div>
    )
}

