let throttle = 0
let arm = 0
let roll = 0
let pitch = 0
input.onButtonPressed(Button.A, function () {
    if (throttle <= 40) {
        throttle += -5
    } else {
        throttle += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (arm) {
        arm = 0
    } else {
        arm = 1
    }
    throttle = 0
})
input.onButtonPressed(Button.B, function () {
    if (throttle <= 40) {
        throttle += 5
    } else {
        throttle += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    arm = 0
    throttle = 0
})
basic.forever(function () {
    roll = input.rotation(Rotation.Roll)
    pitch = input.rotation(Rotation.Pitch)
    basic.clearScreen()
})
