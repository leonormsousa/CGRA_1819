/**
 * MyVoxelHill
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, height) {
		super(scene);
		this.height=height;
		this.cube=new MyUnitCubeQuad(this.scene);
	}


	updateBuffers(complexity){
        
    }

    display()
    {
    	let i=0;
    	for (i=0; i<this.height; i++){ //y iterations
			let j=0;
			for (j=0; j<(this.height-i); j++){ //x iterations
				let k=0;
				for (k=0; k<(this.height-i); k++){ //z iterations
					this.scene.pushMatrix();
					this.scene.translate(j, i+0.5, k);
					this.cube.display();
					this.scene.popMatrix();
					if (j!=0){
						this.scene.pushMatrix();
						this.scene.translate(-j, i+0.5, k);
						this.cube.display();
						this.scene.popMatrix();
					}
					if (k!=0){
						this.scene.pushMatrix();
						this.scene.translate(j, i+0.5, -k);
						this.cube.display();
						this.scene.popMatrix();
					}
					if (j!=0 && k!=0){
						this.scene.pushMatrix();
						this.scene.translate(-j, i+0.5, -k);
						this.cube.display();
						this.scene.popMatrix();
					}
				}
			} 
    	}
    }
}

