basic.forever(function () {
    control.waitMicros(randint(1000000, 10000000))
    for (let index = 0; index < 1; index++) {
        control.waitMicros(10)
        basic.showIcon(IconNames.Square)
        control.waitMicros(10)
        basic.showIcon(IconNames.SmallSquare)
        control.waitMicros(10)
        basic.showIcon(IconNames.SmallDiamond)
        control.waitMicros(10)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
