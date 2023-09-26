<script lang="ts">
    import Button from "./Button.svelte";
    // @ts-ignore
    import Icon from "svelte-icons-pack/Icon.svelte";
    import VscDebugRestart from "svelte-icons-pack/vsc/VscDebugRestart";
</script>

<Button onclick={() => location.reload()} width="4.5rem" height="3.5rem">
    <div class="flex items-center justify-center">
        <Icon src={VscDebugRestart} />
    </div>
</Button>
