const sw = process.stdout.columns

let max = sw
let min = -1
let w = 0
let d = 1

let char = ['╱', '╲']

function charColor(start) {  //input: foreground 30, foreground bright 90, background 40, background bright 100
  return `\x1b[${start + Math.floor(Math.random() * 8)}m`
}

function scratchMax() {
  let times = [1200, 2400, 2400, 5600]

  setTimeout(scratchMax, times[Math.floor(Math.random() * times.length)])
  let x = Math.random()
  max = x < 0.5 ? sw/2 : x < 0.75 ? sw/1.5 : x < .9 ? sw/1.2 : sw
}

function scratchMin() {
  setTimeout(scratchMin, 6100)
  let modifiers = [.4, .5, .2]
  min = max * modifiers[Math.floor(Math.random()) * modifiers.length]
}



function draw () {
  setTimeout(draw, 50)
  let output = ''

  if (w > max - 1 || w < min) {
    d = -d
  }

  w += d

  for (i=0; i<w; i++) {
    output += charColor(90) + char[Math.floor(Math.random() * char.length)]
  }
  console.log(output)
}

draw()
setTimeout(scratchMax, 5000)
setTimeout(scratchMin, 7000)
