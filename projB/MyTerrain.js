class MyTerrain extends CGFobject {
	constructor(scene) {
        super(scene);
        this.plane = new Plane(scene, 40);
        this.terrainShader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.initMaterials();
        this.terrainShader.setUniformsValues({
            uSampler2: 1,
            uSampler3: 2,
        });
	}

	initMaterials() {

		// Materials and textures initialization

		this.appearance = new CGFappearance(this.scene);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearance.setShininess(40);

		this.texture_terrain = new CGFtexture(this.scene, 'images/terrain.jpg');
		
		this.appearance.setTexture(this.texture_terrain);
		//this.appearance.setTextureWrap('REPEAT', 'REPEAT');
		
		this.heightmap_terrain = new CGFtexture(this.scene, "images/heightmap2.jpg");
		this.altimetry_terrain = new CGFtexture(this.scene, "images/altimetry.png");
	}

	display() {

		this.scene.pushMatrix();

		this.scene.setActiveShader(this.terrainShader);
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        	
		this.appearance.apply();

		
		this.altimetry_terrain.bind(2);
		this.heightmap_terrain.bind(1);

        this.plane.display();
        
        this.scene.popMatrix();

		this.scene.setActiveShader(this.scene.defaultShader);
	}
}
