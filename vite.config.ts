import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig(() => {
  const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

  return {
    plugins: [
      react(),
      tailwindcss()],
    base: isGithubPages ? '/app-teachers/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@app': path.resolve(__dirname, './src/app'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@ui': path.resolve(__dirname, './src/ui'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
      }
    }
  };
});

// export default defineConfig({
//   const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

//   return(
//     base: isGithubPages ? '/app-teachers/' : '/',

//     plugins: [
//       react(),
//       tailwindcss(),
//     ],
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, './src'),
//         '@app': path.resolve(__dirname, './src/app'),
//         '@assets': path.resolve(__dirname, './src/assets'),
//         '@components': path.resolve(__dirname, './src/components'),
//         '@pages': path.resolve(__dirname, './src/pages'),
//         '@styles': path.resolve(__dirname, './src/styles'),
//         '@ui': path.resolve(__dirname, './src/ui'),
//         '@hooks': path.resolve(__dirname, './src/hooks'),
//       }
//     }
//   )


// })




