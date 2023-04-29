/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import { ComplexScreen } from './complexScreen'
import { templateEngine } from './template-engine'
import './style.css'
import { CardShow } from './cards-show'
import { GameScreen } from './gameScreen'

declare global {
    interface Application {
        level: String
        time: string
        status: string
        cards: Array<String>
        screen: string
        win: string
        choosenCard: Array<String>
    }
}

const application: Application = {
    level: '',
    time: '',
    status: '',
    cards: [],
    screen: '',
    win: '',
    choosenCard: [],
}

// window.application: Application = {
//     level: '',
//     time: '',
//     status: '',
//     cards: [],
//     screen: '',
//     win: '',
//     choosenCard: [],
// }

export default application

const app: HTMLElement | null = document.querySelector('.app')
const Complex_Screen = new ComplexScreen(app)

export { app }
