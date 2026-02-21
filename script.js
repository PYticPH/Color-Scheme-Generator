//script by PYticPH

const getColorSchemeBtn = document.getElementById('get-color-scheme')
const colorPicker = document.getElementById('color-picker')

let colorSeed = ''

colorPicker.addEventListener('change', (e) => colorSeed = e.target.value)

getColorSchemeBtn.addEventListener('click', () => {
  const schemeMode = document.getElementById('scheme-mode').value
})
