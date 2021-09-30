/**
 * MyFlowerGroup
 */
class MyFlowerGroup extends CGFobject {
	constructor(scene) {
	super(scene);
	let i=0;
	this.flower=[];
	for (i=0; i<16; i++)
		this.flower[i]=new MyFlower(this.scene);
	this.random_numbers=[];
	for (i=0; i<16*5;i++)
		this.random_numbers.push((Math.random() * 0.1) -0.05);
	}


	updateBuffers(complexity){
        
    }

    display()
    {	
    	let i=0;
		for (i=0; i<4; i++)
		{
			let j=0;
			for (j=0; j<4; j++)
			{
				this.scene.pushMatrix();
				this.scene.translate((i-1)*2+this.random_numbers[i*j]*3, 0, (j-1)*2+this.random_numbers[i*j+1]*3);
				this.scene.scale(1+this.random_numbers[i*j+2], 1+this.random_numbers[i*j+3], 1+this.random_numbers[i*j+4]);
				this.flower[i*4+j].display();
				this.scene.popMatrix();
			}
		}
    }
}

