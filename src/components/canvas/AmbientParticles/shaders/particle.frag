precision highp float;

uniform vec3 color;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;


void main() {
  vec4 fragColor = vec4(color, 1);

  // account for fog
  float depth = gl_FragCoord.z / gl_FragCoord.w;
  float fogFactor = smoothstep(fogNear, fogFar, depth);
  gl_FragColor = vec4(mix(color, fogColor, fogFactor), 1.0);
}
