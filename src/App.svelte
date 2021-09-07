<script>
  import neichaImg from "./assets/neicha.jpeg";
  import Header from "./lib/Header.svelte";
  import "./assets/main.css";
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="max-w-2xl container mx-auto flex-1 px-2">
    <div
      class="flex items-center space-x-2 bg-white shadow-md rounded-md p-4 my-4"
    >
      <img src="{neichaImg}" class="h-32" alt="Neicha" />
      <p>
        In a soldier’s stance, I aimed my hand. At the mongrel dogs who teach.
        Fearing not that I’d become my enemy. In the instant that I preach. My
        pathway led by confusion boats. Mutiny from stern to bow. Ah, but I was
        so much older then. I’m younger than that now.
      </p>
    </div>
    <div
      class="flex items-center space-x-2 bg-white shadow-md rounded-md p-4 mb-4"
    >
      <img src="{neichaImg}" class="h-32" alt="Neicha" />
      <p>
        Under that apple suckling tree. Oh yeah! Under that apple suckling tree.
        Oh yeah! Underneath that tree. There’s just gonna be you and me.
        Underneath that apple suckling tree. Oh yeah!
      </p>
    </div>
    <div class="flex flex-col justify-center items-center item mb-4">
      <h3 class="text-xl mb-2">Interested?</h3>
      <button
        class="
          px-2
          py-1
          text-white
          bg-blue-600
          rounded-md
          hover:bg-blue-500
          w-20
          uppercase
        "
      >
        Sign up
      </button>
    </div>
  </main>
  <footer class="bg-white shadow-inner">
    <div class="max-w-2xl container mx-auto p-2">Abelweb &copy; 2021</div>
  </footer>
</div>
