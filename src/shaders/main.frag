#version 100
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution) / u_resolution.y;
    vec3 color = vec3(0.5 + 0.5 * sin(u_time), 0.5 + 0.5 * cos(u_time), 1.0);
    gl_FragColor = vec4(color, 1.0);
}