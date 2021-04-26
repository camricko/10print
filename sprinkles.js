const sw = process.stdout.columns

let char = ['╱', '╲']

function charColor(start) {  //input: foreground 30, foreground bright 90, background 40, background bright 100
  return `\x1b[${start + Math.floor(Math.random() * 8)}m`
}

let w = 0
let d = 1

function draw () {
  setTimeout(draw, 100)
  let output = ''

  if (w > sw / 2 || w < 0) {
    d = -d
  }

  w += d

  for (i=0; i<w; i++) {
    output += charColor(90) + char[Math.floor(Math.random() * char.length)]
  }
  console.log(output)
}

draw()
