let Game_Start = false
basic.forever(function () {
    Game_Start = false
    basic.pause(randint(1000, 10000))
    Game_Start = true
    if (true) {
        for (let index = 0; index < 1; index++) {
            music.setVolume(80)
            music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
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
            music.stopAllSounds()
        }
    }
})
