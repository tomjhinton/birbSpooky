export default /* glsl */`
uniform float uTime;

varying vec2 vUv;
uniform float uAlpha;



void main(){




  vec2 uv = vUv;

	
	vec3 color = vec3(0.);
  ;

  
 
   float alpha = 1.-sin(uAlpha) ;

  

  gl_FragColor = vec4(color, alpha );
}`