<script lang="ts">
    import { setContext } from "svelte";
    import NumbersForm from "./components/NumbersForm.svelte";
    import ValueTable from "./components/ValueTable.svelte";
    import randomNumber from "./scripts/randomNumber";

    const random: number = randomNumber();
    setContext('random', random);

</script>

<main>
    <div class="mx-auto text-center text-lg">
        <NumbersForm />
        <ValueTable />
    </div>
</main>

<footer class="text-4xl mt-20 text-center">המשחק של ליהוא לויט</footer>