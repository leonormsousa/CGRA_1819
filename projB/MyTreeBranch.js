/**
 * MyTreeBranch
*/
class MyTreeBranch extends CGFobject {
	constructor(scene, position_x, position_y, position_z, inclination) {
		super(scene);
        
        this.position_x=position_x;
        this.position_y=position_y;
        this.position_z=position_z;
        this.inclination=inclination;
        this.branch = new MyBranch(this.scene);
	}

	updateBuffers(complexity){
        
    }


    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(this.position_x, this.position_y+0.05, this.position_z);
        this.scene.rotate(this.inclination,0,1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.branch.display();
        this.scene.popMatrix();
    }

    getXposition(){
		return this.position_x;
     }

     getZposition(){
     	return this.position_z;
     }  
}