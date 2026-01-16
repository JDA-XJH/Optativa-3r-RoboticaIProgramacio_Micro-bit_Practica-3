basic.forever(function () {
    basic.pause(randint(1000, 10000))
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Square)
        basic.pause(1)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1)
    }
})
