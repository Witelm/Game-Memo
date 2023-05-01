/* eslint-disable no-undef */
class End {
    public element: HTMLElement
    public static template: Template

    constructor(element: HTMLElement) {
        this.element = element

        this.render()

        this.endClickButton = this.endClickButton.bind(this)

        const lastElement: ChildNode | null = this.element.lastChild

        if (lastElement !== null) {
            lastElement.addEventListener('click', this.endClickButton)
        }

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

const template: Template = (data: String, dataImg: String) => ({
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
            content: `затраченное время ${application.time}`,
        },
        {
            tag: 'img',
            cls: 'end__img',
            attrs: {
                src: dataImg,
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
import { Template } from 'webpack'
