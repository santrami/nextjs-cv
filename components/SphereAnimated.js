import { Sphere, Cloud, MeshDistortMaterial, Sparkles, PointMaterial } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'


export default function SphereAnimated({ args, scale, position }) {
    const [image, normal] = useLoader(TextureLoader, ["/normal-map.jpg", '/planet-texture.jpg'])

    return (
        <Sphere opacity={0} visible args={args} scale={scale} position={position}>
            {/* <MeshDistortMaterial attach="material" speed={1} distort={1} /> */}
            <meshStandardMaterial map={normal} normalMap={image} roughness={0.5} metalness={0.9}/>
        </Sphere>
    )
}