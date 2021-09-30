/**
 * MyTreeRow
 */
class MyTreeRowPatch extends CGFobject {
	constructor(scene) {
	super(scene);
		this.tree=new MyTree(this.scene,2, 0.5, 4, 2, this.scene.material_trunk, this.scene.material_treeTop);
		this.random_numbers=[];
		let i=0;
		for (i=0; i<6*5;i++)
			this.random_numbers.push((Math.random() * 0.3) -0.15);
	}


	updateBuffers(complexity){
        
    }

    display()
    {
		let i=0;
		for (i=0; i<6; i++)
		{
				this.scene.pushMatrix();
				this.scene.translate((i-2.5)*5+this.random_numbers[i]*3, 0, this.random_numbers[i+1]*3);
				this.scene.scale(1+this.random_numbers[i+2], 1+this.random_numbers[i+3], 1+this.random_numbers[i+4]);
				this.tree.display();
				this.scene.popMatrix();
		}
    }
}

