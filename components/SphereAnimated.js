import { Sphere, Cloud, MeshDistortMaterial, Sparkles, PointMaterial, Point } from '@react-three/drei'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'


export default function SphereAnimated({ args, scale, position }) {
    const [image, normal] = useLoader(TextureLoader, ["/mercury-normal-map.jpg", '/planet-texture.jpg'])
    const asteroids= new THREE.PointsMaterial({
        size:0.005
    })
    return (
        
        <Sphere onClick={()=>console.log("hola")} opacity={0} visible args={args} scale={scale} position={position}>
            {/* <MeshDistortMaterial attach="material" speed={1} distort={1} /> */}
            <meshStandardMaterial map={normal} normalMap={image}/*  roughness={0.4} metalness={0.9} *//>
        </Sphere>
    )
}