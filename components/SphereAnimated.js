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
            <Cloud
                
                opacity={1}
                speed={0} // Rotation speed
                width={0.02} // Width of the full cloud
                depth={0.5} // Z-dir depth
                segments={5} // Number of particles
                color={"#000000"}
            />
            <Sparkles count={1000} size={10} speed={0.7} opacity={1} scale={3.5} color={"#222200"} />

        </Sphere>
    )
}