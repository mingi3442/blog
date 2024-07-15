import { cx } from 'class-variance-authority'
import { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export * from 'class-variance-authority'

export const ctm = (...args: ClassValue[]) => twMerge(cx(args))
