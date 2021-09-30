/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene, tipo) {
		super(scene);
		this.tipo=tipo;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, 0, 0,	//0
			-1, 0, 0,	//1
			0, 1, 0,	//2
			1, 0, 0,	//0
			-1, 0, 0,	//1
			0, 1, 0	//2
		];
		
		if (this.tipo)
			this.texCoords = [
				0, 0.5,
				0, 0,
				0.25, 0.25,
				0, 0.5,
				0, 0,
				0.25, 0.25
			]
		else
			this.texCoords = [
				0.75, 0.75,
				0.25, 0.75,
				0.5, 0.5,
				0.75, 0.75,
				0.25, 0.75,
				0.5, 0.5
			]

		this.normals=[
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		]
		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 1
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

