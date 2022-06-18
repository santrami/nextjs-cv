import { Sphere, Cloud, MeshDistortMaterial, Sparkles, PointMaterial } from '@react-three/drei'
import { TextureLoader } from 'three'
import normalMap from '../public/normal-map.jpg'
import moonMap from '../public/moon-normal-map.jpg'
import { useLoader } from '@react-three/fiber'


export default function SphereAnimated({ args, scale, position }) {
    const [image, normal] = useLoader(TextureLoader, ["/normal-map.jpg", '/moon-normal-map.jpg'])

    return (
        <Sphere opacity={0} visible args={args} scale={scale} position={position}>
            {/* <MeshDistortMaterial attach="material" speed={1} distort={1} /> */}
            <meshStandardMaterial map={normal} normalMap={image} />
            <Sparkles count={500} size={2} speed={0.1} opacity={1} scale={4} color={"#ffff00"} />
            <Cloud
                
                opacity={1}
                speed={2} // Rotation speed
                width={0.1} // Width of the full cloud
                depth={1} // Z-dir depth
                segments={2} // Number of particles
                color={"#000000"}
            />
        </Sphere>
    )
}