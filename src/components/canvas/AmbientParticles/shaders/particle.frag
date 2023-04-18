precision highp float;

uniform vec3 color;
uniform vec3 darkModeColor;
uniform vec3 fogColor;
uniform vec3 darkModeFogColor;
uniform float fogNear;
uniform float fogFar;
uniform float isDarkMode;


void main() {
  vec4 fragColor = vec4(color, 1);

  vec3 interRimColor = mix(color, darkModeColor, isDarkMode);
  vec3 interRimFogColor = mix(fogColor, darkModeFogColor, isDarkMode);

  // account for fog
  float depth = gl_FragCoord.z / gl_FragCoord.w;
  float fogFactor = smoothstep(fogNear, fogFar, depth);
  gl_FragColor = vec4(mix(interRimColor, interRimFogColor, fogFactor), 1.0);
}
