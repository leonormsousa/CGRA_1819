/**
 * MyBranch
 */
class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cylinder= new MyCylinder(this.scene, 8);
		
		this.texture=new CGFappearance(this.scene);
       	this.texture.setAmbient(0.36, 0.25, 0.25, 1.0);
        this.texture.setDiffuse(0.36, 0.25, 0.25, 1.0);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/treeBranch.jpg');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');
	}

	display(){
		this.texture.apply();
		this.scene.pushMatrix();
		this.scene.scale(0.05, 1, 0.05);
		this.cylinder.display();
		this.scene.popMatrix();
	}
}
