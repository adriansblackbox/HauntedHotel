class Floor_1 extends Phaser.Scene{

    constructor() {
        super("Floor_1");    
    }

        // Pt. 2 of transfering state to a different scene
    ////////////////////////////
    init(data){
        this.test = data.test;
    }
    ///////////////////////////
    preload(){
        this.load.image('player', './assets/Detective Doggert 001.png');

    }
    create(){
        this.createKeys();
        
        this.player = new Player(this, game.config.width/2, game.config.height/2, 'player', 0);
    }
    createKeys(){
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    update(){
        this.player.update();
        this.collisions();


        // Pt. 1 of transfering state to a different scene
        ////////////////////////////
        if(keyLEFT.isDown){
            this.scene.start('Floor_2', {test: this.test});
        }
        ////////////////////////////
    }
    collisions(){

    }
}