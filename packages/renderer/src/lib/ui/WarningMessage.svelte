<script lang="ts">
import Fa from 'svelte-fa/src/fa.svelte';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Tooltip from './Tooltip.svelte';

export let error: string;
export let icon = false;
</script>

{#if icon}
  {#if error !== undefined && error !== ''}
    <Tooltip tip="{error}" top>
      <Fa size="18" class="cursor-pointer text-amber-500" icon="{faTriangleExclamation}" />
    </Tooltip>
  {/if}
{:else}
  <div
    class="text-amber-500 p-1 flex flex-row items-top {$$props.class}"
    class:opacity-0="{error === undefined || error === ''}">
    <Fa size="18" class="cursor-pointer text-amber-500 mt-1" icon="{faTriangleExclamation}" />
    <div class="ml-2">{error}</div>
  </div>
{/if}
