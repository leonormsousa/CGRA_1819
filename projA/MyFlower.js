/**
 * MyFlower
 */
class MyFlower extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cone=new MyCone(this.scene, 8);
		this.trunk=new MyCylinder(this.scene, 15);
		this.leave= new MyQuad(this.scene, 1);

		//Textures
		this.greenTexture= new CGFappearance(this.scene);
        this.greenTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.greenTexture.setDiffuse(0.2, 0.44, 0.28, 1.0);
        this.greenTexture.setSpecular(0.1, 0.22, 0.14, 1.0);
        this.greenTexture.setShininess(10.0);

        this.yellowTexture= new CGFappearance(this.scene);
        this.yellowTexture.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.yellowTexture.setDiffuse(1.0, 1.0, 0.0, 1.0);
        this.yellowTexture.setSpecular(0.5, 0.5, 0, 1.0);
        this.yellowTexture.setShininess(10.0);

        this.petalTexture= new CGFappearance(this.scene);
        this.petalTexture.setAmbient(0.4, 0.2, 0.2, 1.0);
        this.petalTexture.setDiffuse(0.80+(Math.random() * 0.2), 0.2+(Math.random() * 0.2), 0.2 + (Math.random() * 0.2), 1.0);
        this.petalTexture.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.petalTexture.setShininess(10.0);
	}


	updateBuffers(complexity){
        
    }

    display()
    {
    	this.greenTexture.apply();
		this.scene.pushMatrix();
        this.scene.scale(0.05, 1.0, 0.05);
       	this.trunk.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.15, 0.6, 0.1);
        this.scene.scale(0.4, 0.2, 1);
        this.scene.rotate(Math.PI/15, 0,0,1);
        this.leave.display();
        this.scene.popMatrix();

        this.yellowTexture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,1.0,0);
       	this.scene.scale(0.2, 0.1, 0.2);
       	this.cone.display();
        this.scene.popMatrix();

        this.petalTexture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.3,1.0,0);
       	this.scene.scale(0.2, 0.1, 0.2);
       	this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3,1.0,0);
       	this.scene.scale(0.2, 0.1, 0.2);
       	this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1.0,0.3);
       	this.scene.scale(0.2, 0.1, 0.2);
       	this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1.0,-0.3);
       	this.scene.scale(0.2, 0.1, 0.2);
       	this.cone.display();
        this.scene.popMatrix();
    }
}

