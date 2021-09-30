/**
 * MyApple
 */
class MyApple extends CGFobject {
	constructor(scene) {
		super(scene);
		this.apple=new MyIcosahedron(this.scene);

        var rand=Math.random();
        this.color = new CGFappearance(this.scene);
        this.color.setAmbient(0.5, 0.5, 0.5, 1.0);
        if (Math.round(rand)==1)
            this.color.setDiffuse(0.80+(Math.random() * 0.2), Math.random() * 0.2, Math.random() * 0.2, 1.0);
        else
            this.color.setDiffuse(Math.random() * 0.2, 0.8 + (Math.random() * 0.2), Math.random() * 0.2, 1.0);
        this.color.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.color.setShininess(10.0);
        console.log(this);
	}


	updateBuffers(complexity){
        
    }

    display()
    {
        this.color.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.3, 0.3, 0.3);
        this.apple.display();
        this.scene.popMatrix();
    }
}

