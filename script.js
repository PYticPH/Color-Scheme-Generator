//script by PYticPH

const getColorSchemeBtn = document.getElementById('get-color-scheme')
const colorPicker = document.getElementById('color-picker')

let colorSeed = '#000000'

colorPicker.addEventListener('change', (e) => colorSeed = e.target.value)

getColorSchemeBtn.addEventListener('click', () => {
  const schemeMode = document.getElementById('scheme-mode').value

  fetch(`https://www.thecolorapi.com/scheme?hex=${colorSeed.slice(1)}&mode=${schemeMode}&count=6`)
    .then(res => res.json())
    .then(data => generateColorPallet(data.colors))
})

function generateColorPallet(colorSchemeArr) {

  const colorPalette = document.getElementById('color-palette')

  colorPalette.innerHTML = ''

  const divs = colorSchemeArr.map(
    ({ hex }) =>
      `
      <div>
        <button class="color-code">${hex.value}</button>
      </div>
    `
  ).join('')

  colorPalette.innerHTML += divs

  document.querySelectorAll('#color-palette div')
    .forEach((element, index) => element.style.backgroundColor = colorSchemeArr[index].hex.value)
}
