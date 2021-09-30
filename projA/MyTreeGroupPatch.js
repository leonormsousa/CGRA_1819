/**
 * MyTreeGroup
 */
class MyTreeGroupPatch extends CGFobject {
	constructor(scene) {
	super(scene);
		this.tree=new MyTree(this.scene, 2, 0.5, 4, 2, this.scene.material_trunk, this.scene.material_treeTop);
		this.random_numbers=[];
		let i=0;
		for (i=0; i<9*5;i++)
			this.random_numbers.push((Math.random() * 0.3) -0.15);
	}


	updateBuffers(complexity){
        
    }

    display()
    {	
    	let i=0;
		for (i=0; i<3; i++)
		{
			let j=0;
			for (j=0; j<3; j++)
			{
				this.scene.pushMatrix();
				this.scene.translate((i-1)*5+this.random_numbers[i*j]*3, 0, (j-1)*5+this.random_numbers[i*j+1]*3);
				this.scene.scale(1+this.random_numbers[i*j+2], 1+this.random_numbers[i*j+3], 1+this.random_numbers[i*j+4]);
				this.tree.display();
				this.scene.popMatrix();
			}
		}
    }
}

