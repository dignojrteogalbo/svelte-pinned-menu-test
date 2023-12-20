<style>
    .pinned {
        display: flex;
        flex-direction: column;
        width: 220px;
        position: fixed;
        bottom: 0;
        right: 0;
        border-radius: 20px 20px 0px 0px;
        border: 1px solid grey;
        max-height: 700px;
        overflow-y: scroll;
    }

    .toggle {
        position: sticky;
        top: calc(100% - 700px);
        border-radius: 20px 20px 0px 0px;
        border: none;
        border-bottom: 1px solid grey;
        width: auto;
    }

    .item {
        display: flex;
        width: auto;
        border: 1px solid grey;
        border-top: none;
        border-left: none;
        border-right: none;
        background-color: white;
    }

    .pinned :last-child {
        border-bottom: none;
    }

    .item :global(.content) {
        padding: 25px 10px;
    }

    .item :global(.content img) {
        max-width: 150px;
    }

    .item button {
        border: none;
        background-color: #db2828;
        color: white;
        margin-left: auto;
        width: 25px;
        text-align: center;
    }
</style>

<script lang="ts">
    import { itemStore, type Pinnable } from "./pinned.ts";
    import { onDestroy } from "svelte";
    import PinnedItem from "./pinnedItem.svelte";

    let show = false;
    let items: any[] = [];

    function showPinned() {
        console.log(`showPinned() called: show is ${show}`);
        show = !show;
    }

    function removeItem(remove: Pinnable) {
        console.log(`removeItem() called: ${remove}`);
        itemStore.update((items) =>
            items.filter((item) => item != remove)
        );
    }

    const unsubscribe = itemStore.subscribe((values) => items = values);
    onDestroy(unsubscribe);
</script>

<div class="pinned">
    <button on:click={showPinned} class="toggle"><h1>Pinned</h1></button>
    {#if show}
    <div class="items">
        {#if items.length != 0}
            {#each items as item}
            <div class="item">
                <PinnedItem bind:item={item} />
                <button on:click={() => removeItem(item)}>X</button>
            </div>
            {/each}
        {:else}
            <div class="item">
                <div class="content">
                    No pinned items!
                </div>
            </div>
        {/if}
    </div>
    {/if}
</div>
<slot></slot>