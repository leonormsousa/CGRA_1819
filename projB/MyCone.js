/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            //vertices de baixo
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            this.texCoords.push(i*1.0/this.slices, 1);
            //vertice de cima
            this.vertices.push(0,1,0);
            this.normals.push(0,1,0);
            this.texCoords.push(i*1.0/this.slices, 0);
            //definiçao das faces
            this.indices.push(2*i,2*(i+1), 2*i+1);
            ang+=alphaAng;
        }
        
        //vertices extra (para a ultima face)
        this.vertices.push(1,0,0);
		this.normals.push(1,0,0);
		this.texCoords.push(1,1);
		this.vertices.push(0,1,0);
		this.normals.push(0,1,0);
		this.texCoords.push(1,0);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


