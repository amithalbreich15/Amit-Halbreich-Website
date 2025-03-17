import React, { JSX, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { primitive } from '@react-three/fiber';

// Custom loading spinner component
const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-12 h-12">
      <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-indigo-100 rounded-full"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
    </div>
    <span className="ml-3 text-indigo-800 font-semibold">Loading...</span>
  </div>
);

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-32 bg-gradient-to-br flex flex-col items-center justify-center text-gray-900 relative overflow-x-hidden px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-6 sm:mb-8 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-2 sm:mb-3 flex items-center justify-center flex-wrap">
          Welcome to My Portfolio <span className="ml-2 animate-wave text-2xl sm:text-3xl md:text-4xl lg:text-5xl">👋🏼</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-indigo-800 px-2">
          Hi, I'm Amit Halbreich - A passionate Software Developer!
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium text-indigo-800 px-2">
          Explore my projects, learn about my skills, and connect with me!
        </p>
      </header>

      {/* 3D Robot Mascot */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
        <p className="text-sm sm:text-base md:text-lg font-medium text-indigo-800 text-center mb-1">
          Spin me around! <span className="ml-1 text-xl sm:text-2xl">🌪️</span>
        </p>
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas>
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 5, 5]} />
            <OrbitControls enableZoom={false} />
            <RobotModel />
          </Canvas>
        </Suspense>
      </div>

      {/* Profile Picture and Description */}
      <div className="text-center max-w-xs sm:max-w-sm md:max-w-md px-4 mt-4 sm:mt-6 mb-3 sm:mb-4 mt-6 sm:mt-8">
        <img
          src={`${import.meta.env.BASE_URL}images/Amit_Profile_Picture.jpg`}
          alt="Amit Halbreich"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto mb-2 sm:mb-4 border-4 border-white shadow-lg"
        />
        <p className="text-sm sm:text-base md:text-lg font-medium text-indigo-800 mb-3">
          Let's build something amazing together!
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium text-indigo-800">
          With a background in software testing, data analysis, and development, I strive to contribute innovative solutions to every project.
        </p>
      </div>

      {/* 3D Desk Model */}
      <div className="w-full sm:absolute sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 flex flex-col items-center sm:block sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 mt-6 sm:mt-0 mb-16">
        <div className="text-sm sm:text-base md:text-lg font-medium text-indigo-800 text-center mb-1">
          Spin me too! <span className="text-xl sm:text-2xl">🌪️</span>
        </div>
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <Suspense fallback={<LoadingSpinner />}>
            <Canvas>
              <ambientLight intensity={0.6} />
              <directionalLight position={[0, 5, 5]} />
              <OrbitControls enableZoom={false} />
              <DeskModel />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function RobotModel(): JSX.Element {
  const modelPath = `${import.meta.env.BASE_URL}models/humanoid_robot_ai.glb`;
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={2.5} />; // Reduced scale from 2.0 to 1.75
}

function DeskModel(): JSX.Element {
  const modelPath = `${import.meta.env.BASE_URL}models/Desk.glb`;
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={2.0} />;
}