import React from 'react'
import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

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

export type FeedbackType = keyof typeof feedbackTypes



export function WidgetForm() {

    const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header className="text-xl leading-6">
                Send a Feedback
                <CloseButton />
            </header>

            {!feedBackType ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedBackType} />
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

