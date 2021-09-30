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
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //plano z=-0.5
			0, 2, 1,
			1, 2, 6,
			1, 6, 2,
			3, 4, 5, //plano z=0.5
			3, 5, 4,
			5, 4, 7,
			5, 7, 4,
			0, 2, 3, //plano x=-0.5
			0, 3, 2,
			2, 3, 4,
			2, 4, 3, 
			1, 5, 6, //plano x=0.5
			1, 6, 5,
			6, 5, 7, 
			6, 7, 5,
			1, 0, 3, //plano y=-0.5
			1, 3, 0,
			1, 3, 5,
			1, 5, 3,
			2, 4, 6, //plano x=0.5
			2, 6, 4,
			4, 6, 7,
			4, 7, 6
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

