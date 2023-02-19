const input = document.createElement('climatedata')
input.type = 'file'

input.addEventListener('change', (event) => {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    const text = reader.result
    const rows = text.split('\n')
    // Process the CSV data as needed

  console.log("hellow world");
  }

  reader.readAsText(file)
})

document.body.appendChild(input)