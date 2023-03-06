import type { PageLoad } from './$types'
import type { Item } from '$lib/types/item'

export const load = (async ({fetch}) => {
    const response = await fetch('api/items');

    return {
        items: await response.json()
    }
}) satisfies PageLoad;