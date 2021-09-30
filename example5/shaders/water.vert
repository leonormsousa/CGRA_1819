attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler2;
uniform float timeFactor;

varying vec2 vTextureCoord;

void main() {
	vTextureCoord = aTextureCoord;
	vec4 color = texture2D(uSampler2, vTextureCoord+vec2(timeFactor*0.001,timeFactor*0.001));


	gl_Position = uPMatrix * uMVMatrix * (vec4(aVertexPosition, 1.0) + vec4(0.0, 0.0, color.r*0.05, 0.0));

}

