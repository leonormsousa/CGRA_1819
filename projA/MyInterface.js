/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        //Checkbox element in GUI
        this.gui.add(this.scene, 'day').name('DayTime');
        this.gui.add(this.scene, 'textures').name('Textures');
        
        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        var obj = this;

        return true;
    }
}