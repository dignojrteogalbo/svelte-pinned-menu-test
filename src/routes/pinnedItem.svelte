<script lang="ts">
    import type { Pinnable } from "./pinned";

    export let item: Pinnable;
</script>

<div class="content">
    {@html $item.content}
</div>