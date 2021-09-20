import { addMessages, register, init } from 'svelte-i18n'
import en from './en.json'
import nb from './nb.json'

addMessages('en', en)
addMessages('nb', nb)

register('en', () => import('./.en.json'))
register('nb', () => import('./nb.json'))

init({
  fallbackLocale: 'nb',
  initialLocale: 'nb'
})