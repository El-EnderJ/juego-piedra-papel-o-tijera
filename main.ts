radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Lo_que_has_elegido == 1) {
            basic.showString("Empate")
        } else if (Lo_que_has_elegido == 2) {
            basic.showString("Victoria")
        } else {
            basic.showString("Derrota")
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
        . # # # .
        # # # . .
        `)
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
radio.setGroup(56)
images.createBigImage(`
    # # # . # # . # # #
    # . . . # # . # . .
    # # # . # # . # # #
    . . # . # # . . . .
    # # # . # # . . . #
    `).scrollImage(1, 200)
