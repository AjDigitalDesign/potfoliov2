// ./deskStructure.js
import {HomeIcon, EarthGlobeIcon} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Our singleton type has a list item with a custom child
      S.listItem()
        .title('Settings')
        .id('siteSettings')
        .icon(EarthGlobeIcon)
        .child(S.document().schemaType('siteMeta').documentId('siteSettings')),
      S.listItem()
        .title('Home')
        .id('homepage')
        .icon(HomeIcon)
        .child(S.document().schemaType('frontpage').documentId('frontpage')),
      S.listItem()
        .title('About')
        .id('aboutPage')
        .icon(HomeIcon)
        .child(S.document().schemaType('aboutpage').documentId('aboutpage')),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['siteMeta', 'frontpage', 'aboutpage', 'projectCategory'].includes(listItem.getId()),
      ),
    ])
