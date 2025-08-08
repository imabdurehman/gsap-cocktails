import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'






// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})



//Ngrok
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     port: 5179, // or the port you're using
//     allowedHosts: ['2d52c346c293.ngrok-free.app'], // your actual ngrok URL
//   },
// })

// localtunnel

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     allowedHosts: ['.loca.lt'], // allows any subdomain from loca.lt
//   }
// })
