<script>
  import spreadillu1 from "../assets/images/Spreadillu1.png";
  import spreadillu2 from "../assets/images/Spreadillu2.png";
  import { _ } from "svelte-i18n";
</script>

<div class="flex flex-col sm:flex-row items-center space-x-2 mb-8 px-4 sm:px-0">
  <img src="{spreadillu1}" alt="Tenkende person" width="200px" height="261px" />
  <div class="flex-1">
    <h1 class="text-3xl text-orange-main mb-1">{$_('what')}?</h1>
    <div class="bg-orange-light p-6 tracking-wide rounded-xl">
      <p class="mb-2">{$_('what.paragraph1')}</p>
      <p>{$_('what.paragraph2')}</p>
    </div>
  </div>
</div>
<div class="flex flex-col sm:flex-row items-center space-x-2 px-4 sm:px-0">
  <img src="{spreadillu2}" alt="Tenkende person" width="200px" height="261px" />
  <div class="flex-1">
    <h1 class="text-3xl text-orange-main mb-1">{$_('how')}?</h1>
    <div class="bg-orange-light p-4 tracking-wide rounded-xl">
      <p class="mb-2">{$_('how.paragraph1')}</p>
      <p class="mb-2">{$_('how.paragraph2')}</p>
      <p class="mb-2">{$_('how.paragraph3')}</p>
    </div>
  </div>
</div>
