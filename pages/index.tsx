import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";

const TexturedSphere = () => {
  const map = useTexture("./textures/metal_plate_diff_1k.png");
  const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
  const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png");
  const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png");

  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial map={map} />
      </mesh>
      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh>
      <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
        <sphereGeometry args={[1, 200, 200]} />
        <meshStandardMaterial
          map={map}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementScale={0.05}
        />
      </mesh>
    </>
  );
};

const Home: NextPage = () => {
  const testing = true;

  return (
    <div className="container">
      <Canvas>
        {testing ? <Stats /> : null}
        {testing ? <OrbitControls /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null}
        <axesHelper visible={testing} args={[2]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 5, 5]} />
        <TexturedSphere />
      </Canvas>
    </div>
  );
};

export default Home;
