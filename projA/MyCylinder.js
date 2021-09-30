/**
 * MyCylinder
 */
class MyCylinder extends CGFobject {
	constructor(scene, slices) {
		super(scene);
		this.slices=slices;
		this.initBuffers();
	}
	initBuffers() {
		let i=0;
		this.vertices=[];
		this.normals=[];
		this.indices=[];
		this.texCoords = [];
		var delta = 2*Math.PI/this.slices;
		for (i=0; i<this.slices; i++)
		{
			//vértices da face de baixo
			this.vertices.push(Math.cos(delta*i),0,(-Math.sin(delta*i)));
			this.normals.push(Math.cos(delta*i),0,(-Math.sin(delta*i)));
			this.texCoords.push(i*1.0/this.slices,2);
			//vértices da face de cima
			this.vertices.push(Math.cos(delta*i),1,-Math.sin(delta*i));
			this.normals.push(Math.cos(delta*i),0,-Math.sin(delta*i));
			this.texCoords.push(i*1.0/this.slices,0);
			//definição das faces
			this.indices.push(2*i+1,2*i,2*((i+1)));
			this.indices.push(2*((i+1)),2*((i+1))+1,2*i+1);
		}

		//vertices extra (para ultima face)
		this.vertices.push(1,0,0);
		this.normals.push(1,0,0);
		this.texCoords.push(1,2);
		this.vertices.push(1,1,0);
		this.normals.push(1,1,0);
		this.texCoords.push(1,0);

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

