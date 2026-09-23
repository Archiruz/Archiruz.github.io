import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || 'placeholder'

export const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === 'production', // `false` to get fresh data
  apiVersion: '2026-09-23', // use current UTC date
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// ─── GROQ Queries ─────────────────────────────────────────────────────────//

export const postQueries = {
  allPosts: `*[_type == "post" && defined(slug)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImage": mainImage.asset->url,
    tags,
    author,
  }`,

  singlePost: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "mainImage": mainImage.asset->url,
    tags,
    author,
  }`,
}

export const projectQueries = {
  allProjects: `*[_type == "project"] | order(coalesce(order, 0)) {
    _id,
    title,
    slug,
    description,
    "image": image.asset->url,
    techStack,
    links,
    featured,
  }`,
}

export const experienceQueries = {
  allExperiences: `*[_type == "experience"] | order(coalesce(order, 0)) {
    _id,
    company,
    role,
    period,
    description,
  }`,
}

export const skillQueries = {
  allSkills: `*[_type == "skill"] | order(coalesce(order, 0)) {
    _id,
    category,
    items,
  }`,
}

export const siteSettingsQueries = {
  settings: `*[_type == "siteSettings"][0] {
    fullName,
    title,
    bio,
    "profilePicture": profilePicture.asset->url,
    socialLinks,
  }`,
}
