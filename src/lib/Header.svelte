<script>
  import bannerImg from "../assets/images/banner.png";
  import clock from "../assets/images/clock.png";
  import { _ } from "svelte-i18n";
  import LanguagePicker from "./LanguagePicker.svelte"

  function handleClick() {
    const element = document.getElementById("signup-container");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
</script>

<header class="mb-12 sm:mb-20">
  <div class="max-w-3xl container mx-auto">
    <img src="{bannerImg}" alt="12 hour comic challenge" />
    <div
      class="
        flex
        items-center
        bg-black
        h-9
        px-4
        text-white
        sm:text-2xl
        tracking-wider
      "
    >
      <div class="left-menu flex justify-center">
        <a href="/" class="text-orange-main hover:text-orange-main cursor-pointer">
          INFO
        </a>
      </div>
      <div class="-mt-5 image-wrapper">
        <img src="{clock}" alt="Klokke" width="100%" />
      </div>
      <div
        class="flex-1 flex items-center justify-end flex-2 space-x-4 pl-4"
      >
        <a
          href="/"
          class="
            pr-4
            h-full
            border-r-2 border-white
            text-gray-400
            cursor-not-allowed
          "
          >{$_('gallery')}</a
        >
        <button
          class="hover:text-orange-main cursor-pointer whitespace-nowrap"
          on:click="{handleClick}"
        >
          {$_('signUp')}
        </button>
        <LanguagePicker />
      </div>
    </div>
  </div>
</header>

<style>
  .left-menu {
    width: 27%;
  }
  .image-wrapper {
    width: 28%;
  }
</style>
