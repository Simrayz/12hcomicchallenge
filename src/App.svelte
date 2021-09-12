<script>
  import Header from "./lib/Header.svelte";
  import Content from './lib/Content.svelte';
  import Footer from './lib/Footer.svelte';
  import "./assets/main.css";
</script>

<style>
  @font-face {
  font-family: "Phosphate-Solid";
  src: url("/fonts/PHOSPHATESOLID.TTF") format("ttf");
}
* {
  font-family: "Phosphate-Solid";
}

</style>

<div class="min-h-screen flex flex-col">
  <Header></Header>
  <main class="max-w-3xl container mx-auto flex-1 px-2">
    <Content />
    <div class="flex justify-center items-center my-20 space-x-8 text-5xl">
      <h3 class="mb-2">Interested?</h3>
      <button
        class="
          px-4
          py-2
          text-white
          bg-orange-main
          rounded-md
          hover:bg-orange-light

          uppercase
        "
      >
        Sign up
      </button>
    </div>
  </main>
  <Footer></Footer>
</div>
