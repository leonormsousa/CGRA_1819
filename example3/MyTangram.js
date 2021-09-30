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

		//Init Materials
		// Diamond Green
        this.material_diamond = new CGFappearance(scene);
        this.material_diamond.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_diamond.setDiffuse(0, 0.8, 0, 1.0);
        this.material_diamond.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_diamond.setShininess(10.0);

        // Triangle Pink
        this.material_pink = new CGFappearance(scene);
        this.material_pink.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_pink.setDiffuse(1, 0.5, 0.6, 1.0);
        this.material_pink.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_pink.setShininess(10.0);

        // Parallelogram Yellow
        this.material_yellow = new CGFappearance(scene);
        this.material_yellow.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_yellow.setDiffuse(1, 1, 0, 1.0);
        this.material_yellow.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_yellow.setShininess(10.0);

        // Triangle Blue
        this.material_blue = new CGFappearance(scene);
        this.material_blue.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_blue.setDiffuse(0, 0.6, 1.0, 1.0);
        this.material_blue.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_blue.setShininess(10.0);

        // Triangle Orange
        this.material_orange = new CGFappearance(scene);
        this.material_orange.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_orange.setDiffuse(1, 0.5, 0, 1.0);
        this.material_orange.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_orange.setShininess(10.0);

        // Triangle Red
        this.material_red = new CGFappearance(scene);
        this.material_red.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_red.setDiffuse(1, 0, 0, 1.0);
        this.material_red.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_red.setShininess(10.0);

        // Triangle Purple
        this.material_purple = new CGFappearance(scene);
        this.material_purple.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_purple.setDiffuse(0.8, 0, 1, 1.0);
        this.material_purple.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_purple.setShininess(10.0);

	}

	display(){
		var m=[ 1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                -1, 1, 0 , 1];
       // if (this.scene.displayDiamond)
       // {
            this.scene.pushMatrix();
            this.scene.multMatrix(m);
            this.scene.customMaterial.apply();
            this.diamond.display();
            this.scene.popMatrix();
      //  }
        //if (this.scene.displayTriangle)
        //{
            this.scene.pushMatrix();
            this.scene.translate(1,0,0);
            this.scene.rotate(Math.PI,0,0,1);
            this.material_pink.apply();
            this.triangle.display();
            this.scene.popMatrix();
 //       }
   //     if (this.scene.displayParallelogram)
     //   {
            this.scene.pushMatrix();
            this.scene.translate(-1,2,0);
            this.scene.scale(1,-1,1);
            this.material_yellow.apply();
            this.parallelogram.display();
            this.scene.popMatrix();
 //       }
   //     if (this.scene.displayTriangleBig)
     //   {
            this.scene.pushMatrix();
            this.scene.translate(0,-1,0);
            this.material_blue.apply();
            this.triangleBig.display();
            this.scene.popMatrix();
  //      }
    //    if (this.scene.displayTriangleSmall)
      //  {
            this.scene.pushMatrix();
            this.scene.translate(-2,0,0);
            this.scene.rotate(-Math.PI/2, 0, 0, 1)
            this.material_red.apply();
            this.triangleSmall.display();
            this.scene.popMatrix();
 //       }
   //     if (this.scene.displayTriangleBig2)
     //   {
            this.scene.pushMatrix();
            this.scene.translate(0,-1,0);
            this.scene.rotate(Math.PI, 0, 0, 1);
            this.material_orange.apply();
            this.triangleBig2.display();
            this.scene.popMatrix();
 //       }
   //     if (this.scene.displayTriangleSmall2)
     //   {
            this.scene.pushMatrix();
            this.scene.translate(0,2,0);
            this.scene.rotate(-Math.PI/4, 0, 0, 1);
            this.scene.translate(-1,0,0);
            this.material_purple.apply();
            this.triangleSmall2.display();
            this.scene.popMatrix();
       // }
       this.scene.materials[this.scene.selectedMaterial].apply();
	}
	updateBuffers(complexity){
        
    }
    enableNormalViz(){
		this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleBig2.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleSmall2.enableNormalViz();
    }
    disableNormalViz(){
    	this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.triangleBig2.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleSmall2.disableNormalViz();
    }
}

