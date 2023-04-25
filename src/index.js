/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import { ComplexScreen } from './complexScreen.js'
import { templateEngine } from './template-engine.js'
import style from './style.css'
import { CardShow } from './cards-show.js'
import { GameScreen } from './gameScreen.js'

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

// './template-engine.js'
// import './complexScreen.js'
