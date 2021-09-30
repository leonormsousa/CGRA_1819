/**
 * MyLightningQuad
*/
class MyLightningQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        this.quad= new MyQuad(this.scene, 1);

        this.texture= new CGFappearance(this.scene);
        this.texture.setAmbient(1, 1, 1, 1.0);
        this.texture.setDiffuse(1, 1, 1, 1);
        this.texture.setSpecular(1, 1, 1, 1.0);
        this.texture.setShininess(10.0);	
	}

	updateBuffers(complexity){
    }


    display()
    {
        this.texture.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.07, 1, 1);
        this.scene.translate(0, 0.5, 0);
        this.quad.display();
        this.scene.popMatrix();
    }  
}