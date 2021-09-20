<script>
  import { locale, locales } from "svelte-i18n";

  function getEmoji(locale) {
    if (locale === "nb") {
      return "🇳🇴";
    } else {
      return "🇬🇧";
    }
  }
</script>

<select bind:value="{$locale}" class="appearance-none bg-transparent">
  {#each $locales as locale}
  <option value="{locale}" class="px-2">&nbsp;{getEmoji(locale)}&nbsp;</option>
  {/each}
</select>
