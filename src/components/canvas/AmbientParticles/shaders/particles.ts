import { useMemo } from 'react';
import { ShaderMaterial, ShaderMaterialParameters, Uniform, Vector3 } from 'three';

import vert from './particle.vert';
import frag from './particle.frag';

export const useParticleMaterial = (shaderParams?: Partial<ShaderMaterialParameters>) => {
  const color = new Vector3();
  const fogColor = new Vector3(255, 255, 255);

  return useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: new Uniform(0),
          isDarkMode: new Uniform(0),
          color: new Uniform(color),
          darkModeColor: new Uniform(fogColor),
          fogColor: new Uniform(color),
          darkModeFogColor: new Uniform(fogColor),
          fogNear: new Uniform(1.0),
          fogFar: new Uniform(5),
        },
        vertexShader: vert,
        fragmentShader: frag,
        ...shaderParams,
      }),
    [frag, vert]
  );
};
