const w = process.stdout.columns

let char = ['╱', '╲']

function charColor(start) {  //input: foreground 30, foreground bright 90, background 40, background bright 100
  return `\x1b[${104 + Math.floor(Math.random() * 3)}m\x1b[${start + Math.floor(Math.random() * 8)}m`
}


function draw () {
  setTimeout(draw, 1000)
  let output = ''
  for (i=0; i<w; i++) {
    output += charColor(90) + char[Math.floor(Math.random() * char.length)]
  }
  console.log(output)
}

draw()
