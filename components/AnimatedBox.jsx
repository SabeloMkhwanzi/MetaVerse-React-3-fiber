import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

// type Props = {
//   isTesting: boolean;
// };

const AnimatedBox = ({ isTesting }) => {
  const meshRef = useRef < THREE.Mesh > null;
  {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    isTesting ? useHelper(meshRef, BoxHelper, "blue") : null;
  }

  useFrame(() => {
    console.log("hi");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
