<script lang="ts">
    import Button from "./Button.svelte";
    // @ts-ignore
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiDelete from "svelte-icons-pack/fi/FiDelete";
    import AiOutlineEnter from "svelte-icons-pack/ai/AiOutlineEnter";
    let numbers: Array<number> = Array.from({ length: 9 }, (_, i) => i + 1);
    let isDarkMode: boolean = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    function handleColorSchemeChange(event: MediaQueryListEvent) {
        isDarkMode = event.matches;
    }

    const colorSchemeListener = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );
    colorSchemeListener.addEventListener("change", handleColorSchemeChange);

    function handleNumberClick(number: number) {
        const event = new CustomEvent("number-click", {
            detail: number,
        });

        window.dispatchEvent(event);
    }

    function handleDeleteClick() {
        const event = new CustomEvent("delete-click");

        window.dispatchEvent(event);
    }

    function handleDeleteDoubleClick() {
        const event = new CustomEvent("delete-double-click");

        window.dispatchEvent(event);
    }

    function handelEnterClick() {
        const event = new CustomEvent("enter-click");

        window.dispatchEvent(event);
    }
</script>

<div class="inline-grid grid-cols-3">
    {#each numbers as number}
        <Button onclick={() => handleNumberClick(number)} title={number.toString()}>{number}</Button>
    {/each}
    <Button onclick={() => handleNumberClick(0)} title="0">0</Button>
    <Button onclick={handelEnterClick}>
        <div class="flex items-center justify-center" title="הזן מספר">
            <Icon src={AiOutlineEnter} color={isDarkMode ? "white" : ""} />
        </div>
    </Button>
    <Button onclick={handleDeleteClick} onDoubleClick={handleDeleteDoubleClick} title="מחק ספרה אחת">
        <div class="flex items-center justify-center">
            <Icon src={FiDelete} />
        </div>
    </Button>
</div>
