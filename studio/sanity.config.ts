import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Archiruz Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'placeholder',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
  ],
  document: {
    production: {
      // Documents published to production dataset
      // Use for preview / drafting
    },
  },
})
