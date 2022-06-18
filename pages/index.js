import Layout from '../components/Layout'
import Header from '../components/Header'
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import SphereAnimated from '../components/SphereAnimated';
import { Suspense } from 'react';

const Index = () => (
    <Layout>        
        <Header />
        <Canvas className='canvas1'>
            <OrbitControls autoRotate speed={1}/>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75}>

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