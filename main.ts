namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.vx = 0 - otherSprite.vx
    if (sprite == player1) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.right = sprite.left
        info.player2.changeScoreBy(1)
    }
})
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    ball.setBounceOnWall(true)
    ball.setVelocity(80, 80)
}
function Walls () {
    player1 = sprites.create(img`
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(player1, 0, 100)
    player1.x = 0
    player1.setStayInScreen(true)
    info.setScore(0)
    player2 = sprites.create(img`
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(player2, 0, 100)
    player2.x = scene.screenWidth()
    player1.setStayInScreen(true)
    info.player2.setScore(0)
}
let player2: Sprite = null
let ball: Sprite = null
let player1: Sprite = null
create_ball()
Walls()
