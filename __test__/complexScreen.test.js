import { it } from '@jest/globals'

import { JSDOM } from 'jsdom'
const dom = new JSDOM(`<div class="app"></div>`)
global.window = dom.window
global.document = dom.window.document

const application = require('../src/index')
const { ComplexScreen } = require('../src/complexScreen')

it('should add "Complex" on application.screen', () => {
    const app = document.createElement('div')
    const testClass = new ComplexScreen(app)

    expect(application.default.screen).toBe('Complex')
})
