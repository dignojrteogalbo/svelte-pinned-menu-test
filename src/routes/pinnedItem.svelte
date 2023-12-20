<style>
    .content {
        padding: 25px 10px;
    }
</style>

<script lang="ts">
    import type { Writable } from "svelte/store";

    export let item: Writable<any>;
</script>

<div class="content">
    {$item.content}
</div>