import { it } from '@jest/globals'

import { JSDOM } from 'jsdom'
const dom = new JSDOM(`<div class="app"></div>`)
global.window = dom.window
global.document = dom.window.document

const application = require('../src/index')
const { End } = require('../src/end')

it('should add "endScreen" on application.screen', () => {
    const app = document.createElement('div')
    const testClass = new End(app)

    expect(application.default.screen).toBe('endScreen')
})
