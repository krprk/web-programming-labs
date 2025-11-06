const picker = document.querySelector('.picker')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const color4 = document.querySelector('.color4')
picker.addEventListener('input', function(){
    console.log(picker.value);
})

picker.addEventListener('input', function(){
    let color = picker.value;
    console.log(color);
    color1.style.backgroundColor = hexToRgbString(color, 0, 64, 64)
    color2.style.backgroundColor = hexToRgbString(color, 0, 115, 115)
    color3.style.backgroundColor = hexToRgbString(color, -64, 48, 48)
    color4.style.backgroundColor = hexToRgbString(color, -32, 0, 0)
})

function hexToRgbString(hex, x, y, z) {
    hex = hex.replace(/^#/, '');
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `rgb(${r+x}, ${g+y}, ${b+z})`;
}


document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelectorAll('.color1, .color2, .color3, .color4');

    function showBackgroundColor() {
        this.innerHTML = this.style.backgroundColor;
    }
    function copyhex(){
        navigator.clipboard.writeText(rgbToHex(this.style.backgroundColor));
        alert('Текст скопирован в буфер обмена');
    }
    colors.forEach(block => {
        block.addEventListener('mouseenter', showBackgroundColor);
        block.addEventListener('click', copyhex);
    });
});

function rgbToHex(rgbString) {
    const match = rgbString.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i); 
    const [_, q, w, e]  = match.map(Number);
    return "#" + [q, w, e]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();
}

