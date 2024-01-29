const LOCALES: Locales = [
  {
    title: 'American English',
    value: 'en-US',
  },
  {
    title: 'British English',
    value: 'en-GB',
  },
  {
    title: 'French',
    value: 'fr-FR',
  },
]
const DISPLAYMODES: DisplayModes = ['browser', 'fullscreen', 'minimal-ui', 'standalone']
export default {
  type: 'string',
  name: 'locale',
  title: 'Language',
  description:
    "used for informing the browser the site's language. Should be a valid bcp47 language code like en, 'en-US', 'no' or 'nb-NO'",
  options: {
    list: LOCALES,
  },
  initialValue: LOCALES[0].value,
  // group: ['meta', 'og'],
}
