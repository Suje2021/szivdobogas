basic.showIcon(IconNames.Heart)
basic.forever(function () {
    for (let index = 0; index <= 255; index++) {
        led.setBrightness(index)
        basic.pause(10)
    }
    for (let index = 0; index <= 255; index++) {
        led.setBrightness(255 - index)
        basic.pause(10)
    }
})
