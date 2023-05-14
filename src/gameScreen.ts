/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class GameScreen {
    public element: HTMLElement
    public static template: Template

    constructor(element: HTMLElement) {
        this.element = element

        this.mixCards()
        this.render()
    }

    render() {
        this.element.innerHTML = ''
        this.element.appendChild(templateEngine(template as Template))
        const Card_Show = new CardShow(this.element)
    }

    mixCards() {
        const pair: number =
            application.level !== null ? +application.level * 3 : 0
        const list: String[] = []

        function shuffle(array: Array<String>): Array<String> {
            let m = array.length,
                t,
                i

            while (m) {
                i = Math.floor(Math.random() * m--)
                t = array[m]
                array[m] = array[i]
                array[i] = t
            }

            return array
        }

        const random = (item: Array<String>): number => {
            return Math.floor(Math.random() * item.length)
        }

        for (let i = 0; i < pair; i++) {
            let temp: string =
                ArrayCards[random(ArrayCards)] + ArraySuits[random(ArraySuits)]
            if (list.includes(temp)) {
                i--
                temp = ''
            } else {
                list[i] = temp
                temp = ''
            }
        }

        list.push(...list)
        application.cards = shuffle(list)
    }
}

const template: Template = {
    tag: 'div',
    cls: 'screen__form',
    content: [
        {
            tag: 'div',
            cls: 'time__new_game',
            content: [
                {
                    tag: 'div',
                    cls: 'min_sec',
                    content: [
                        {
                            tag: 'p',
                            cls: 'min',
                            content: 'min',
                        },
                        {
                            tag: 'p',
                            cls: 'sec',
                            content: 'sec',
                        },
                    ],
                },
                {
                    tag: 'h1',
                    cls: 'div__time',
                    content: [
                        {
                            tag: 'time',
                            cls: '',
                            content: '00.00',
                        },
                    ],
                },
            ],
        },

        {
            tag: 'button',
            cls: 'btn__new_game',
            content: 'Начать заново!',
            attrs: {
                disabled: 'true',
            },
        },
    ],
}

const ArrayCards: Array<string> = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const ArraySuits: Array<string> = ['H', 'C', 'D', 'S']

export { GameScreen }
import { templateEngine } from './template-engine'
import { app } from './index'
import { CardShow } from './cards-show'
import application from './index'
// import { Template } from 'webpack'
import { Template } from './template-engine'
