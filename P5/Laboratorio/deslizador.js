console.log("desliza_r... main")

const desliza_r = document.getElementById('desliza_r')
const display = document.getElementById('display')

desliza_r.oninput = () => {
    display.innerHTML = desliza_r.value
}
