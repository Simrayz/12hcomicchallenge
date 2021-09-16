<script>
  import bannerImg from "../assets/images/banner.png";
  import clock from "../assets/images/clock.png";
  import { _ } from "svelte-i18n";
</script>

<header class="mb-12 sm:mb-20">
  <div class="max-w-3xl container mx-auto">
    <img src="{bannerImg}" />
    <div
      class="
        flex
        items-center
        bg-black
        h-9
        px-4
        text-white text-2xl
        tracking-wider
      "
    >
      <div class="left-menu flex justify-center">
        <a class="text-orange-main hover:text-orange-main cursor-pointer"
          >INFO</a
        >
      </div>
      <div class="-mt-5 image-wrapper">
        <img src="{clock}" alt="Klokke" width="100%" />
      </div>
      <div
        class="flex-1 flex items-center justify-center flex-2 space-x-4 pl-4"
      >
        <a
          class="
            pr-4
            h-full
            border-r-2 border-white
            hover:text-orange-main
            cursor-pointer
          "
          >{$_('gallery')}</a
        >
        <a class="hover:text-orange-main cursor-pointer">{$_('signUp')}</a>
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
