import { writable } from "svelte/store";
import type { Pinnable } from "../pinned.ts";

export const stuff: Pinnable = writable({ id: "stuff", content: "Stuff" });
export const otherStuff: Pinnable = writable({ id: "other-stuff", content: "Other Stuff" });
export const moreStuff: Pinnable = writable({ id: "more-stuff", content: "More Stuff" });