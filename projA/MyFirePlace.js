/**
 * MyFirePlace
*/
class MyFirePlace extends CGFobject {
	constructor(scene) {
		super(scene);
		this.fire=new MyFire(this.scene);
		this.trunk = new MyUnitCubeQuad(this.scene, this.scene.wood);

		this.fire_texture = new CGFappearance(this.scene);
        this.fire_texture.setAmbient(1.0, 0.25, 0, 1.0);
        this.fire_texture.setDiffuse(1.0, 0.25, 0, 1.0);
        this.fire_texture.setSpecular(1.0, 0.25, 0, 1.0);
        this.fire_texture.setShininess(10.0);
	}


	updateBuffers(complexity){
        
    }

    display()
    {		
		//first trunk display
    	this.scene.pushMatrix();
    	this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.scene.scale(1, 0.3, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.trunk.display();
    	this.scene.popMatrix();
		//second trunk display
    	this.scene.pushMatrix();
		this.scene.scale(1, 0.3, 0.3);
		this.scene.translate(0, 0.5, 0);
		this.trunk.display();
    	this.scene.popMatrix();
		
		//first fire display
		this.fire_texture.apply();
    	this.scene.pushMatrix();
    	this.scene.translate(0, 0.3, 0);
    	this.fire.display();
    	this.scene.popMatrix();
    	//second fire display
    	this.scene.pushMatrix();
    	this.scene.rotate(Math.PI/2, 0, 1, 0);
    	this.scene.translate(0, 0.3, 0);
    	this.fire.display();
    	this.scene.popMatrix();
    }
}

