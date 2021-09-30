/**
 * MyIcosahedron
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyIcosahedron extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
	    var b=0.447213595499958;
	    var a=0.8944271909999159;
	    console.log(b);
		this.vertices = [
			0, 1, 0,	//0
			a, b, 0,	//1
			a*Math.cos(2*Math.PI/5), b, a*Math.sin(2*Math.PI/5), 	//2
			a*Math.cos(4*Math.PI/5), b, a*Math.sin(4*Math.PI/5),	//3
			a*Math.cos(6*Math.PI/5), b, a*Math.sin(6*Math.PI/5), 	//4
            a*Math.cos(8*Math.PI/5), b, a*Math.sin(8*Math.PI/5), 	//5
            -a, -b, 0,	//6
			-a*Math.cos(-2*Math.PI/5), -b, -a*Math.sin(2*Math.PI/5), 	//2
			-a*Math.cos(-4*Math.PI/5), -b, -a*Math.sin(4*Math.PI/5),	//3
			-a*Math.cos(-6*Math.PI/5), -b, -a*Math.sin(6*Math.PI/5), 	//4
            -a*Math.cos(-8*Math.PI/5), -b, -a*Math.sin(8*Math.PI/5), 	//5
            0, -1, 0, // 11
            0, 1, 0,	//0
            0, -1, 0    //1
		 ];
		//Counter-clockwise reference of vertices
		this.indices = [
		    0, 2, 1,
			0, 3, 2,
			0, 4, 3,
			0, 5, 4,
			0, 1, 5,
			8, 11, 7,
			7, 11, 6,
			6, 11, 10,
			10, 11, 9,
			9, 11, 8,
			8, 7, 5,
			5, 7, 4,
			4, 7, 6,
			4, 6, 3,
			3, 6, 10,
			3, 10, 2,
			10, 9, 2,
		    2, 9, 1,
			1, 8, 5,
			9, 8, 1

		];
		
		this.normals = [
		0, 1, 0,	//0
			a, b, 0,	//1
			a*Math.cos(2*Math.PI/5), b, a*Math.sin(2*Math.PI/5), 	//2
			a*Math.cos(4*Math.PI/5), b, a*Math.sin(4*Math.PI/5),	//3
			a*Math.cos(6*Math.PI/5), b, a*Math.sin(6*Math.PI/5), 	//4
            a*Math.cos(8*Math.PI/5), b, a*Math.sin(8*Math.PI/5), 	//5
            -a, -b, 0,	//6
			-a*Math.cos(-2*Math.PI/5), -b, -a*Math.sin(2*Math.PI/5), 	//2
			-a*Math.cos(-4*Math.PI/5), -b, -a*Math.sin(4*Math.PI/5),	//3
			-a*Math.cos(-6*Math.PI/5), -b, -a*Math.sin(6*Math.PI/5), 	//4
            -a*Math.cos(-8*Math.PI/5), -b, -a*Math.sin(8*Math.PI/5), 	//5
            0, -1, 0,    //11
            a, b, 0,	//1
            0, -1, 0    //11
		]

		this.texCoords = [
			0.5, 0.5,
			0, 0.5,
			0.3, 0.3,
			0.6, 0.3,
			0.6, 0.6,
			0.3, 0.6,
			1, 0.5,
			0, 0.5,
			0.3, 0.3,
			0.6, 0.3,
			0.6, 0.6,
			0.3, 0.6,
			0.5, 0.5,
			0.5, 0.5,
            0.5, 0.5,
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

