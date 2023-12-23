<script>
    import { onDestroy } from "svelte";
    import { counterStore } from "./counterStore";
    export let count = 0;

    const unsubscribe = counterStore.subscribe((value) => count = value);
    onDestroy(unsubscribe);
</script>

<p>The count is {count}</p>