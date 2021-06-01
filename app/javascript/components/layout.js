const initLayout = () => {
    const buttons = document.getElementsByClassName('contactForm');
    const close = document.getElementsByClassName('close');
    console.log(buttons);
    for (let btn of buttons) {
        btn.addEventListener('click', event => {
            document.getElementById("Layout").style.display = "block";
        })
    }
    for (let btn of close) {
        btn.addEventListener('click', event => {
            document.getElementById("Layout").style.display = "none";
        })
    }
    
}

export { initLayout };