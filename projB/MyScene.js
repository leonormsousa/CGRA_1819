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
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.bird= new MyBird(this, 0, 0, 0, 3, 0);
        this.treeBranches=[];
        let i=0
        for (i=0; i<5; i++){
            var rand=Math.random()*2*Math.PI;
            this.treeBranches[i]=new MyTreeBranch(this, Math.sin(rand)*8, 0, Math.cos(rand)*8, Math.random()*Math.PI-Math.PI/2);
        }
        this.nest = new MyNest(this);
        this.nest_x=0;
        this.nest_z=5;

        this.treeSet=new MyTreeSet(this, 3);
        //this.treeSet3=new MyTreeSet(this, 5);
        this.lightning=new MyLightning(this);
        this.lightning.doGenerate();

        this.house = new MyHouse(this);
        this.cubemap = new MyCubeMap(this);
        this.terrain= new MyTerrain(this);
        this.height_plane=2.15;

        this.state=0;
        //Objects connected to MyInterface
        this.scaleFactor=1.0;
        this.scaleFactorBird = 1.0;
        this.velocityFactor=1;
        this.textures=true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys() {
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            this.bird.accelerate(1.5);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            this.bird.accelerate(0.5);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            this.bird.turn(Math.PI/20);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            this.bird.turn(-Math.PI/20);
        }
        if (this.gui.isKeyPressed("KeyL")) {
            var d = new Date();
            this.lightning.startAnimation(d.getTime());
        }
        if (this.gui.isKeyPressed("KeyR")) {
            this.bird.setPositions(0, 3, 0, 0, 0);
        }
        if (this.gui.isKeyPressed("KeyP") && this.state==0) {
            this.state=1;
        }
        if (this.gui.isKeyPressed("KeyP") && this.state==4) {
            this.state=5;
        }
    }

    checkBranches()
    {
        let i=0;
        for (i=0; i<this.treeBranches.length; i++)
        {
            if (Math.abs(this.treeBranches[i].getXposition()-this.bird.getXposition()) <1 && 
                Math.abs(this.treeBranches[i].getZposition()-this.bird.getZposition()) <1)
                {
                    this.bird.branch=this.treeBranches[i];
                    this.bird.branch.position_x=0;
                    this.bird.branch.position_y=0;
                    this.bird.branch.position_z=0;
                    this.bird.branch.inclination=0;
                    this.treeBranches.splice(i, 1);
                    this.state=3;
                    return;
                }
        }
        this.state=2;  
    }

    checkNest()
    {
        if (Math.abs(this.nest_x-this.bird.getXposition()) <1 && 
            Math.abs(this.nest_z-this.bird.getZposition()) <1)
            {
                this.bird.branch.inclination=Math.random()*Math.PI;
                this.nest.branches.push(this.bird.branch);
                this.bird.branch=undefined;
                this.state=7;
            }
        else
            this.state=6;  
    }

    update(t){
        if (this.oldtime == undefined)
            this.oldtime=t;
        this.delta=t-this.oldtime;
        this.oldtime=t;
        this.lightning.update(t);
        this.bird.updatePosition(this.delta, t);
        this.bird.updateVelocityFactor(this.velocityFactor);
        this.checkKeys();
        switch (this.state){
            //without branch -> just flying
            case 0:
                break;
            //going down ->with no branch
            case 1:
                this.bird.goDown(this.delta);
                if (this.bird.getYposition()<=0)
                    this.checkBranches();
                break;
            //going up -> without branch
            case 2:
                this.bird.goUp(this.delta);
                if (this.bird.getYposition()>=3)
                    this.state=0;
                break;
            //going up -> with branch
            case 3:
                this.bird.goUp(this.delta);
                if (this.bird.getYposition()>=3)
                    this.state=4;
                break;
            //with branch -> just flying
            case 4:
                break;
            //going down -> with branch
            case 5:
                this.bird.goDown(this.delta);
                if (this.bird.getYposition()<=0)
                    this.checkNest();
                break;
            //going down -> with branch
            case 6:
                this.bird.goUp(this.delta);
                if (this.bird.getYposition()>=3)
                    this.state=3;
                break;
            //going down -> after leaving branch in nest
            case 7:
                this.bird.goUp(this.delta);
                if (this.bird.getYposition()>=3)
                    this.state=0;
                break;
        }
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

        //Apply default appearance
        this.setDefaultAppearance();
        
        this.enableTextures(true);
        // ---- BEGIN Primitive drawing section
        
        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        //Terrain
        this.pushMatrix();
        this.terrain.display();
        this.popMatrix();

        this.enableTextures(this.textures);
        
        //cubemap
        this.pushMatrix();
        this.scale(0.6, 0.6, 0.6);
        this.cubemap.display();
        this.popMatrix();

        //lightning
        this.pushMatrix();
        this.translate(0, 60, 0);
        this.scale(7, 7, 7);
        this.rotate(Math.PI, 0, 0, 1);
        this.lightning.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, this.height_plane, 0);

        //bird
        this.pushMatrix();
        this.scale(this.scaleFactorBird,this.scaleFactorBird,this.scaleFactorBird);
        this.bird.display();
        this.popMatrix();

        //branches
        let i=0;
        for (i=0; i<this.treeBranches.length; i++)
            this.treeBranches[i].display();

        //nest
        this.pushMatrix();
        this.translate(this.nest_x, 0, this.nest_z);
        this.nest.display();
        this.popMatrix();
            
        //Tree set 1
        this.pushMatrix();
        this.translate(0, 0, -14);
        this.treeSet.display();
        this.popMatrix();

        //Tree set 2
        this.pushMatrix();
        this.translate(15, 0, 0);
        this.rotate(-Math.PI/2, 0, 1, 0);
        this.treeSet.display();
        this.popMatrix();

        //Tree set 3
       /* this.pushMatrix();
        this.translate(-10, 0, -5);
        this.rotate(-Math.PI/2, 0, 1, 0);
        this.treeSet3.display();
        this.popMatrix();*/

        //house
        this.pushMatrix();
        this.translate(-5, 0 ,-5);
        this.scale(0.5, 0.5, 0.5);
        this.house.display();
        this.popMatrix();

        this.popMatrix();
        this.popMatrix();
        // ---- END Primitive drawing section
    }

}