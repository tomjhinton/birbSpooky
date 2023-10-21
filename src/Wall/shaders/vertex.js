export default /* glsl */ `
varying vec2 vUv;
uniform float uTime;
uniform float u_progress;
uniform vec2 uMousePosition;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 pos;



	void main() { gl_Position = vec4(position, 1.0);
               vUv = uv;
              }
`

