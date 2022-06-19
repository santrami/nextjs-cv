import Layout from '../components/Layout'
import Header from '../components/Header'
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera,ContactShadows, Sparkles } from '@react-three/drei';
import SphereAnimated from '../components/SphereAnimated';
import { Suspense } from 'react';

const Index = () => (
    <Layout>        
        <Header />
        <Canvas className='canvas1'>
            <fog attach="fog" args={['#ffffff', 30, 30]} />
            <OrbitControls  speed={1}/>
            <PerspectiveCamera makeDefault position={[0, 0,3]} fov={75}>
            
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.1} position={[0,0,1]} />
            </PerspectiveCamera>
            <Suspense fallback={null}>                              
                <SphereAnimated args={[0.0001, 64, 64]} position={[0,0,0]}/>                 
            </Suspense>
                <Sparkles count={20} size={100} speed={1} opacity={1} scale={20} noise={10} color={"#ffffff"} />
                <Stars radius={600} depth={50} count={10000} factor={8} />
        </Canvas>
        <Canvas className='canvas2'>
            
            <OrbitControls autoRotateSpeed={2} autoRotate />
            <PerspectiveCamera makeDefault position={[0, 0,4]} fov={45}>
           
            <ambientLight intensity={3} />
            <pointLight intensity={2} position={[0,-15,0]} />
            </PerspectiveCamera>
            <Suspense fallback={null}>                              
                <SphereAnimated args={[1, 64, 64]} position={[0,0,0]}/>                 
            </Suspense>
                <Sparkles count={1000} size={1.5} speed={0.2} opacity={1} scale={[2,0,2]}color={"#ffffff"} />    
        </Canvas>
        <Skills />
        
        <Studies />
        
    </Layout>
)

export default Index;