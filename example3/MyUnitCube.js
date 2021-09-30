/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			-0.5, 0.5, -0.5,	//2
			-0.5, -0.5, 0.5,	//3
			-0.5, 0.5, 0.5,		//4
			0.5, -0.5, 0.5,		//5
			0.5, 0.5, -0.5,		//6
			0.5, 0.5, 0.5,		//7
			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			-0.5, 0.5, -0.5,	//2
			-0.5, -0.5, 0.5,	//3
			-0.5, 0.5, 0.5,		//4
			0.5, -0.5, 0.5,		//5
			0.5, 0.5, -0.5,		//6
			0.5, 0.5, 0.5,		//7
			-0.5, -0.5, -0.5,	//0
			0.5, -0.5, -0.5,	//1
			-0.5, 0.5, -0.5,	//2
			-0.5, -0.5, 0.5,	//3
			-0.5, 0.5, 0.5,		//4
			0.5, -0.5, 0.5,		//5
			0.5, 0.5, -0.5,		//6
			0.5, 0.5, 0.5,		//7
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

		//Counter-clockwise reference of vertices
		this.indices = [
			16, 17, 18, //plano z=-0.5
			16, 18, 17,
			17, 18, 22,
			17, 22, 18,
			19, 20, 21, //plano z=0.5
			19, 21, 20,
			21, 20, 23,
			21, 23, 20,
			0, 2, 3, //plano x=-0.5
			0, 3, 2,
			2, 3, 4,
			2, 4, 3, 
			1, 5, 6, //plano x=0.5
			1, 6, 5,
			6, 5, 7, 
			6, 7, 5,
			9, 8, 11, //plano y=-0.5
			9, 11, 8,
			9, 11, 13,
			9, 13, 11,
			10, 12, 14, //plano x=0.5
			10, 14, 12,
			12, 14, 15,
			12, 15, 14
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateBuffers(complexity){
        
    }
}
