import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function Home() {
  return (
    <div className="min-h-screen bg-white-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center text-gray-900 relative overflow-hidden">
      {/* SVG Header with Waving Emoji */}
      <header className="text-center mb-12">
        <h1 className="text-7xl font-bold text-indigo-800 mb-4 flex items-center justify-center">
          Welcome to My Portfolio
          <span className="ml-3 animate-wave text-7xl">👋🏼</span>
        </h1>
        <h1 className="text-xl font-medium mb-2 text-indigo-800">
            Hi, I'm Amit Halbreich - A passionate Software Developer! 
        </h1>
        <h1 className="text-xl font-medium mb-2 text-indigo-800">
            Explore my projects, learn about my skills, and connect with me!
        </h1>
      </header>

      {/* 3D Robot Mascot */}
      <div className="w-80 h-80 mb-10">
      <h1 className="text-xl font-medium mb-2 text-indigo-800 text-center">
            Spin me around!
            <span className="ml-1 text-3xl">🌪️</span>
        </h1>
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 5, 5]} />
          <OrbitControls enableZoom={false} />
          <RobotModel />
        </Canvas>
      </div>

      {/* Profile Picture and Description */}
      <div className="text-center max-w-lg">
        <img
          src="/images/Amit Profile Picture.jpg"
          alt="Amit Halbreich"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-xl font-medium mb-2 text-indigo-800">
          Let's build something amazing together!
        </h1>
        <h1 className="text-xl font-medium mb-2 text-indigo-800">
          With a background in software testing, data analysis, and development, I strive to contribute innovative solutions to every project.
        </h1>
      </div>

      {/* 3D Desk Model in Bottom Right */}
      <div className="absolute bottom-20 right-0 w-64 h-64">
        <h1 className="text-xl font-medium mb-2 text-indigo-800 text-center">
            Spin me too!
            <span className="text-3xl">🌪️</span>
        </h1>
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 5, 5]} />
          <OrbitControls enableZoom={false} />
          <DeskModel />
        </Canvas>
      </div>
    </div>
  );
}

function RobotModel() {
  const { scene } = useGLTF('/models/humanoid_robot_ai.glb'); // Replace with your model path
  return <primitive object={scene} scale={2.5} />;
}

function DeskModel() {
  const { scene } = useGLTF('/models/Desk.glb'); // Replace with your model path
  return <primitive object={scene} scale={1.8} />;
}
