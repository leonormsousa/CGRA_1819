/**
 * MyLightning
 */
class MyLightning extends MyLSystem {
	constructor(scene) {
		super(scene);

        this.depth=0;
		
        this.axiomFirst = "X";
        this.angleFirst = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.over=true;
    }
    
    doGenerate(){
        this.generate(
                this.axiomFirst,
                {
                    "F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+FX",
                            "X[-FX] FX",
                             "X[+FX] FX",
                             "F[+FF] X [-FF]"]
                },
                this.angleFirst,
                this.iterations,
                this.scaleFactor
            );
    }

	initGrammar(){
		this.grammar = {
			"F": new MyLightningQuad(this.scene),
			"X": new MyLightningQuad(this.scene)
		}
	}

	update(t){
        this.depth+=(t-this.startingTime)/1000*(this.axiom.length/5);
        if (this.depth>=this.axiom.length)
            this.over=true;
	}

    startAnimation(t){
        this.doGenerate();
        this.startingTime=t;
        this.depth=0;
        this.over=false;
    }

    display(){
        if (this.over)
            return;
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;
        var number_p=0;
        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length; ++i){
            if (i>=this.depth)
                break;
            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    number_p++;
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    number_p--;
                    break;

                case "\\":
                    // rotação em sentido positivo sobre o eixo dos XX
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    //rotação em sentido negativo sobre o eixo dos XX
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    //rotação em sentido positivo sobre o eixo dos YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    //rotação em sentido negativo sobre o eixo dos YY
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        for (i=0; i<number_p; i++)
            this.scene.popMatrix();
        this.scene.popMatrix();
    }
}

