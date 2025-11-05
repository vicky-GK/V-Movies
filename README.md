Overview
A React + Vite movies app that fetches from a local json-server, displays movie cards, and supports watch/delete interactions with responsive styling.​

Quick start
Install: npm install.

Dev app: npm run dev, then open http://localhost:5173.​

Mock API + static: npx json-server --watch data/movies.json --port 3000 --static ./data.​

API contract
Endpoint: http://localhost:3000/movies returns an array of movie objects.​

Fields used: id, name, description, image, rating, watch.​

Project files
Movieslist.jsx: fetches, sorts, renders grid; handles delete.​

Movies.jsx: card UI; opens watch link; shows NA logic.​

Movies.module.css: glassmorphism layout, grid, buttons.​

main.jsx and index.css: app bootstrap and globals.​

vite.config.js: Vite configuration.​

useFetch.jsx: lightweight data hook.​

Notes
Ensure data/movies.json exists; place assets under ./data so they’re served at http://localhost:3000/.​

Add package.json scripts if missing:

"dev": "vite"

"build": "vite build"

"preview": "vite preview"​

Keep Vite and json-server running in separate terminals.​
