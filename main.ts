input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
function fire_code () {
    fire = game.createSprite(player.get(LedSpriteProperty.X), 4)
    for (let index = 0; index < 4; index++) {
        fire.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    basic.pause(100)
    fire.delete()
}
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let w4: game.LedSprite = null
let w3: game.LedSprite = null
let w2: game.LedSprite = null
let wall: game.LedSprite = null
let fire: game.LedSprite = null
let player: game.LedSprite = null
let points = 0
player = game.createSprite(2, 4)
loops.everyInterval(1000, function () {
    wall = game.createSprite(randint(0, 4), 0)
    w2 = game.createSprite(wall.get(LedSpriteProperty.X) + randint(1, 2), 0)
    w3 = game.createSprite(wall.get(LedSpriteProperty.X) - randint(1, 2), 0)
    w4 = game.createSprite(wall.get(LedSpriteProperty.X) + 2, 0)
    while (!(wall.get(LedSpriteProperty.Y) == 4)) {
        basic.pause(500)
        wall.change(LedSpriteProperty.Y, 1)
        w2.change(LedSpriteProperty.Y, 1)
        w3.change(LedSpriteProperty.Y, 1)
        w4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(500)
    wall.delete()
    w2.delete()
    w3.delete()
    w4.delete()
    points += 1
})
basic.forever(function () {
    if (player.get(LedSpriteProperty.X) == w4.get(LedSpriteProperty.X) && (player.get(LedSpriteProperty.Y) == w4.get(LedSpriteProperty.Y) && !(w4.isDeleted())) || (player.get(LedSpriteProperty.X) == wall.get(LedSpriteProperty.X) && (player.get(LedSpriteProperty.Y) == wall.get(LedSpriteProperty.Y) && !(wall.isDeleted())) || player.get(LedSpriteProperty.X) == w2.get(LedSpriteProperty.X) && (player.get(LedSpriteProperty.Y) == w2.get(LedSpriteProperty.Y) && !(w2.isDeleted())) || player.get(LedSpriteProperty.X) == w3.get(LedSpriteProperty.X) && (player.get(LedSpriteProperty.Y) == w3.get(LedSpriteProperty.Y) && !(w3.isDeleted())))) {
        game.setScore(points)
        game.gameOver()
    }
})
