import React from "react";
import particlesConfig from "./config/particles.config";
import Particles from "react-tsparticles";
import "./portfolioLanding.css";

const style = {
  position: "absolute !important",
};

export default function ParticleBackground() {
  return <Particles options={particlesConfig} height="100vh"></Particles>;
}
