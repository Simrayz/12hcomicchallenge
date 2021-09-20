<script>
  import isakLogo from "../assets/images/ISAK.png";
  import neichaLogo from "../assets/images/NAlogo.svg";
  import { _ } from "svelte-i18n";
</script>

<style>
  .neicha-logo {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
  .neicha-logo:hover {
    filter: invert(90%);
  }
  .isak-logo:hover {
    filter: brightness(90%);
  }
</style>

<footer>
  <div
    class="
      flex
      items-center
      justify-between
      space-x-4
      bg-black
      max-w-3xl
      mx-auto
      px-4
      py-6
    "
  >
    <div class="flex space-x-4">
      <a href="https://isak.no/">
        <img
          src="{isakLogo}"
          class="isak-logo"
          height="100px"
          width="100px"
          alt="ISAK logo"
        />
      </a>
      <a href="https://neichasart.com">
        <img
          src="{neichaLogo}"
          class="neicha-logo"
          height="100px"
          width="100px"
          alt="Neicha's Art logo"
        />
      </a>
    </div>
    <div class="text-white px-4 tracking-wide">
      <p class="mb-2">
        <a href="https://neichasart.com" class="hover:text-orange-light"
          >Neicha's Art</a
        >
        &copy; 2021
      </p>
      <p>
        {$_('madeBy')}
        <a href="https://abelweb.no" class="hover:text-orange-light"
          >Abelweb.no</a
        >
      </p>
    </div>
  </div>
</footer>
