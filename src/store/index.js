import { proxy } from "valtio";

export const state = proxy({
  intro: true,
  color: "#EDBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
