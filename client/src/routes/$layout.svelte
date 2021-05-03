<script lang="ts">
  import '../global.postcss'
  import { theme } from './store'
  import { onMount } from 'svelte'
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
</script>

<div class="float-right w-max"><ToggleTheme/></div>
<main>
  <slot />
</main>
