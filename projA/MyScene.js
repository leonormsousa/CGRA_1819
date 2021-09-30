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
        this.material_trunk.setDiffuse(0.43, 0.32, 0.24, 1.0);
        this.material_trunk.setSpecular(0, 0, 0, 1.0);
        this.material_trunk.setShininess(10.0);
        this.material_trunk.loadTexture('images/trunk.jpg');
        this.material_trunk.setTextureWrap('REPEAT', 'REPEAT');

        this.material_treeTop = new CGFappearance(this);
        this.material_treeTop.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_treeTop.setDiffuse(0.2, 0.44, 0.28, 1.0);
        this.material_treeTop.setSpecular(0.1, 0.22, 0.14, 1.0);
        this.material_treeTop.setShininess(10.0);
        this.material_treeTop.loadTexture('images/leaves2.jpg');
        this.material_treeTop.setTextureWrap('REPEAT', 'REPEAT');

        this.material_grass = new CGFappearance(this);
        this.material_grass.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.material_grass.setDiffuse(0.22, 0.5, 0, 1.0);
        this.material_grass.setSpecular(0.1, 0.2, 0, 1.0);
        this.material_grass.setShininess(10.0);
        this.material_grass.loadTexture('images/grass.jpg');
        this.material_grass.setTextureWrap('REPEAT', 'REPEAT');

        this.wood = new CGFappearance(this);
        this.wood.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.wood.setDiffuse(0.43, 0.32, 0.24, 1.0);
        this.wood.setSpecular(0, 0, 0, 1.0);
        this.wood.setShininess(10.0);
        this.wood.loadTexture('images/wood.png');
        this.wood.setTextureWrap('REPEAT', 'REPEAT');

        //-------Objects connected to MyInterface
        this.day=true;
        this.textures=true;
        this.scaleFactor = 1;

        //Initialize scene objects
        this.treeGroup1=new MyTreeGroupPatch(this);
        this.treeGroup2=new MyTreeGroupPatch(this);
        this.treeRow1 = new MyTreeRowPatch(this);
        this.treeRow2 = new MyTreeRowPatch(this);

        this.voxelHill1= new MyVoxelHill(this, 5);
        this.voxelHill2= new MyVoxelHill(this, 10);
        
        this.house = new MyHouse(this);
        this.firePlace = new MyFirePlace(this);

        this.cubeMapDay=new MyCubeMap(this, true);
        this.cubeMapNight=new MyCubeMap(this, false);

        this.ground = new MyQuad(this, 10);

        this.waterfall = new MyWaterfall(this);
        this.flowerGroup = new MyFlowerGroup(this);
        this.flowerGroupp= new MyFlowerGroup(this);
        this.flowerGroupo= new MyFlowerGroup(this);
    }
    initLights() {
        this.setGlobalAmbientLight(0.6, 0.6, 0.6, 1);
        //Sun light
        this.lights[0].setPosition(-40, 100, 50, 1);
        this.lights[0].setDiffuse(0.2, 0.15, 0.15, 1.0);
        this.lights[0].setSpecular(0.1, 0.05, 0.05, 1.0);
        this.lights[0].setConstantAttenuation(0.1);
        this.lights[0].enable();
        this.lights[0].update();
        //Moon light
        this.lights[1].setPosition(-49, 90, 49, 1);
        this.lights[1].setDiffuse(0.3, 0.35, 0.5, 1.0);
        this.lights[1].setConstantAttenuation(0.5);
        this.lights[1].disable();
        this.lights[1].update();
        //Fire light
        this.lights[2].setPosition(0, 2, 10, 1); //posiçao efetiva da fogueira
        this.lights[2].setDiffuse(1.0, 0.5, 0.3, 1.0);
        this.lights[2].setConstantAttenuation(0.8);
        this.lights[2].setLinearAttenuation(0.8);
        this.lights[2].disable();
        this.lights[2].update();

    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(150, 90, 150), vec3.fromValues(0, 20, 0));
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

        //Apply default appearance
        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);
        
        this.enableTextures(this.textures);
        // ---- BEGIN Primitive drawing section

        //cubeMap display and lights decision
        if (this.day)
        {
            this.cubeMapDay.display();
            this.lights[0].enable();
            this.lights[0].update();
            this.lights[1].disable();
            this.lights[1].update();
            this.lights[2].disable();
            this.lights[2].update();
        }
        else
        {
            this.cubeMapNight.display();
            this.lights[1].enable();
            this.lights[1].update();
            this.lights[2].enable();
            this.lights[2].update();
            this.lights[0].disable();
            this.lights[0].update();

            //fireplace display
            this.pushMatrix();
            this.translate(0, 0, 10);
            this.firePlace.display();
            this.popMatrix();
        }

        //field/ground display
        this.material_grass.apply();
        this.pushMatrix();
        this.translate(0,0.1,0);
        this.scale(100, 100, 100);
        this.rotate(-Math.PI/2,1, 0, 0);
        this.ground.display();
        this.popMatrix();
        
        //Tree Groups display - 2 groups needed to have variation in sizes (random)
        this.pushMatrix();
        this.translate(35, 0, 35);
        this.treeGroup1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-35, 0, -35);
        this.treeGroup2.display();
        this.popMatrix();

        //Tree Rows display  - 2 rows needed to have variation in sizes (random)
        this.pushMatrix();
        this.translate(0, 0, -40);
        this.treeRow1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(40, 0, 0);
        this.rotate(Math.PI/2, 0, 1, 0);
        this.treeRow1.display();
        this.popMatrix();

        //Voxel Hills display
        this.pushMatrix();
        this.translate(35, 0, -35);
        this.voxelHill1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-35, 0, 35);
        this.voxelHill2.display();
        this.popMatrix();

        //house display
        this.house.display();

        //waterfall display
        this.pushMatrix();
        this.translate(-38, 0, 0);
        this.waterfall.display();
        this.popMatrix();

        //flower display - 3 groups needed to have variation in sizes and colors(random)
        this.pushMatrix();
        this.translate(-10,0,35);
        this.flowerGroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(10,0,35);
        this.flowerGroupp.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-0.5,0,36);
        this.rotate(Math.PI/4, 0, 1, 0);
        this.flowerGroupo.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}