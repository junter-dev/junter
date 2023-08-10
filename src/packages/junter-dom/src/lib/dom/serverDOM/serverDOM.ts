import { JSDOM } from 'jsdom'

const { window } = new JSDOM()

export const Window = window
