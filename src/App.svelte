<script>
  import Header from "./lib/Header.svelte";
  import Content from './lib/Content.svelte';
  import Footer from './lib/Footer.svelte';
  import "./assets/main.css";
  import "../locales/i18n";
  import { _ } from 'svelte-i18n';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Wendy+One&display=swap');
  :root {
    font-family: 'Wendy One', sans-serif;
    text-transform: uppercase;
  }
</style>

<div class="min-h-screen flex flex-col">
  <Header></Header>
  <main class="max-w-3xl container mx-auto flex-1 px-2 mt-4">
    <Content />
    <div class="flex flex-col sm:flex-row justify-center items-center my-20 sm:space-x-8 text-4xl">
      <h3 class="sm:mb-2">{$_('interested?')}</h3>
      <button
        class="
          mt-2
          px-4
          py-2
          sm:mt-0
          text-white
          bg-orange-main
          rounded-md
          hover:bg-orange-light
          uppercase
        "
      >
        {$_('signUp')}
      </button>
    </div>
  </main>
  <Footer></Footer>
</div>
