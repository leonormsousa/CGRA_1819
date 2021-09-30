/**
 * MyTree
 */
class MyTree extends CGFobject {
	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture) {
		super(scene);
		this.trunkHeight=trunkHeight;
		this.trunkRadius=trunkRadius
		this.treeTopHeight=treeTopHeight;
		this.treeTopRadius=treeTopRadius;
		this.trunkTexture=trunkTexture;
		this.treeTopTexture=treeTopTexture;
		this.cone=new MyCone(this.scene, 15);
		this.trunk=new MyCylinder(this.scene, 15);
	}


	updateBuffers(complexity){
        
    }

    display()
    {
    	this.trunkTexture.apply();
		this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
       	this.trunk.display();
        this.scene.popMatrix();

        this.treeTopTexture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,this.trunkHeight,0);
       	this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
       	this.cone.display();
        this.scene.popMatrix();
    }
}

