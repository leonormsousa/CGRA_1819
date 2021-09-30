/**
 * MyBranch
 */
class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cylinder= new MyCylinder(this.scene, 4);
		
		this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material.setDiffuse(0.43, 0.32, 0.24, 1.0);
        this.material.setSpecular(0, 0, 0, 1.0);
        this.material.setShininess(10.0);
        //this.material.loadTexture('images/trunk.jpg');
        //this.material.setTextureWrap('REPEAT', 'REPEAT');
	}

	display(){
		this.material.apply();
		this.scene.pushMatrix();
		this.scene.scale(0.3, 1.2, 0.3);
		this.cylinder.display();
		this.scene.popMatrix();
	}
}
