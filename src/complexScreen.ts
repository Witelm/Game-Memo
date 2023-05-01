/* eslint-disable no-undef */
class ComplexScreen {
    public element: HTMLElement
    public static template: Template

    constructor(element: HTMLElement) {
        this.element = element
        this.render()

        this.clickButton = this.clickButton.bind(this)

        const lastElementBtn = this.element.lastChild as HTMLElement
        lastElementBtn.addEventListener('click', this.clickButton)

        application.screen = 'Complex'
    }

    render(): void {
        // eslint-disable-next-line no-undef
        this.element.appendChild(templateEngine(template))
    }

    clickButton(event: MouseEvent) {
        const target: HTMLElement = event.target as HTMLElement
        if (target.tagName === 'BUTTON') {
            if (target.textContent === 'Старт') {
                application.screen = 'Start'
                // eslint-disable-next-line camelcase, no-unused-vars
                const Game_screen = new GameScreen(app)
            } else {
                application.level = target.textContent

                const startButtonActive = document.querySelector(
                    '.complex__button_start'
                ) as HTMLElement
                startButtonActive.removeAttribute('disabled')
                startButtonActive.classList.add('active')

                const btns: NodeListOf<Element> =
                    document.querySelectorAll('.complex__button')
                btns.forEach((btn: Element) => {
                    if (btn.textContent !== target.textContent) {
                        btn.classList.add('invisible')
                    }
                })
            }
        }
    }
}

const template: Template = {
    tag: 'div',
    cls: 'complex__form',
    content: [
        {
            tag: 'p',
            cls: 'complex__text',
            content: 'Выбери ',
        },
        {
            tag: 'p',
            cls: 'complex__text',
            content: 'сложность ',
        },
        {
            tag: 'div',
            cls: 'buttonDiv',
            content: [
                {
                    tag: 'button',
                    cls: 'complex__button',
                    content: '1',
                },
                {
                    tag: 'button',
                    cls: 'complex__button',
                    content: '2',
                },
                {
                    tag: 'button',
                    cls: 'complex__button',
                    content: '3',
                },
            ],
        },
        {
            tag: 'button',
            cls: 'complex__button_start',
            content: 'Старт',
            attrs: {
                disabled: 'true',
            },
        },
    ],
}

import application from './index'
import { templateEngine } from './template-engine'
export { ComplexScreen }
import { GameScreen } from './gameScreen'
import { app } from './index'
import { Template } from 'webpack'
