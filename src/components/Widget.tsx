import React from 'react';
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {




    return (
        <Popover className=" absolute bottom-6 right-6">
           <Popover.Panel>Message</Popover.Panel>
            <Popover.Button  className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
                    <span className="pl-2">Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}
