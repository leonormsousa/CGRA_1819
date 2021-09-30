/**
 * MyCubeMap
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.scene=scene;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-50, 0, -50,			//0
			50, 0, -50,			//1
			-50, 100, -50,			//2
			-50, 0, 50,			//3
			-50, 100, 50,		//4
			50, 0, 50,		//5
			50, 100, -50,		//6
			50, 100, 50,		//7
			-50, 0, -50,			//0 -8
			50, 0, -50,	//1
			-50, 100, -50,	//2 -10
			-50, 0, 50,	//3
			-50, 100, 50,		//4 -12
			50, 0, 50,		//5
			50, 100, -50,		//6 -14
			50, 100, 50,		//7
			-50, 0, -50,	//0 -16
			50, 0, -50,	//1
			-50, 100, -50,	//2 -18
			-50, 0, 50,	//3
			-50, 100, 50,		//4 -20
			50, 0, 50,		//5
			50, 100, -50,		//6 -22
			50, 100, 50,		//7
		];

		this.normals = [
			-1, 0, 0,
			1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			0, -1, 0, //0
			0, -1, 0,
			0, 1, 0,
			0, -1, 0,
			0, 1, 0,
			0, -1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 0, -1, //0
			0, 0, -1,
			0, 0, -1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, 1

		];
		
		this.texCoords=[
			0, 2.0/3,		//0
			0.75, 2.0/3,
			0, 1.0/3,
			0.25,2.0/3,
			0.25, 1.0/3,
			0.5, 2.0/3,
			0.75, 1.0/3,
			0.5, 1.0/3,
			0.25, 1,		//8
			0.5, 1,
			0.25, 0,		//10
			0.25, 2.0/3,
			0.25, 1.0/3,	//12
			0.5, 2.0/3,
			0.5, 0,			//14
			0.5, 1.0/3,
			1, 2.0/3,		//16
			0.75, 2.0/3,
			1, 1.0/3,
			0.25, 2.0/3,
			0.25, 1.0/3,
			0.5, 2.0/3,
			0.75, 1.0/3,
			0.5, 1.0/3
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			16, 17, 18, //plano z=-0.5
			17, 22, 18,
			19, 20, 21, //plano z=0.5
			21, 20, 23,
			0, 2, 3, //plano x=-0.5
			2, 4, 3, 
			1, 5, 6, //plano x=0.5
			6, 5, 7, 
			9, 8, 11, //plano y=-0.5
			9, 11, 13,
			10, 14, 12, //plano y=0.5
			12, 14, 15
		];

		this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.material.setDiffuse(0, 0.5, 1, 1.0);
        this.material.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.material.setShininess(10.0);
		this.material.loadTexture('images/day.png');
		this.material.setTextureWrap('REPEAT', 'REPEAT');
	
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateBuffers(complexity){
        
    }
    display(){
    	this.material.apply();
    	super.display();
    }
}

