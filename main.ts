input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let tool = 0
radio.setGroup(6)
basic.forever(function () {
	
})
