import React, { Suspense  } from 'react';
import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Stars } from 'drei';
import { OrbitControls } from 'drei';
import Grass from "./Grass"

function App() {
  return (
    <Canvas>

    <Stars radius={80} depth={50} count={5000} factor={5} saturation={0} fade />
      <Sky distance={1000} sunPosition={[0, 10, 0]} azimuth={15.0} inclination={12.6} />


      <Suspense fallback={null}>
        <Grass />
      </Suspense>
        
      <OrbitControls  autoRotate autoRotateSpeed='0.25' minDistance = '50' maxDistance = '50' enabled = {[false]} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
    
    
  );
}

export default App;
