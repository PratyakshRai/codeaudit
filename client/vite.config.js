import { defineConfig } from 'vite';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
export default defineConfig({root,build:{outDir:'../dist',emptyOutDir:true},server:{port:5173,proxy:{'/api':'http://localhost:8000'}}});
