<script lang="ts">
    import { setContext, onMount } from "svelte";
    import NumbersForm from "./components/NumbersForm.svelte";
    import ValueTable from "./components/ValueTable.svelte";
    import RestartButton from "./components/RestartButton.svelte";
    import randomNumber from "./scripts/randomNumber";

    let isFinished: boolean = false;
    const random: number = randomNumber();
    setContext('random', random);

    onMount(() => {
        window.addEventListener("game-finished", function (evt) {
            isFinished = true;
        });
    });

</script>

<main>
    <div class="mx-auto text-center text-lg">
        <NumbersForm />
        <ValueTable />
        {#if isFinished}
            <RestartButton />
        {/if}
    </div>
</main>

<footer class="text-4xl mt-20 text-center">המשחק של ליהוא לויט</footer>