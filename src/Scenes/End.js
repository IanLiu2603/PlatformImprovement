class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }

    create() {
        this.add.bitmapText(400, 300, "rocketSquare",'You Win!, press R to Restart ');
        this.rKey = this.input.keyboard.addKey('R');
    }

    // Never get here since a new scene is started in create()
    update() {
        if(Phaser.Input.Keyboard.JustDown(this.rKey)) {
            this.scene.start("platformerScene");
        }
    }
}