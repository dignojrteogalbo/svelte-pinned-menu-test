import { writable } from "svelte/store";
import type { Pinnable } from "../pinned";

export const counterStore: Pinnable = writable({id: "counter", content: "The count is 0."});