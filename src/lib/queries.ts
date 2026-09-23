import type {SanityDocument} from '@sanity/client'

// Type definitions for Sanity content
export interface Post {
  _id: string
  title: string
  slug: {current: string}
  publishedAt: string
  excerpt?: string
  body?: SanityDocument
  mainImage?: string
  tags?: string[]
  author?: string
}

export interface Project {
  _id: string
  title: string
  slug: {current: string}
  description: string
  image?: string
  techStack: string[]
  links: Array<{label: string; url: string}>
  featured: boolean
}

export interface Experience {
  _id: string
  company: string
  role: string
  period: string
  description: SanityDocument
}

export interface Skill {
  _id: string
  category: string
  items: Array<{
    name: string
    icon: string
    color: string
  }>
}

export interface SiteSettings {
  fullName: string
  title: string
  bio: string
  profilePicture?: string
  socialLinks: Array<{
    platform: string
    url?: string
    email?: string
  }>
}

// ─── GROQ Queries ─────────────────────────────────────────────────────────//
// Used with sanityClient.fetch() from src/lib/sanity.ts

export const POSTS_QUERY = `*[_type == "post" && defined(slug)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "mainImage": mainImage.asset->url,
  tags,
  author,
}`

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  "mainImage": mainImage.asset->url,
  tags,
  author,
}`

export const PROJECTS_QUERY = `*[_type == "project"] | order(coalesce(order, 0)) {
  _id,
  title,
  slug,
  description,
  "image": image.asset->url,
  techStack,
  links,
  featured,
}`

export const EXPERIENCES_QUERY = `*[_type == "experience"] | order(coalesce(order, 0)) {
  _id,
  company,
  role,
  period,
  description,
}`

export const SKILLS_QUERY = `*[_type == "skill"] | order(coalesce(order, 0)) {
  _id,
  category,
  items,
}`

export const SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  fullName,
  title,
  bio,
  "profilePicture": profilePicture.asset->url,
  socialLinks,
}`
