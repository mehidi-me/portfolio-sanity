import {defineQuery} from 'next-sanity'

export const homePageQuery = defineQuery(`{
'home':  *[_type == "home" && _id == "home"][0]{
  ...,
portfolioSection{
  ...,
  portfolios[]->{
    ...,
    
portfolioCategory->
  }
}
},
'portfolioCategory': *[_type == "portfolioCategory"]
}
`)

export const pagesBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`)

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`)

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    footer,
    menuItems[],
    ogImage,
    menuMainButton,
    adminEmail,
    socialLink,
  }
`)

export const slugsByTypeQuery = defineQuery(`
  *[_type == $type && defined(slug.current)]{"slug": slug.current}
`)
