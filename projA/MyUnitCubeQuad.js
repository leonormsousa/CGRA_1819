/**
 * MyUnitCubeQuad
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, texture) {
		super(scene);

		this.scene=scene;
		this.quad = new MyQuad(this.scene, 1); 

		this.material_side = new CGFappearance(this.scene);
        this.material_side.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_side.setDiffuse(0.43, 0.32, 0.24, 1.0);
        this.material_side.setSpecular(0, 0, 0, 1.0);
        this.material_side.setShininess(10.0);
        this.material_side.loadTexture('images/mineSide.png');
        this.material_side.setTextureWrap('REPEAT', 'REPEAT');

        this.material_top = new CGFappearance(this.scene);
        this.material_top.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_top.setDiffuse(0.2, 0.44, 0.28, 1.0);
        this.material_top.setSpecular(0.1, 0.22, 0.14, 1.0);
        this.material_top.setShininess(10.0);
        this.material_top.loadTexture('images/mineTop.png');
        this.material_top.setTextureWrap('REPEAT', 'REPEAT');

        this.material_bottom = new CGFappearance(this.scene);
        this.material_bottom.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_bottom.setDiffuse(0.43, 0.32, 0.24, 1.0);
        this.material_bottom.setSpecular(0, 0, 0, 1.0);
        this.material_bottom.setShininess(10.0);
        this.material_bottom.loadTexture('images/mineBottom.png');
        this.material_bottom.setTextureWrap('REPEAT', 'REPEAT');

		if (texture != undefined)
		{
			this.material_side=texture;
			this.material_top=texture;
			this.material_bottom=texture;
		}

	}


	updateBuffers(complexity){
        
    }

    display()
    {

		this.material_side.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, 0, 0.5)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, 0, -0.5)
		this.scene.rotate(Math.PI , 0, 1, 0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.5 , 0, 0)
		this.scene.rotate(-Math.PI/2, 0, 1, 0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.5, 0, 0)
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.quad.display();
		this.scene.popMatrix();

		this.material_bottom.apply();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.5, 0)
		this.scene.rotate(Math.PI/2, 1, 0 , 0);
		this.quad.display();
		this.scene.popMatrix();

		this.material_top.apply();

		this.scene.pushMatrix();
		this.scene.translate(0, 0.5, 0)
		this.scene.rotate(-Math.PI/2, 1, 0, 0);
		this.quad.display();
		this.scene.popMatrix();
    }
}

