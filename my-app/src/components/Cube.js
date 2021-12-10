import React, { memo } from 'react';
import { useBox } from 'use-cannon';
import { useState } from 'react';
import * as textures from '../textures';

const Cube = ({ position, texture, addCube, removeCube }) => {
  const [hover, setHover] = useState(null);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const color = texture === 'grass' ? 'skyblue' : 'white';
  return (
    <mesh
      castShadow
      ref={ref}
      
      
    >
        <boxBufferGeometry attach="geometry" /> <meshStandardMaterial attach="material" map={textures[texture]} color={hover!=null ? 'gray' : color} opacity={texture === 'glass' ? 0.7 : 1} transparent={true} />
    </mesh>
  );
};

function equalProps(prevProps, nextProps) {
  const equalPosition =
    prevProps.position.x === nextProps.position.x &&
    prevProps.position.y === nextProps.position.y &&
    prevProps.position.z === nextProps.position.z;

  return equalPosition && prevProps.texture === nextProps.texture;
}

export default memo(Cube, equalProps);
