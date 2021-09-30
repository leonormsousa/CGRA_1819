/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	
	constructor(scene, tipo) {
		super(scene);
		this.tipo=tipo;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0,	//2
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0	//2
		];
		
		if (this.tipo)
		{
			this.texCoords = [
				1, 0,
				0, 0,
				0.5, 0.5,
				0, 1,
				0, 0,
				0.5, 0.5
			];
		}
		else
		{
			this.texCoords = [
				1, 1,
				1, 0,
				0.5, 0.5,
				1, 1,
				1, 0,
				0.5, 0.5
			];
		}

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

