import { page } from '$app/stores';
import type { Models } from '@appwrite.io/console';
import { derived } from 'svelte/store';

export const version = derived(page, ($page) => $page.data.version as string | null);
export const consoleVariables = derived(
    page,
    async ($page) => (await $page.data.consoleVariables) as Models.ConsoleVariables
);
export async function isVcsEnabled(store: Promise<Models.ConsoleVariables>) {
    return (await store)?._APP_VCS_ENABLED === true;
}
