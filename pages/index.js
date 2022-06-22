import Layout from '../components/Layout'
import Header from '../components/Header'
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import { Canvas, useThree, castShadow } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Stage, Sparkles, Backdrop } from '@react-three/drei';
import SphereAnimated from '../components/SphereAnimated';
import Asteroids from '../components/Asteroids';
import { Suspense } from 'react';

const Index = () => (

    <Layout>
        <Header />
        <Canvas className='canvas1'>

            <OrbitControls autoRotate={true} autoRotateSpeed={0.3} speed={1} rotation={[1, 22, 0]} />
            <PerspectiveCamera makeDefault position={[0, 0.1, 2]} fov={75} />
            <hemisphereLight castShadow={true} color-setHSL={[1, 1, 1]} position={[10, 150, 0]} args={["#ffffff", "#ffffff", 0.1]} />
            <directionalLight castShadow={true} intensity={2} position={[0, 10, 20]} />
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
        {/* <Canvas className='canvas2'>

            <OrbitControls autoRotateSpeed={0.1} autoRotate />
            <PerspectiveCamera makeDefault position={[0, 0.1, 2]} fov={35}>
                <pointLight intensity={1} position={[0, 10, 3]} />
                <directionalLight intensity={1} position={[1, 2, -10]} />
                <ambientLight intensity={0.2} />
            </PerspectiveCamera>
            <Suspense fallback={null}>
            <SphereAnimated args={[1, 64, 64]} position={[0, 0, 0]} />
                <Asteroids args={[1.1, 180]} position={[10, 10, 10]} />
            </Suspense>
        </Canvas> */}
        <Skills />

        <Studies />

    </Layout>
)

export default Index;