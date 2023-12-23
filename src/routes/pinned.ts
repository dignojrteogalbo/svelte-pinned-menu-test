import type { ComponentType } from "svelte";
import { writable, type Writable } from "svelte/store";

export type Pinnable = {
    id: string;
    component: ComponentType;
}

export const itemStore: Writable<Pinnable[]> = writable([]);

export function pinItem(add: Pinnable) {
    console.log(`pinItem() called: ${add}`);
    itemStore.update((items) =>
        [add, ...items.filter((item) => item != add)]
    );
}

export function removeItem(remove: Pinnable) {
    console.log(`removeItem() called: ${remove}`);
    itemStore.update((items) =>
        items.filter((item) => item != remove)
    );
}