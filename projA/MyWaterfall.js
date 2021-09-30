/**
 * MyWaterfall
*/
class MyWaterfall extends CGFobject {
	constructor(scene) {
		super(scene);

		//textures
		this.wwater = new CGFappearance(this.scene);
        this.wwater.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.wwater.setDiffuse(0.15, 0.3, 0.8, 1.0);
        this.wwater.setSpecular(0.6, 0.8, 0.9, 1.0);
        this.wwater.setShininess(10.0);
		this.wwater.loadTexture('images/wwater.jpg');
		this.wwater.setTextureWrap('REPEAT', 'REPEAT');

        this.lake = new CGFappearance(this.scene);
        this.lake.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.lake.setDiffuse(0.15, 0.3, 0.8, 1.0);
        this.lake.setSpecular(0.6, 0.8, 0.9, 1.0);
        this.lake.setShininess(10.0);
		this.lake.loadTexture('images/wlake.jpg');
		this.lake.setTextureWrap('REPEAT', 'REPEAT');

		this.wrock = new CGFappearance(this.scene);
        this.wrock.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.wrock.setDiffuse(0.5, 0.5, 0.3, 1.0);
        this.wrock.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.wrock.setShininess(10.0);
        this.wrock.loadTexture('images/wrock.png');
        this.wrock.setTextureWrap('REPEAT', 'REPEAT');

		this.cube = new MyUnitCubeQuad(this.scene, this.wrock);
		this.quad = new MyQuad(this.scene, 1);
	}

	updateBuffers(complexity){
        
    }

    display()
    {
    	//rocha
    	this.scene.pushMatrix();
        this.scene.translate(-10, 3.5, 0);
       	this.scene.scale(4, 7, 10);
       	this.cube.display();
        this.scene.popMatrix();
		
		//cascata
		this.wwater.apply();
        this.scene.pushMatrix();
        this.scene.translate(-7, 3.5, 0);
       	this.scene.scale(5, 7.9, 4);
       	this.scene.rotate(Math.PI/7.5, 0, 0, 1);
       	this.scene.rotate(Math.PI/2, 0, 1, 0);
       	this.quad.display();
        this.scene.popMatrix();
		
		//interior cascata
        this.scene.pushMatrix();
        this.scene.translate(-7, 3.5, 0);
       	this.scene.scale(5, 7.9, 4);
       	this.scene.rotate(Math.PI/7.5, 0, 0, 1);
       	this.scene.rotate((Math.PI/2)*3, 0, 1, 0);
       	this.quad.display();
        this.scene.popMatrix();
		
		this.lake.apply();
		//rio cima
        this.scene.pushMatrix();
        this.scene.translate(-10, 7.1, 0);
       	this.scene.scale(4, 7.5, 4);
       	this.scene.rotate(-Math.PI/2, 1, 0, 0);
       	this.quad.display();
        this.scene.popMatrix();

		//lago
        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, 0);
       	this.scene.scale(12, 6, 9);
       	this.scene.rotate(-Math.PI/2, 1, 0, 0);
       	this.quad.display();
        this.scene.popMatrix();
    }    
}