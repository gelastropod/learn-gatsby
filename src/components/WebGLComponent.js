import React, { useRef, useEffect } from "react";

const WebGLCanvas = (props) => {
    const canvasRef = useRef();
    const windowWidth = useRef();
    const windowHeight = useRef();
  
    useEffect(() => {
      windowWidth.current = window.innerWidth;
      windowHeight.current = window.innerHeight;
  
      const gl = canvasRef.current.getContext("webgl2");
  
      if (!gl) {
        console.error("WebGL not supported on browser.");
        return;
      }
  
      gl.clearColor(1.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
  
      const createShader = (gl, type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(source);
          console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      };

      const context = require.context('!!raw-loader!../shaders', false, /.*\..*/);
      const loadShaderSource = (shaderName) => {
        try {
          if (context.keys().includes(`./${shaderName}`)) {
            const module = context(`./${shaderName}`);
            return module.default;
          }
          return null;
        } catch (error) {
          console.error('Error loading shader:', error);
          return null;
        }
      };

      const vertexShaderSource = loadShaderSource(props.vert);
      const fragmentShaderSource = loadShaderSource(props.frag);
  
      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  
      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
  
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Error linking program:', gl.getProgramInfoLog(shaderProgram));
        return;
      }
  
      gl.useProgram(shaderProgram);
  
      const positions = new Float32Array([
        -1.0, -1.0,  
         1.0, -1.0,
        -1.0,  1.0,
         1.0, -1.0,   
         1.0,  1.0,
        -1.0,  1.0,
      ]);
  
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  
      const positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'position');
      const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'u_time');
      const resolutionUniformLocation = gl.getUniformLocation(shaderProgram, "u_resolution");
  
      gl.uniform2f(resolutionUniformLocation, canvasRef.current.width, canvasRef.current.height);
  
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
  
      let startTime = Date.now();
      const render = () => {
        const elapsedTime = (Date.now() - startTime) / 1000; // Elapsed time in seconds
  
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT);
  
        gl.useProgram(shaderProgram);
        gl.uniform1f(timeUniformLocation, elapsedTime);
  
        gl.drawArrays(gl.TRIANGLES, 0, 6);
  
        requestAnimationFrame(render);
      };
  
      render();
    }, []);
  
    return (
      <canvas ref={canvasRef} width={windowWidth.current - 192} height={windowHeight.current - 192} />
    )
  }

  export default WebGLCanvas;