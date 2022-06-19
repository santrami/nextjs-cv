import Layout from '../components/Layout'
import Header from '../components/Header'
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera,ContactShadows } from '@react-three/drei';
import SphereAnimated from '../components/SphereAnimated';
import { Suspense } from 'react';

const Index = () => (
    <Layout>        
        <Header />
        <Canvas className='canvas1'>
            <OrbitControls  speed={1}/>
            <PerspectiveCamera makeDefault position={[0, 0,5]} fov={75}>
            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1} position={[1,1,10]} />
            </PerspectiveCamera>
            <Suspense fallback={null}>                              
                <SphereAnimated args={[0.0001, 64, 64]} position={[0,0,0]}/> 
                
                <Stars radius={500} depth={50} count={1000} factor={8} />
            </Suspense>
        </Canvas>
        <Canvas className='canvas2'>
            <OrbitControls  speed={1}/>
            <PerspectiveCamera makeDefault position={[0, 0,5]} fov={75}>
            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1} position={[1,1,10]} />
            </PerspectiveCamera>
            <Suspense fallback={null}>                              
                <SphereAnimated args={[2, 64, 64]} position={[0,0,0]}/> 
                
                <Stars radius={500} depth={50} count={1000} factor={8} />
            </Suspense>
        </Canvas>
        <Skills />
        
        <Studies />
        
    </Layout>
)

export default Index;