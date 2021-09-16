import { addMessages, locale, getLocaleFromNavigator } from 'svelte-i18n'
import en from './en.json'
import nb from './nb.json'

addMessages('en', en)
addMessages('nb', nb)

locale.set(getLocaleFromNavigator())