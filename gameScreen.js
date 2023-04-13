class GameScreen{
    constructor(element) {
        this.element = element;
        this.render();
    }

    render() {
        this.element.innerHTML = '';
        console.log('Экран игры!');
    }
}