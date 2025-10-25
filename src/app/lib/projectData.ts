import type { ComponentType } from "react";

import water_ocean from "@/app/lab/ocean-water/scene";
import spectral_core from "@/app/lab/spectral-core/Scene";
import particles from "@/app/lab/particle-shader/Scene";
import galaxy from "@/app/lab/galaxy/Scene";
import sphere_particles from "@/app/lab/sphere-particles/Scene";
import atom from "@/app/lab/atom/Scene";

export interface Project {
  title: string;
  slug: string;
  description: string;
  preview: string;
  github: string;
  component?: ComponentType;
  category: string;
}

const BASE_URL = "https://kojilab.vercel.app";

export const projects: Project[] = [
  {
    title: "Galaxy",
    slug: "galaxy",
    description:
      "A cinematic galaxy shader with glowing stars, a luminous nebula core, and smooth color.",
    preview: `${BASE_URL}/previews/Galaxy.png`,
    github: "https://github.com/sujitkoji/kojiLab/tree/main/src/app/lab/galaxy",
    component: galaxy,
    category: "Galaxy",
  },
  {
    title: "Water Ocean Shader",
    slug: "water-ocean",
    description:
      "A realistic animated ocean shader with light reflections, depth color blending, and soft waves.",
    preview: `${BASE_URL}/previews/Water-Ocean.png`,
    github: "https://github.com/sujitkoji/KojiLab/tree/main/src/app/lab/ocean_water",
    component: water_ocean,
    category: "Water",
  },
  {
    title: "Spectral Core",
    slug: "spectral-core",
    description:
      "A procedural GLSL shader featuring noise-driven color waves, a glowing energy core & lighting.",
    preview: `${BASE_URL}/previews/Spectral.png`,
    github: "https://github.com/sujitkoji/KojiLab/tree/main/src/app/lab/spectral_core",
    component: spectral_core,
    category: "Energy",
  },
  {
    title: "Atom",
    slug: "atom",
    description:
      "An artistic atom simulation with orbiting electrons, glowing core, and smooth camera motion.",
    preview: `${BASE_URL}/previews/Atom.png`,
    github: "https://github.com/sujitkoji/KojiLab/tree/main/src/app/lab/atom",
    component: atom,
    category: "Science",
  },
  {
    title: "Particle Shader",
    slug: "particle-shader",
    description:
      "An interactive morphing particle system with depth, glow, and smooth transitions.",
    preview: `${BASE_URL}/previews/Particles.png`,
    github: "https://github.com/sujitkoji/KojiLab/tree/main/src/app/lab/particle_shader",
    component: particles,
    category: "Particles",
  },
  {
    title: "Sphere Particles",
    slug: "sphere-particles",
    description:
      "A dynamic 3D sphere particle shader with motion, orbit animation, and glowing stars.",
    preview: `${BASE_URL}/previews/SphereParticles.png`,
    github: "https://github.com/sujitkoji/KojiLab/tree/main/src/app/lab/sphere_particles",
    component: sphere_particles,
    category: "Particles",
  },
  
];
