import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ArchChan(props) {
  const group = useRef()
  // Path menunjuk ke file .glb yang sudah ditransformasi
  const { nodes, materials, animations } = useGLTF('/models/arch-chan/scene-transformed.glb') 
  const { actions } = useAnimations(animations, group)

  // -- Tambahkan bagian ini untuk memutar animasi --
  useEffect(() => {
    // 'Take 001' adalah nama animasi dari model ini. 
    // Anda bisa melihat semua nama animasi yang tersedia dengan `console.log(actions)`
    actions['Take 001']?.play()
  }, [actions])
  // ---------------------------------------------

  return (
    // Kita bungkus dengan group agar bisa direferensikan oleh useAnimations
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        {/* Kode JSX untuk model yang dihasilkan oleh gltfjsx akan ada di sini */}
        {/* Biarkan seperti aslinya */}
        <group name="Sketchfab_model_rotation" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.material_0}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.material_1}
                    skeleton={nodes.Object_8.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
      </group>
    </group>
  )
}
