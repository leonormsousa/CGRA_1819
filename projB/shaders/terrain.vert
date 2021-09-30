attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;
varying vec2 vTextureCoord2;

void main() {
	
	vTextureCoord = aTextureCoord;
	vec4 filter = texture2D(uSampler2,aTextureCoord);
	vTextureCoord2 = vec2(filter.r, filter.r);
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + aVertexNormal * filter.r * 7.0, 1);
}