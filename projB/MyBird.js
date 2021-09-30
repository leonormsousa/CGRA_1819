/**
 * MyBird
*/
class MyBird extends CGFobject {
	constructor(scene, orientation=0, velocity=0, x_position=0, y_position=0, z_position=0) {
		super(scene);

		this.setPositions(x_position,y_position, z_position, velocity, orientation)
		this.oscilation_y=0;
		this.velocityFactor=1;
		this.branch;
		this.velocity_y=0.001;

		//elements
		this.eye1 = new MyEye(this.scene, -0.005);
		this.eye2 = new MyEye(this.scene, 0.005);
		this.ico = new MyIcosahedron(this.scene);
		this.bico = new MyPyramid(this.scene, 4);
		this.wing_triangle_left = new MyTriangle(this.scene);
		this.wing_triangle_rigth = new MyTriangle(this.scene);
		this.wing_square_left = new MyQuad(this.scene, 1);
		this.wing_square_rigth = new MyQuad(this.scene, 1);
		this.tail=new MyTriangle(this.scene);
		this.leg=new MyLeg(this.scene);
		
		//textures
		this.yellowTexture= new CGFappearance(this.scene);
        this.yellowTexture.setAmbient(1, 1, 0, 1.0);
        this.yellowTexture.setDiffuse(1.0, 1.0, 0.0, 1.0);
        this.yellowTexture.setSpecular(0.5, 0.5, 0, 1.0);
        this.yellowTexture.setShininess(10.0);

        this.feathers=new CGFappearance(this.scene);
       	this.feathers.setAmbient(0, 0.0, 1.0, 1.0);
        this.feathers.setDiffuse(0, 0.0, 1.0, 1.0);
        this.feathers.setSpecular(0, 0.0, 1, 1.0);
        this.feathers.setShininess(10.0);
        this.feathers.loadTexture('images/feathers.jpg');
		this.feathers.setTextureWrap('REPEAT', 'REPEAT');

		this.blue_feathers=new CGFappearance(this.scene);
       	this.blue_feathers.setAmbient(0.5, 0.8, 1.0, 1.0);
        this.blue_feathers.setDiffuse(0.5,0.8,1, 1.0);
        this.blue_feathers.setSpecular(0.5,0.8,1, 1.0);
        this.blue_feathers.setShininess(10.0);
        this.blue_feathers.loadTexture('images/blue_feathers.jpg');
		this.blue_feathers.setTextureWrap('REPEAT', 'REPEAT');
	}

	updateBuffers(complexity){
        
    }

	setPositions(x_position, y_position, z_position, velocity, orientation){
		this.x_position=x_position;
		this.y_position=y_position;
		this.z_position=z_position;
		this.velocity=velocity;
		this.orientation=orientation;
	}

    display()
    {
		this.scene.pushMatrix();
		this.scene.translate(this.x_position, this.y_position+0.2+this.oscilation_y+0.1+0.375, this.z_position);
		this.scene.rotate(this.orientation, 0, 1, 0);

    	//body
    	this.feathers.apply();
    	this.scene.pushMatrix();
    	this.scene.scale(0.6, 0.6, 0.6);
    	this.ico.display();
    	this.scene.popMatrix();

    	//head
		this.blue_feathers.apply();
    	this.scene.pushMatrix();
    	this.scene.translate(0,0.75,0.375);
    	this.scene.scale(0.5, 0.5, 0.5);
    	this.scene.rotate(0.3, 0, 1, 0);
    	this.ico.display();
    	this.scene.popMatrix();

    	//bico
    	this.yellowTexture.apply();
    	this.scene.pushMatrix();
    	this.scene.translate(0,0.65,0.75);
    	this.scene.rotate(Math.PI/2,1,0,0);
    	this.scene.scale(0.15, 0.15, 0.15);
    	this.bico.display();
    	this.scene.popMatrix();
		
		//legs
		this.scene.pushMatrix();
		this.scene.translate(0.3, 0, 0);
		this.leg.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.3, 0, 0);
		this.leg.display();
		this.scene.popMatrix();

		//eyes
		this.scene.pushMatrix();
		this.scene.translate(-0.38,0.77,0.535);
    	this.scene.rotate(0.3, 0, 1, 0);
		this.eye2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.38,0.77,0.535);
    	this.scene.rotate(-0.3, 0, 1, 0);
		this.eye1.display();
		this.scene.popMatrix();

    	//tail
    	this.blue_feathers.apply();
    	this.scene.pushMatrix();
    	this.scene.translate(0,0,-0.375);
    	this.scene.scale(0.5, 0.5, 0.5);
    	this.scene.rotate(-this.angle_wing*Math.PI/8,1,0,0);
    	this.scene.rotate(Math.PI/2,0,1,0);
    	this.scene.rotate(-Math.PI/2,1,0,0);
    	this.scene.rotate(-Math.PI/4,0,0,1);
    	this.tail.display();
    	this.scene.popMatrix();

    	//left wing
    	this.blue_feathers.apply();
    	this.scene.pushMatrix();
    	this.scene.rotate(this.angle_wing*Math.PI/8,0,0,1);
    	this.scene.pushMatrix();
    	this.scene.translate(-0.6,0.1,0);
    	this.scene.scale(0.5, 0.5, 0.5);
    	this.scene.rotate(Math.PI/2,0,0,1);
    	this.scene.rotate(Math.PI/2,0,1,0);
    	this.wing_square_left.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
    	this.scene.translate(-0.85,0.1,-0.25);
    	this.scene.scale(0.5, 0.5, 0.5);
    	this.scene.rotate(this.angle_wing*Math.PI/4,0,0,1);
    	this.scene.rotate(Math.PI/2,0,0,1);
    	this.scene.rotate(-Math.PI/2,0,1,0);
    	this.wing_triangle_left.display();
    	this.scene.popMatrix();
    	this.scene.popMatrix();

    	//rigth wing
    	this.scene.pushMatrix();
    	this.scene.rotate(-this.angle_wing*Math.PI/8,0,0,1);
    	this.scene.pushMatrix();
    	this.scene.translate(0.6,0.1,0);
    	this.scene.scale(0.5, 0.5, 0.5);
    	this.scene.rotate(-Math.PI/2,0,0,1);
    	this.scene.rotate(-Math.PI/2,0,1,0);
    	this.wing_square_rigth.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
    	this.scene.translate(0.85,0.1,-0.25);
    	this.scene.scale(0.5, 0.5, 0.5);
    	this.scene.rotate(-this.angle_wing*Math.PI/4,0,0,1);
    	this.scene.rotate(-Math.PI/2,0,0,1);
    	this.scene.rotate(-Math.PI/2,0,1,0);
    	this.wing_triangle_rigth.display();
    	this.scene.popMatrix();
    	this.scene.popMatrix();

		//branch
		if (this.branch!=undefined)
		{
			this.scene.pushMatrix();
			this.scene.translate(0.5, 0.6, 0.8);
			this.branch.display();
			this.scene.popMatrix();
		}

    	this.scene.popMatrix();
    }  

    accelerate(v){
    	if (this.velocity==0)
    		this.velocity=0.001;
    	else
    		this.velocity*=v;
    } 

     turn(v){
     	this.orientation+=v*this.velocityFactor;
     	this.orientation=this.orientation%(Math.PI*2);
     }

     updatePosition(delta, t){
     	this.x_position+=delta*this.velocity*this.velocityFactor*Math.sin(this.orientation);
     	this.z_position+=delta*this.velocity*this.velocityFactor*Math.cos(this.orientation);
     	this.angle_wing=Math.sin(t*this.velocity/2*this.velocityFactor*10);
     	this.oscilation_y=0.1*Math.cos((t/1000)*(2*Math.PI));
     }

     updateVelocityFactor(velocityFactor){
     	this.velocityFactor=velocityFactor;
     }

     goDown(delta){
     	this.y_position+=-delta*this.velocity_y;
     }

     goUp(delta){
     	this.y_position+=delta*this.velocity_y;
     }

     getXposition(){
		return this.x_position;
     }

     getYposition(){
		return this.y_position;
     }

     getZposition(){
     	return this.z_position;
     }
}