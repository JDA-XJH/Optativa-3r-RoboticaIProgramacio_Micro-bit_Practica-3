let Game_Start = false
let A = 0
let B = 0
basic.forever(function () {
    Game_Start = false
    basic.pause(randint(1000, 10000))
    Game_Start = true
    if (Game_Start == true) {
        for (let index = 0; index < 1; index++) {
            music.setVolume(80)
            music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.Chessboard)
            music.stopAllSounds()
        }
    }
    while (Game_Start) {
        if (input.pinIsPressed(TouchPin.P1)) {
            A += 1
            basic.showNumber(A)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            B += 1
            basic.showNumber(B)
            basic.pause(1000)
            basic.clearScreen()
        }
        Game_Start = false
        basic.pause(2000)
        basic.clearScreen()
    }
})
