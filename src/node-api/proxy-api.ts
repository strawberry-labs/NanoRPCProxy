import {TokenAPIActions} from "./token-api";

export type RPCAction = TokenAPIActions | 'mnano_to_raw' | 'mnano_from_raw' | 'process' | 'work_generate' | 'price' | 'verified_accounts' | 'fetch_rates' | 'fetch_currencies' | 'accounts_frontiers' | 'accounts_balances' | 'accounts_pending' | 'pending'

export interface ProxyRPCRequest {
    action: RPCAction
    token_amount: number
    token_key: string
    amount: string
    watch_work: string
    difficulty: string | undefined
    use_peers: string | undefined
    user: string | undefined
    api_key: string | undefined
    timeout: number
    count: number
    account_filter?: string[]
    hash: string
    accounts: string[]
    account: string
}

export interface VerifiedAccount {
    votingweight: number
    delegators: number
    uptime: number
    score: number
    account: string
    alias: string
}
