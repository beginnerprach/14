let องศาเซลเซียส = 0
basic.forever(function () {
    องศาเซลเซียส = input.compassHeading()
    if (340 >= องศาเซลเซียส && องศาเซลเซียส <= 20) {
        basic.showString("N")
    } else if (65 >= องศาเซลเซียส && องศาเซลเซียส <= 25) {
        basic.showString("NE")
    } else if (110 >= องศาเซลเซียส && องศาเซลเซียส <= 70) {
        basic.showString("E")
    } else if (155 <= องศาเซลเซียส && องศาเซลเซียส >= 115) {
        basic.showString("SE")
    } else if (200 <= องศาเซลเซียส && องศาเซลเซียส >= 169) {
        basic.showString("S")
    } else if (245 <= องศาเซลเซียส && องศาเซลเซียส >= 225) {
        basic.showString("SW")
    } else if (290 <= องศาเซลเซียส && องศาเซลเซียส >= 250) {
        basic.showString("W")
    } else if (335 <= องศาเซลเซียส && องศาเซลเซียส >= 295) {
        basic.showString("NW")
    }
})
