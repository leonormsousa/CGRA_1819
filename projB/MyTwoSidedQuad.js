/**
 * MyTwoSidedQuad
 */
class MyTwoSidedQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0,	//0
			0.5, -0.5, 0,	//1
			-0.5, 0.5, 0,	//2
			0.5, 0.5, 0		//3
			-0.5, -0.5, 0,	//4
			0.5, -0.5, 0,	//5
			-0.5, 0.5, 0,	//6
			0.5, 0.5, 0		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			4, 6, 5, //0 2 1
			7, 5, 6 // 3 1 2
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];
		
		/*
		
		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0,
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]*/
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

