import { useThree } from '@react-three/fiber';

// import Clouds from '../canvas/About/Clouds';
export default function About() {
  return (
    <div id="about-section" className="hero min-h-screen overflow-hidden border-none section-2">
      <h2 className="">About</h2>
    </div>
  );
}

// About.Canvas = function AboutScene() {
//   const { viewport } = useThree();
//   return (
//     <group position={[0, -viewport.height / 3, 3.5]}>
//       <Clouds position={[0, 0, 0]} />
//     </group>
//   )
// }
