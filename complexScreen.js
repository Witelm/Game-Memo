class ComplexScreen{
    constructor(element) {
        this.element = element;
        this.render();

        this.clickButton = this.clickButton.bind(this);
        this.element.lastChild.addEventListener('click', this.clickButton);
        
        window.application.screen = 'Complex';
    }

    render() {
        this.element.appendChild(templateEngine(ComplexScreen.template));
    }

    clickButton(event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {

            if (target.textContent === 'Старт') {
                console.log('function Start');
                window.application.screen = 'Start';
                const Game_screen = new GameScreen(app);

            } else {
                console.log('function 123');
                window.application.level = target.textContent;
                
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
            content: 'Выбери '
        },
        {
            tag: 'p',
            cls: 'complex__text',
            content: 'сложность '
        },
        {
            tag: 'div',
            cls: 'buttonDiv',
            content: [
                {
                    tag: 'button',
                    cls: 'complex__button',
                    content: '1'
                },
                {
                    tag: 'button',
                    cls: 'complex__button',
                    content: '2'
                },
                {
                    tag: 'button',
                    cls: 'complex__button',
                    content: '3'
                },
            ]
        },
        {
            tag: 'button',
            cls: 'complex__button_start',
            content: 'Старт'
        }

    ]
}