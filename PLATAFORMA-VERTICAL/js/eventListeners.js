window.addEventListener('keydown',({ key }) => {
    switch (key) {
        case 'd':
            keys.d.pressed = true
            break;
        case 'a':
            keys.a.pressed = true
            break;
        case 'w':
            player.velocity.y = -4
            break;
    }
})

window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'd':
            keys.d.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
    }
})