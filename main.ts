input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < ledsnumber; index++) {
        randomx = randint(0, 4)
        randomy = randint(0, 4)
        for (let index2 = 0; index2 <= 100; index2++) {
            led.plotBrightness(randomx, randomy, index2)
            control.waitMicros(100)
        }
        basic.pause(pauses)
    }
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(100)
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
let randomy = 0
let randomx = 0
let pauses = 0
let ledsnumber = 0
music.playMelody("B B G D C5 C C5 C ", 500)
ledsnumber = 150
pauses = 150
basic.showIcon(IconNames.SmallHeart)
basic.pause(500)
basic.clearScreen()
