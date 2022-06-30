import Layout from '../components/Layout'
import Header from '../components/Header'
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import { Canvas, useThree, castShadow, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, SpotLight, Sparkles, Backdrop } from '@react-three/drei';
import SphereAnimated from '../components/SphereAnimated';
import { Suspense, useRef } from 'react';
import Animation from '../components/Animation';
import { useSpring, animated } from '@react-spring/three'
import Camera from '../components/Camera';
import Asteroids from '../components/Asteroids'
import DisablePrintScreen from '../components/disablePrintScreen';


const Index = () => (
    

    <Layout>
        <DisablePrintScreen/>
        <Header />
        <Canvas className='canvas1'>
            <Camera />
            <OrbitControls /* autoRotate={true} autoRotateSpeed={0.3} */ speed={1}  />
            <directionalLight  intensity={1} position={[0, 2, -10]} />
            <directionalLight  intensity={.5} position={[0, 2, 10]} />
            
            {/* <SpotLight
                color={"#ffffff"}
                position={[0, -0.5, 0]}
                distance={30}
                angle={0.5}
                attenuation={6}
                anglePower={5} // Diffuse-cone anglePower (default: 5)
            />
            <SpotLight
                color={"#ffff00"}
                intensity={2}
                position={[0, -0.5, 0]}
                distance={30}
                angle={1}                
                attenuation={6}
                anglePower={5} // Diffuse-cone anglePower (default: 5)
            />
            <SpotLight
                color={"#0000ff"}
                intensity={0.5}
                position={[0, -0.5, 0]}
                distance={30}
                angle={0.2}
                attenuation={6}
                anglePower={5} // Diffuse-cone anglePower (default: 5)
            /> */}

            {/*  <ambientLight intensity={0.5} />
                <directionalLight intensity={1} position={[0, 0, 1]} /> */}

            <Suspense fallback={null}>
                {/* <Stage contactShadow shadows adjustCamera intensity={0.1} > */}
                <SphereAnimated args={[1, 128, 128]} position={[0, 0, 0]} />
                {/* </Stage> */}
                <Asteroids/>
            </Suspense>
            <Sparkles count={1} position={[0.9,2,-5]} size={200} speed={0} opacity={1} scale={0.1} noise={0} color={"#ffffff"} />
            <Stars radius={500} depth={50} count={10000} factor={1} />
        </Canvas>
        {/* <Canvas className='canvas2'>
        <OrbitControls speed={1} />           
            <PerspectiveCamera makeDefault  fov={40}>
                <pointLight intensity={1} position={[0, 10, 3]} />
                <directionalLight intensity={1} position={[1, 2, -10]} />
                <ambientLight intensity={0.2} />
            </PerspectiveCamera>
            <Suspense fallback={null}>
            </Suspense>
            <Animation/>
        </Canvas> */}
        {/* <Skills /> */}

        {/* <Studies /> */}

    </Layout>
)

export default Index;