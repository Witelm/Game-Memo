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
        level: string | null
        time: string
        status: string
        cards: Array<String>
        screen: string
        win: string
        choosenCard: string | null
    }
}

const application: Application = {
    level: '',
    time: '',
    status: '',
    cards: [],
    screen: '',
    win: '',
    choosenCard: '',
}

export { app }
export default application

const app = document.querySelector('.app') as HTMLElement
const Complex_Screen = new ComplexScreen(app)
