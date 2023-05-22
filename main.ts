radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Lo_que_has_elegido == 1) {
            basic.showString("Empate")
        } else if (Lo_que_has_elegido == 2) {
            basic.showString("Derrota")
        } else {
            basic.showString("Victoria")
        }
    } else if (receivedNumber == 2) {
        if (Lo_que_has_elegido == 1) {
            basic.showString("Victoria")
        } else if (Lo_que_has_elegido == 2) {
            basic.showString("Empate")
        } else {
            basic.showString("Derrota")
        }
    } else {
        if (Lo_que_has_elegido == 1) {
            basic.showString("Derrota")
        } else if (Lo_que_has_elegido == 2) {
            basic.showString("Victoria")
        } else {
            basic.showString("Empate")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    Lo_que_has_elegido = 1
    basic.showLeds(`
        . # # . #
        # # # # #
        . # # # #
        . # # # #
        # # # . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (Musica_Activada == 2) {
        Musica_Activada = 1
    } else {
        Musica_Activada = 2
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    Lo_que_has_elegido = 3
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    Lo_que_has_elegido = 2
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let Lo_que_has_elegido = 0
let Musica_Activada = 0
radio.setGroup(56)
Musica_Activada = 2
basic.forever(function () {
    if (Musica_Activada == 2) {
        music.setVolume(0)
    } else {
        music.setVolume(255)
    }
})
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
})
