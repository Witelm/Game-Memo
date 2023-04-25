/* eslint-disable no-undef */
class End {
    constructor(element) {
        this.element = element

        this.render()
    }

    render() {
        console.log(window.application.time)
        this.element.innerHTML = ''
        const ENDTEXT =
            window.application.win === 'lose' ? 'вы проиграли' : 'вы выиграли'

        this.element.appendChild(templateEngine(End.template(ENDTEXT)))
    }
}

End.template = (data) => ({
    tag: 'div',
    cls: 'end__form',
    content: [
        {
            tag: 'h1',
            cls: 'end__text',
            content: data,
        },
        {
            tag: 'h2',
            cls: 'end__text_add',
            content: `затраченное время ${window.application.time}`,
        },
        {
            tag: 'img',
            cls: 'end__img',
            attrs: {
                src: `./images/lose.jpg`,
            },
        },
    ],
})

import { templateEngine } from './template-engine'
export { End }
