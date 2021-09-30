/**
 * MyFire
*/
class MyFire extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-0.2, 0, 0,	//0
			-0.2, 0, 0,	//1
			0.2, 0, 0, 	//2
			0.2, 0, 0, 	//3
			0, 1, 0,	//4
			0, 1, 0,	//5
			-0.1, 0.5, 0, //6
			-0.1, 0.5, 0, //7
			0.1, 0.7, 0,	//8
			0.1, 0.7, 0,	//9
			-0.1, 0, 0, 	//10
			-0.1, 0, 0, 	//11
			0.1, 0, 0,	//12
			0.1, 0, 0		//13
		];
		
		//Indices - front and back faces
		this.indices = [
			0, 2, 6,
			3, 1, 7,
			0, 2, 8,
			3, 1, 9,
			10, 12, 4,
			13, 11, 5
		];

		//Normals - Facing Z positive and Z negative
		this.normals = [];
		let i=0;
		for (i=0; i<7; i++)
		{
			this.normals.push(0,0,1);
			this.normals.push(0,0,-1);
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

