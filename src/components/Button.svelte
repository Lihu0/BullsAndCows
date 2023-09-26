<script lang="ts">
    export let onclick: () => void = () => {};
    export let onDoubleClick: () => void = () => {};
    export let width: string = '3.5rem';
    export let height: string = '4.5rem';
    export let title: string = '';
</script>

<button
    on:click={onclick}
    on:dblclick={onDoubleClick}
    title={title}
    class="bg-gradient-to-tr from-teal-400 to-sky-500 dark:from-teal-500 dark:to-sky-600 border-emerald-400 dark:border-emerald-700 dark:text-white  m-2 hover:scale-110 transition-all
    border-solid border-4 rounded-md"
    style={`width: ${width}; height: ${height};`}
>
    <slot />
</button>
