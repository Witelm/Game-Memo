/* eslint-disable no-undef */
class ComplexScreen {
    constructor(element) {
        this.element = element
        this.render()
        this.clickButton = this.clickButton.bind(this)
        this.element.lastChild.addEventListener('click', this.clickButton)

        window.application.screen = 'Complex'
    }

    render() {
        // eslint-disable-next-line no-undef
        this.element.appendChild(templateEngine(ComplexScreen.template))
    }

    clickButton(event) {
        const target = event.target
        if (target.tagName === 'BUTTON') {
            if (target.textContent === 'Старт') {
                window.application.screen = 'Start'
                // eslint-disable-next-line camelcase, no-unused-vars
                const Game_screen = new GameScreen(app)
            } else {
                window.application.level = target.textContent

                const startButtonActive = document.querySelector(
                    '.complex__button_start'
                )
                startButtonActive.removeAttribute('disabled')
                startButtonActive.classList.add('active')

                const btns = document.querySelectorAll('.complex__button')
                btns.forEach((btn) => {
                    if (btn.textContent !== target.textContent) {
                        btn.classList.add('invisible')
                    }
                })
            }
        }
    }
}

ComplexScreen.template = {
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
