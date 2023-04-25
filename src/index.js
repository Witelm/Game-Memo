/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

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

import './template-engine.js'
import './complexScreen.js'
import './gameScreen.js'
import './cards-show.js'
import './end.js'
import './style.css'
