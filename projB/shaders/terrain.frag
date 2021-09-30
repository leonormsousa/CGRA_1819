#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec2 vTextureCoord2;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {

	vec4 color2 = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(uSampler3, -vTextureCoord2);

	gl_FragColor = color2*0.9 + filter*0.1;
}