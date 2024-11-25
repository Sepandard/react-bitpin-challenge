import { OrderType } from "./order";

const baseActive = '/api/v2/mth/actives';

export const ACTIVE_ENDPOINT = {
    base: `${baseActive}`,
    byId: (marketId: string) => `${baseActive}/${marketId}/`,
} as const


const baseMatch = '/api/v1/mth/matches';

export const MATCH_ENDPOINT = {
    base: `${baseMatch}`,
    byId: (marketId: string) => `${baseMatch}/${marketId}/`,
} as const
