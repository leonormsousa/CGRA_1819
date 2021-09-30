/**
 * MyLeaf
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
		super(scene);
		this.triangle=new MyTriangle(this.scene);

		this.greenTexture= new CGFappearance(this.scene);
        this.greenTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.greenTexture.setDiffuse(0.2, 0.44, 0.28, 1.0);
        this.greenTexture.setSpecular(0.1, 0.22, 0.14, 1.0);
        this.greenTexture.setShininess(10.0);	
	}

	display(){
		this.greenTexture.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, -1.8, 0);
		this.scene.scale(0.5, 1, 1);
		this.scene.rotate(Math.PI/4, 0, 0, 1);
		this.scene.translate(1, 1, 0);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, 2.43, 0);
		this.scene.scale(0.5, 1, 1);
		this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
		this.scene.translate(1, 1, 0);
		this.triangle.display();
		this.scene.popMatrix();
	}
}

