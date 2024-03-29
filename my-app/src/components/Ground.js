import React from 'react';
import { usePlane } from 'use-cannon';
import { TextureLoader, RepeatWrapping, NearestFilter, LinearMipMapLinearFilter } from 'three';
import grass from '../images/grass.jpg';


export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = new TextureLoader().load(grass);


  texture.magFilter = NearestFilter;
  texture.minFilter = LinearMipMapLinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);
  return (
    <mesh
      ref={ref}
      receiveShadow

    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial map={texture} attach="material" transparent='true' opacity='3.0' />
    </mesh>
  );
};
