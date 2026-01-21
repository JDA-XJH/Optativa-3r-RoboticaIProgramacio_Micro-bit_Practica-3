let B = 0
let A = 0
let Game_Start = false
for (let index = 0; index < 100000000000; index++) {
    for (let index = 0; index < 10000000000000000000; index++) {
        Game_Start = false
        basic.pause(randint(1000, 10000))
        Game_Start = true
        if (true) {
            for (let index = 0; index < 1; index++) {
                music.setVolume(80)
                music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Chessboard)
                music.stopAllSounds()
            }
        }
    }
    while (Game_Start) {
        if (input.pinIsPressed(TouchPin.P1)) {
            A += 1
            basic.showNumber(A)
            Game_Start = false
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            B += 1
            basic.showNumber(B)
            Game_Start = false
        }
        Game_Start = false
        basic.pause(2000)
        basic.clearScreen()
    }
}
