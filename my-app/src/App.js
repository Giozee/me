import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Sky } from 'drei';
import { Stars } from 'drei';
import { Physics } from 'use-cannon';
import { Html } from 'drei';
import { Ground } from './components/Ground';
import Cubes from './components/Cubes';
import { Player } from './components/Player';
import { Box } from 'drei';
import { BooleanKeyframeTrack } from 'three';
import { OrbitControls } from 'drei';


function App() {
  return (
    <Canvas shadowMap sRGB>
 {/* 
<Html

  position={[-14.8, 9.0, 0.5]}
  style={{
    width: 1920,
    height: 1080,
    background: 'white',
          transition: 'all 0.2s',

        }}
>

      <img src="https://i.imgur.com/Hzjjtc2.jpg" width="1920" height="1080"></img>

</Html>
*/}
    <Stars radius={80} depth={50} count={5000} factor={3} saturation={0} fade />
      <Sky distance={450000} sunPosition={[0, 0, 0]} azimuth={0.0} />


      <ambientLight intensity={0.0} />
      <pointLight castShadow intensity={0.1} position={[100, 100, 100]} />

      <Physics gravity={[0, 0, 0]}>
        
      <OrbitControls autoRotate autoRotateSpeed='0.15' minDistance = '250' maxDistance = '250' enabled = {[false]} />
<mesh />
        <Cubes />
      </Physics>
    </Canvas>
    
    
  );
}

export default App;
