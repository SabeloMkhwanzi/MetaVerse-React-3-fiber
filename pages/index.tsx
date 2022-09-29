import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import { OrbitControls, Stats } from "@react-three/drei";

const Home: NextPage = () => {
  const testing = true;

  return (
    <div className="container">
      <Canvas>
        {testing ? <Stats /> : null}
        {testing ? <OrbitControls /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null}
        <axesHelper visible={testing} args={[2]} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox isTesting={testing} />
      </Canvas>
    </div>
  );
};

export default Home;
