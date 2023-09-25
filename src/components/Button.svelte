<script lang="ts">
    export let onclick: () => void = () => {};
</script>

<button
    on:click={onclick}
    class="bg-gradient-to-tr from-teal-400 to-sky-500 dark:from-teal-500 dark:to-sky-600 border-emerald-400 dark:border-emerald-700 dark:text-white w-14 h-[4.5rem] m-2 hover:scale-110 transition-all
    border-solid border-4 rounded-md"
>
    <slot />
</button>
