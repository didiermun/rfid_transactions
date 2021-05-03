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
  import { goto } from '$app/navigation';
</script>

<div class="float-right w-max flex"><button class="mx-8" on:click={()=>goto('/new')}>Register</button><ToggleTheme/></div>
<main>
  <slot />
</main>
