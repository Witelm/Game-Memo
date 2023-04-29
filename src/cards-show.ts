/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class CardShow {
    public element: HTMLElement
    public static template: Template

    constructor(element: HTMLElement) {
        this.element = element

        this.cardList = application.cards

        this.render()

        this.cardsClick = this.cardsClick.bind(this)

        this.buttonBeginNewGameHandler =
            this.buttonBeginNewGameHandler.bind(this)
        document
            .querySelector('.btn__new_game')
            .addEventListener('click', this.buttonBeginNewGameHandler)
    }

    render() {
        this.element.appendChild(templateEngine(CardShow.template))
        this.renderItem()
    }

    renderItem(item) {
        this.element.lastChild.appendChild(
            templateEngine(this.cardList.map(CardShow.templateItem))
        )

        const shirtBegin = () => {
            this.element.lastChild.innerHTML = ''
            this.element.lastChild.appendChild(
                templateEngine(this.cardList.map(CardShow.templateItemShirt))
            )
            const btn = document.querySelector('.btn__new_game')
            btn.removeAttribute('disabled')
            btn.classList.add('active')
            document
                .querySelector('.card__form')
                .addEventListener('click', this.cardsClick)
            this.timeOn()
        }

        setTimeout(shirtBegin, 5000)
    }

    timeOn() {
        const time = document.querySelector('.div__time')
        let sec1 = 0
        let sec2 = 0
        let min1 = 0
        let min2 = 0
        const timeInterval = setInterval(() => {
            if (sec1 >= 9) {
                sec2 += 1
                sec1 = 0
            } else {
                sec1 += 1
            }
            if (sec2 >= 6 && sec1 >= 0) {
                min1 += 1
                sec1 = 0
                sec2 = 0
            }
            if (min1 >= 9) {
                min2 += 1
                sec1 = 0
                min1 = 0
                sec2 = 0
            }
            if (application.win) {
                clearInterval(timeInterval)
            }
            time.textContent = `${min2}${min1}.${sec2}${sec1}`
            application.time = time.textContent
        }, 1000)
    }

    cardsClick(event) {
        const target = event.target
        const delItemArr = application.cards
        if (application.choosenCard === '') {
            application.choosenCard = target.id
            delItemArr.splice(delItemArr.indexOf(target.id), 1)
        } else {
            if (application.choosenCard !== target.id) {
                target.setAttribute('src', `./images/${target.id}.jpg`)
                setTimeout(() => {
                    application.win = 'lose'
                    const endScreen = new End(app)
                }, 1000)
            } else {
                application.choosenCard = ''
                delItemArr.splice(delItemArr.indexOf(target.id), 1)
            }
        }
        target.setAttribute('src', `./images/${target.id}.jpg`)

        if (application.cards.length === 0) {
            setTimeout(() => {
                application.win = 'win'
                const endScreen = new End(app)
            }, 1000)
        }
    }

    buttonBeginNewGameHandler() {
        this.element.innerHTML = ''
        const application: Application = {
            level: '',
            time: '',
            status: '',
            cards: [],
            screen: '',
            win: '',
            choosenCard: [],
        }
        // application = {
        //     level: '',
        //     time: '',
        //     status: '',
        //     cards: '',
        //     screen: '',
        //     choosenCard: '',
        // }
        const Complex_Screen = new ComplexScreen(app)
    }
}

CardShow.template = {
    tag: 'div',
    cls: 'card__form',
}

CardShow.templateItem = (item) => ({
    tag: 'img',
    cls: 'img__style',
    attrs: {
        src: `../images/${item}.jpg`,
    },
})

CardShow.templateItemShirt = (data) => ({
    tag: 'img',
    cls: 'img__style',
    attrs: {
        src: `../images/shirt.jpg`,
        id: data,
    },
})

export { CardShow }
import { ComplexScreen } from './complexScreen'
import { templateEngine } from './template-engine'
import { app } from './index'
import { End } from './end'
import application from './index'
