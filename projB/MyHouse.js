/**
 * MyHouse
*/
class MyHouse extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.cube = new MyUnitCubeQuad(this.scene);
		this.prism = new MyPrism(this.scene, 6);
		this.pyramid = new MyPyramid(this.scene, 4, 4);

		this.roof = new CGFappearance(this.scene);
        this.roof.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.roof.setDiffuse(0.8, 0.4, 0.1, 1.0);
        this.roof.setSpecular(0, 0, 0, 1.0);
        this.roof.setShininess(10.0);
		this.roof.loadTexture('images/roof.jpg');
		this.roof.setTextureWrap('REPEAT', 'REPEAT');

        this.column = new CGFappearance(this.scene);
        this.column.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.column.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.column.setSpecular(0, 0, 0, 1.0);
        this.column.setShininess(10.0);
		this.column.loadTexture('images/column.jpg');
		this.column.setTextureWrap('REPEAT', 'REPEAT');

		this.wall = new CGFappearance(this.scene);
        this.wall.setAmbient(0.36, 0.25, 0.25, 1.0);
        this.wall.setDiffuse(0.36, 0.25, 0.25, 1.0);
        this.wall.setSpecular(0, 0, 0, 1.0);
        this.wall.setShininess(10.0);
		this.wall.loadTexture('images/wood.png');
		this.wall.setTextureWrap('REPEAT', 'REPEAT');
	}

	updateBuffers(complexity){
        
    }

    display()
    {
    	this.wall.apply();
    	this.scene.pushMatrix();
        this.scene.translate(0, 1.3, 0);
       	this.scene.scale(2.6, 2.6, 2.6);
       	this.cube.display();
        this.scene.popMatrix();

		this.column.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.7, 0, 1.7);
       	this.scene.scale(0.3, 2.5, 0.3);
       	this.prism.display();
        this.scene.popMatrix();
		
        this.scene.pushMatrix();
        this.scene.translate(1.7, 0, -1.7);
       	this.scene.scale(0.3, 2.5, 0.3);
       	this.prism.display();
        this.scene.popMatrix();
		
        this.scene.pushMatrix();
        this.scene.translate(-1.7, 0, -1.7);
       	this.scene.scale(0.3, 2.5, 0.3);
       	this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.7, 0, 1.7);
       	this.scene.scale(0.3, 2.5, 0.3);
       	this.prism.display();
        this.scene.popMatrix();

		this.roof.apply();
     	this.scene.pushMatrix();
     	this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.translate(0, 2.5, 0);
       	this.scene.scale(3, 3, 3);
       	this.pyramid.display();
        this.scene.popMatrix(); 
    }    
}