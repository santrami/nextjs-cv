import Layout from '../components/Layout'
import Header from '../components/Header'
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import { Canvas, useThree, castShadow } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, SpotLight, Sparkles, Backdrop } from '@react-three/drei';
import SphereAnimated from '../components/SphereAnimated';
import Asteroids from '../components/Asteroids';
import { Suspense, useRef } from 'react';
import Animation from '../components/Animation';
import { useSpring, animated } from '@react-spring/three'

const Index = () => (

    <Layout>
        <Header />
        <Canvas className='canvas1'>

            <OrbitControls autoRotate={true} autoRotateSpeed={0.3} speed={1} rotation={[1, 22, 0]} />
            <PerspectiveCamera makeDefault position={[0, 0.2, 3]} fov={75} />
            <hemisphereLight castShadow={true} color-setHSL={[1, 1, 1]} position={[10, 150, 0]} args={["#ffffff", "#ffffff", 0.1]} />
            <directionalLight castShadow={true} intensity={2} position={[0, 10, 20]} />
            <directionalLight  color={"#ffffff"}
                position={[0, -1.3, 0]}
                intensity={2}                
           />
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
                <Asteroids args={[1.1, 180]} position={[10, 10, 10]} />
                {/* </Stage> */}

            </Suspense>
            <Sparkles count={20} size={100} speed={1} opacity={1} scale={20} noise={10} color={"#ffffff"} />
            <Stars radius={600} depth={50} count={10000} factor={8} />
        </Canvas>
        <Canvas className='canvas2'>
        <OrbitControls speed={1} />           
            <PerspectiveCamera makeDefault  fov={40}>
                <pointLight intensity={1} position={[0, 10, 3]} />
                <directionalLight intensity={1} position={[1, 2, -10]} />
                <ambientLight intensity={0.2} />
            </PerspectiveCamera>
            <Suspense fallback={null}>
            </Suspense>
            <Animation/>
        </Canvas>
        <Skills />

        <Studies />

    </Layout>
)

export default Index;