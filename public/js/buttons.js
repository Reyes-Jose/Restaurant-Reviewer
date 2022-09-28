const buttons = document.querySelectorAll(`.rev-btn`);

console.log("buttons", buttons);

buttons.forEach((button, index) => {
    console.log(`Button ${index} [query]: `, button);

    button.addEventListener(`click`, e => {
    console.log(`Button ${index} [click]: `, e);
    });
})