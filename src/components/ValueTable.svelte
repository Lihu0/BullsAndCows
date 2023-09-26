<script lang="ts">
    import { getContext, onMount } from "svelte";
    import calculateBullsAndCows from "../scripts/calulateBullsAndCows";

    const random: number = getContext("random");

    let tableValues: Array<{
        input: string;
        bulls: number;
        cows: number;
        attempt: number;
    }> = [];

    onMount(() => {
        window.addEventListener("enter-click-table", function (evt) {
            //@ts-ignore
            const input: string = evt.detail;
            const { bulls, cows } = calculateBullsAndCows(input, random);
            tableValues = [
                ...tableValues,
                {
                    input,
                    bulls,
                    cows,
                    attempt: tableValues.length + 1,
                },
            ];
            if (input === random.toString()) {
                alert(`כל הכבוד ניצחת ב ${tableValues.length} ניסיונות`);
                const event = new CustomEvent("game-finished", {});
                window.dispatchEvent(event);
            }
        });
    });
</script>

<table class="w-[66dvw] text-lg mt-10 mx-auto">
    <thead>
        <tr>
            <th>ניחוש</th>
            <th>בולים</th>
            <th>פגיעות</th>
            <th>ניסיון</th>
        </tr>
    </thead>
    <tbody class="border-t border-zinc-300">
        {#each tableValues as row (row.attempt)}
            <tr>
                <td>{row.input}</td>
                <td>{row.bulls}</td>
                <td>{row.cows}</td>
                <td>{row.attempt}</td>
            </tr>
        {/each}
    </tbody>
</table>
