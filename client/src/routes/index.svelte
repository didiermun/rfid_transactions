<script lang="ts">
  import { theme } from './store'
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  import Counter from '$lib/Counter.svelte'
  import Timer from '$lib/Timer.svelte'
</script>

<svelte:head>
  <title>RFID Data View</title>
</svelte:head>
<h1 class="text-2xl font-extrabold mb-2">All Transactions</h1>

<Timer />
<Counter />

<style lang="postcss">
  p {
    @apply text-lg;
    @apply mt-0 mb-1;

  }
  code {
    @apply transition-colors duration-500;
    @apply px-1;
    @apply bg-gray-200;
    :global(.dark) & {
      @apply bg-gray-800;
    }
  }
  pre {
    @apply transition-colors duration-500;
    @apply text-left p-2 bg-gray-200;
    :global(.dark) & {
      @apply bg-gray-800;
    }
  }
</style>
