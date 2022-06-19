import { Sphere, Cloud, MeshDistortMaterial, Sparkles, PointMaterial } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'


export default function SphereAnimated({ args, scale, position }) {
    const [image, normal] = useLoader(TextureLoader, ["/normal-map.jpg", '/moon-normal-map.jpg'])

    return (
        <Sphere opacity={0} visible args={args} scale={scale} position={position}>
            {/* <MeshDistortMaterial attach="material" speed={1} distort={1} /> */}
            <meshStandardMaterial map={normal} normalMap={image}/>
            <Cloud
                
                opacity={0.5}
                speed={1} // Rotation speed
                width={1} // Width of the full cloud
                depth={.013} // Z-dir depth
                segments={2} // Number of particles
                color={"#aaa"}
            />
            <Sparkles count={20000} size={1} speed={0} opacity={1} scale={20} color={"#777700"} />

        </Sphere>
    )
}