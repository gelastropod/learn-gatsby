#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 fragColor;

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution) / u_resolution.y;
    uv *= 0.5;
    vec3 color = sin(uv.xyx + u_time + vec3(0, 2, 3)) * 0.5 + 0.5;
    fragColor = vec4(color, 1.0);
}