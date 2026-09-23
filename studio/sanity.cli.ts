import {defineCli} from 'sanity/cli'

export default defineCli({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'placeholder',
  },
})
