export default {
    ip: 'http://192.168.1.67:8001',
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    pixelArt: true,
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.RESIZE
    },
    physics: {
        default: 'arcade'
    },
    render: {
        antialias: true
    },
  };