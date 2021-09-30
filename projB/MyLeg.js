/**
 * MyLeg
 */
class MyLeg extends CGFobject {
	constructor(scene) {
		super(scene);
		this.leg= new MyCylinder(this.scene, 8);	
	}

	display(){
		this.scene.pushMatrix();
		this.scene.translate(0, -0.60, 0);
		this.scene.scale(0.02, 0.5, 0.02);
		this.leg.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.60, 0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.02, 0.25, 0.02);
		this.leg.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.60, 0);
		this.scene.rotate(0.5,0,1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.02, 0.25, 0.02);
		this.leg.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.60, 0);
		this.scene.rotate(-0.5,0,1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.02, 0.25, 0.02);
		this.leg.display();
		this.scene.popMatrix();
	}
}

