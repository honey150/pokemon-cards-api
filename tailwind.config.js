/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grass: "#74CB48",
        grass_light: "#e2f4da",
        bug: "#399a4e",
        bug_light: "#daf1df",
        dark: "#585879",
        dark_light: "#e4e4ec",
        dragon: "#62cbda",
        dragon_light: "#d6f1f5",
        electric: "#e3e427",
        electric_light: "#f0f0db",
        fairy: "#ea0b68",
        fairy_light: "#fdcee2",
        fighting: "#ef6236",
        fighting_light: "#fbdad0",
        fire: "#fd4a5a",
        fire_light: "#fecdd1",
        flying: "#95b368",
        flying_light: "#e7eedd",
        ghost: "#916792",
        ghost_light: "#eae1ea",
        poison: "#5e298a",
        poison_light: "#e7d8f3",
        water: "#0d77e2",
        water_light: "#cfe5fc",
        normal: "#755e5b",
        normal_light: "#e9e3e2",
        ground: "#a97029",
        ground_light: "#f5e7d6",
        ice: "#87d3f5",
        ice_light: "#e3f5fd",
        psychic: "#c02b7d",
        psychic_light: "#f6d5e7",
        rock: "#621902",
        rock_light: "#fdd9ce",
        steel: "#40be95",
        steel_light: "#d9f2ea"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.2rem",
        sm: "1.5rem"
      }
    }
  },
  plugins: []
};
