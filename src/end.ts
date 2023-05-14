/* eslint-disable no-undef */
class End {
    public element: HTMLElement
    public static template: (dataText: String, dataImage: String) => Template

    constructor(element: HTMLElement) {
        this.element = element

        this.render()

        this.endClickButton = this.endClickButton.bind(this)

        const lastElement = this.element.lastChild as ChildNode

        lastElement.addEventListener('click', this.endClickButton)

        application.screen = 'endScreen'
    }

    render() {
        this.element.innerHTML = ''

        const ENDTEXT: String =
            application.win === 'lose' ? 'вы проиграли' : 'вы выиграли'

        const ENDIMAGE: String =
            application.win === 'lose'
                ? `./images/lose.jpg`
                : `./images/win.jpg`

        this.element.appendChild(templateEngine(template(ENDTEXT, ENDIMAGE)))
    }

    endClickButton() {
        this.element.innerHTML = ''

        application.choosenCard = ''
        application.level = ''
        application.cards = []
        application.time = ''
        application.win = ''
        application.status = ''
        application.screen = ''

        const Complex_Screen = new ComplexScreen(app)
    }
}

const template = (dataText: String, dataImage: String): Template => ({
    tag: 'div',
    cls: 'end__form',
    content: [
        {
            tag: 'h1',
            cls: 'end__text',
            content: dataText,
        },
        {
            tag: 'h2',
            cls: 'end__text_add',
            content: `затраченное время ${application.time}`,
        },
        {
            tag: 'img',
            cls: 'end__img',
            attrs: {
                src: dataImage,
            },
        },
        {
            tag: 'button',
            cls: ['end__btn', 'active'],
            content: 'Начать заново?',
        },
    ],
})

import { templateEngine } from './template-engine'
import { ComplexScreen } from './complexScreen'
import { app } from './index'
export { End }
import application from './index'
import { Template } from './template-engine'
