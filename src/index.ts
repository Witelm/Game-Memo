/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import { ComplexScreen } from './complexScreen'
import { templateEngine } from './template-engine'
// import style from './style.css'
import { CardShow } from './cards-show'
import { GameScreen } from './gameScreen'

window.application = {
    level: '',
    time: '',
    status: '',
    cards: '',
    screen: '',
    win: '',
    choosenCard: '',
}

const app = document.querySelector('.app')
const Complex_Screen = new ComplexScreen(app)

export { app }
