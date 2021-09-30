/**
 * MyTreeSet
*/
class MyTreeSet extends CGFobject {
	constructor(scene, number) {
		super(scene);
		this.number=number
        this.trees=[];
        let i=0;
        for (i=0; i<this.number; i++)
            this.trees[i] = new MyLSPlant(this.scene);
        
        //trees
        this.axiom = "X";
        this.angle = 10.0;
        this.iterations = 6;
        this.scaleFactor = 1;

        this.doGenerate = function () {
            for (i=0; i<this.number; i++)
            this.trees[i].generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+X",
                        "F[-X][X]+X",
                        "F[+X]-X",
                        "F[/X][X]F[\\X]+X",
                        "F[\\X][X]/X",
                        "F[/X]\\X",
                        "F[^X][X]F[&X]^X",
                        "F[^X]&X",
                        "F[&X]^X",
                        "F[\\Z][X]/X",
                        "F[/X][X]Y[\\X]+X",
                        "F[/X][//Y]X[\\X][\\\\Z]"],
                    "Z": [ "&F[-X][X]F[-X]+X",
                    "&F[&Z][//X]X[\\X][\\\\Y]"],
                    "Y": ["^F[/X][X]F[\\X]+X",
                    "^F[/Y][//X]X[\\Z][\\\\X]"]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }
        this.doGenerate();
	}

	updateBuffers(complexity){
    }


    display()
    {
       let i=0;
        for(i=0; i<this.trees.length; i++)
        {
            this.scene.pushMatrix();
            this.scene.translate(i*2.5, 0, 0);
            this.scene.scale(0.12, 0.05, 0.12);
        	this.trees[i].display();
        	this.scene.popMatrix();
        }
        	
    }  
}