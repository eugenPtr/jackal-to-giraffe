import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import zipPack from 'vite-plugin-zip-pack';

import manifest from './src/manifest'
//@ts-ignore
import {config} from './src/read_pages_folder'
import copy from 'rollup-plugin-copy'
export default defineConfig(({ mode }) => {  
  return {  
    build: {  
      emptyOutDir: true,  
        outDir: 'build',  
        rollupOptions: {  
          input: config,
          output: {  
            chunkFileNames: 'assets/chunk-[hash].js',  
          },  
      },  
    },  

    plugins: [
      crx({ manifest }), 
      react(),
      // copy({
      //   targets: [
      //     { src: 'src/content/index.css', dest: 'build/src/content' }
      //   ]
      // }),
      zipPack({  
        outDir: `package`,  
        inDir: 'build',  
        outFileName: `${manifest.short_name ?? manifest.name.replaceAll(" ", "-")}-extension-v${manifest.version}.zip`,
      }),
    ],  
    }  
})