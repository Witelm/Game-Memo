// import { Template } from 'webpack'

/* eslint-disable no-unused-vars */
function templateEngine(block: Template) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('')
    }

    if (
        typeof block === 'string' ||
        typeof block === 'number' ||
        block === true
    ) {
        return document.createTextNode(block as string)
    }

    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment()
        block.forEach((item) => {
            const el = templateEngine(item)
            fragment.appendChild(el)
        })
        return fragment
    }
    const element = document.createElement(block.tag)

    if (block.cls) {
        element.classList.add(...[].concat(block.cls as []).filter(Boolean))
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs)
        keys.forEach((key) => {
            element.setAttribute(key, block.attrs![key] as string)
        })
    }

    const content = templateEngine(block.content as Template)
    element.appendChild(content)
    return element
}

export type Template =
    | {
          tag: string
          cls: string | string[]
          content?: Template[] | Template | String
          attrs?: {
              [key: string]: String
          }
      }
    | string
    | number
    | boolean

export { templateEngine }
