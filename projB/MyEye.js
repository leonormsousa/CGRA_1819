/**
 * MyEye
 */
class MyEye extends CGFobject {
	constructor(scene, option) {
		super(scene);
		this.cube = new MyUnitCube(this.scene);	
		this.option=option;

		this.whiteTexture=new CGFappearance(this.scene);
       	this.whiteTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.whiteTexture.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.whiteTexture.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.whiteTexture.setShininess(10.0);

        this.blackTexture=new CGFappearance(this.scene);
       	this.blackTexture.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.blackTexture.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.blackTexture.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.blackTexture.setShininess(10.0);
	}

	display(){
		this.whiteTexture.apply();
    	this.scene.pushMatrix();
    	this.scene.translate(this.option,0.02,-0.035);
    	this.scene.scale(0.01, 0.2, 0.2);
    	this.cube.display();
    	this.scene.popMatrix();

        this.blackTexture.apply();
		this.scene.pushMatrix();
    	this.scene.scale(0.005, 0.06, 0.06);
    	this.cube.display();
    	this.scene.popMatrix();
	}
}

