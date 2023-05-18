def on_button_pressed_a():
    global randomx, randomy
    for index in range(ledsnumber):
        randomx = randint(0, 4)
        randomy = randint(0, 4)
        for index2 in range(256):
            led.plot_brightness(randomx, randomy, index2)
            control.wait_micros(100)
        basic.pause(pauses)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.set_tempo(100)
    for index3 in range(2):
        music.play_tone(262, music.beat(BeatFraction.HALF))
        music.play_tone(330, music.beat(BeatFraction.HALF))
        music.play_tone(262, music.beat(BeatFraction.HALF))
        music.play_tone(330, music.beat(BeatFraction.HALF))
        music.play_tone(392, music.beat(BeatFraction.WHOLE))
        music.play_tone(392, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

randomy = 0
randomx = 0
pauses = 0
ledsnumber = 0
ledsnumber = 150
pauses = 150
basic.show_icon(IconNames.SMALL_HEART)
basic.pause(500)
basic.clear_screen()