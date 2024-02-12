import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

import mainSeo from './objects/mainSeo'
import home from './singletons/home'
import projects from './projects'
import projectCategory from './projectCategory'
import openGraph from './objects/openGraph'
import meta from './objects/meta'
import siteMeta from './documents/siteMeta'
import about from './singletons/about'
import testimonial from './objects/testimonial'
import blog from './singletons/blog'
import projectsPage from './singletons/projectsPage'

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  mainSeo,
  home,
  projects,
  projectCategory,
  openGraph,
  meta,
  siteMeta,
  about,
  testimonial,
  blog,
  projectsPage,
]
