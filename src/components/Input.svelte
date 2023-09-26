<script lang="ts">
    import { onMount } from "svelte"
    let InputValue: String = '';

    onMount(() => {
        window.addEventListener("number-click", function (evt) {
            //@ts-ignore
            const number: number = evt.detail;
            InputValue = (InputValue === null ? '' : InputValue) + number.toString();
        });
        window.addEventListener("delete-click", function (evt) {
            InputValue = InputValue.slice(0, -1);
        });
        window.addEventListener("enter-click", function (evt) {
            const InputSet: Set<string> = new Set(InputValue.split(''));
            if (InputValue[0] === '0') {
                alert('אין להזין מספרים שמתחילים באפס');
                InputValue = '';
                return;
            }
            if (InputValue.length !== 4) {
                alert('אין להזין מספרים שאינם באורך 4 ספרות');
                InputValue = '';
                return;
            }
            if (InputSet.size !== 4) {
                alert('אין להזין מספרים עם ספרות זהות');
                InputValue = '';
                return;
            }
            
            const event = new CustomEvent("enter-click-table", {
                detail: InputValue,
            });
            window.dispatchEvent(event);
            InputValue = '';
        });
        window.addEventListener("delete-double-click", function (evt) {
            InputValue = '';
        });
    });
</script>

<input
    type="number"
    inputmode="numeric"
    class="border-[2px] border-slate-800 dark:border-white bg-transparent  placeholder:text-right rounded-md"
    bind:value={InputValue}
    min="1234"
    max="9876"
    placeholder="מספר"
/>