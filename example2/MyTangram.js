/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.scene = scene;
		//this.initBuffers();
		this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);

	}

	display(){
		var m=[ 1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                -1, 1, 0 , 1];
        if (this.scene.displayDiamond)
        {
            this.scene.pushMatrix();
            this.scene.multMatrix(m);
            this.diamond.display();
            this.scene.popMatrix();
        }
        if (this.scene.displayTriangle)
        {
            this.scene.pushMatrix();
            this.scene.translate(1,0,0);
            this.scene.rotate(Math.PI,0,0,1);
            this.triangle.display();
            this.scene.popMatrix();
        }
        if (this.scene.displayParallelogram)
        {
            this.scene.pushMatrix();
            this.scene.translate(-1,2,0);
            this.scene.scale(1,-1,1);
            this.parallelogram.display();
            this.scene.popMatrix();
        }
        if (this.scene.displayTriangleBig)
        {
            this.scene.pushMatrix();
            this.scene.translate(0,-1,0);
            this.triangleBig.display();
            this.scene.popMatrix();
        }
        if (this.scene.displayTriangleSmall)
        {
            this.scene.pushMatrix();
            this.scene.translate(-2,0,0);
            this.scene.rotate(-Math.PI/2, 0, 0, 1)
            this.triangleSmall.display();
            this.scene.popMatrix();
        }
        if (this.scene.displayTriangleBig2)
        {
            this.scene.pushMatrix();
            this.scene.translate(0,-1,0);
            this.scene.rotate(Math.PI, 0, 0, 1);
            this.triangleBig2.display();
            this.scene.popMatrix();
        }
        if (this.scene.displayTriangleSmall2)
        {
            this.scene.pushMatrix();
            this.scene.translate(0,2,0);
            this.scene.rotate(-Math.PI/4, 0, 0, 1);
            this.scene.translate(-1,0,0);
            this.triangleSmall2.display();
            this.scene.popMatrix();
        }
	}
}

