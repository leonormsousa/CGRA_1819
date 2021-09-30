/**
 * MyNest
*/
class MyNest extends CGFobject {
	constructor(scene) {
		super(scene);
        this.branches=[];
        this.branches[0]= new MyTreeBranch(this.scene,0,0,0,0);
	}

	updateBuffers(complexity){
    }


    display()
    {
       let i=0;
       for (i=0; i<50;i++)
       {
       		let j=0;
			for (j=0; j<Math.PI/3; j+=Math.PI/64)
			{
				this.scene.pushMatrix();
				this.scene.translate(-0.3*Math.cos(2*Math.PI*(i/40)), 0, 0.3*Math.sin(2*Math.PI*(i/40)))
				this.scene.rotate(2*Math.PI*(i/40)+j/2, 0, 1, 0)
				this.scene.rotate(-j,0,0,1);
				this.branches[0].display();
				this.scene.popMatrix();
			}
        }
        for(i=1; i<this.branches.length; i++)
        	this.branches[i].display();
    }  
}