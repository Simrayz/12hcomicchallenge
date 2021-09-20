import { register, init } from 'svelte-i18n'

register('en', () => import('./en.json'))
register('nb', () => import('./nb.json'))

init({
  fallbackLocale: 'nb',
  initialLocale: 'nb'
})