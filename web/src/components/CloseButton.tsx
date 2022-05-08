import React from 'react'
import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton() {
  return (
    <Popover.Button
    className="absolute right-5 top-5 text-zync-400 hover:text-zinc-100"
    title="Close"
  >
    <X className="w-4 h-4" weight="bold" />
  </Popover.Button>
  )
}

