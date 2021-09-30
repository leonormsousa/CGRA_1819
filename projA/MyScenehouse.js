/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        //Textures
        this.material_trunk = new CGFappearance(this);
        this.material_trunk.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_trunk.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.material_trunk.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_trunk.setShininess(10.0);
        this.material_trunk.loadTexture('trunk.jpg');
        this.material_trunk.setTextureWrap('REPEAT', 'REPEAT');

        this.material_treeTop = new CGFappearance(this);
        this.material_treeTop.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_treeTop.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.material_treeTop.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.material_treeTop.setShininess(10.0);
        this.material_treeTop.loadTexture('leaves.jpg');
        this.material_treeTop.setTextureWrap('REPEAT', 'REPEAT');

        this.wood = new CGFappearance(this);
        this.wood.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.wood.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.wood.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.wood.setShininess(10.0);
        this.wood.loadTexture('wood.png');
        this.wood.setTextureWrap('REPEAT', 'REPEAT');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tree = new MyTree(this, 3, 1, 4, 2, this.material_trunk, this.material_treeTop);
        this.treeGroup=new MyTreeGroupPatch(this);//Objects connected to MyInterface
        this.treeRow = new MyTreeRowPatch(this);
        this.voxelHill= new MyVoxelHill(this, 3);
        this.house = new MyHouse(this, this.wood);
        //this.enableTextures = true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        /*if(this.enableTextures)
            this...*/

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        //this.tree.display();
        //this.treeGroup.display();
        //this.treeRow.display();
        //this.voxelHill.display();
        this.house.display();
        // ---- END Primitive drawing section
    }
}