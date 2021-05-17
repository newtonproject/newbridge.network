---
title: (Core) Pairs Info API
description: Lookup available chain networks and asset paris for different bridge directions
author: "Vie Yang"
weight: 11
---

## `GET` Pairs Info

**`GET` /v2/newbridge/pairs**

Returns a JSON structure with details of the NewBridge supported blockchain network and assets info.

## API parameters

```bash
curl -v https://replace-api-domain.ext/newbridge/pairs
```

## Response `200`

```json
{
  "pairs": [
    {
      "bridge_pair": "newchain-ethereum",
      "eth2new_fee_min_amount": "10000",
      "eth2new_fee_percent": "0.000000",
      "eth2new_min_deposit_amount": "100000",
      "ethereum_asset": {
        "address": "0xa6075A8929F53e2dCc2A578d117f3Fb234a01F15",
        "raw_address": "0xa6075A8929F53e2dCc2A578d117f3Fb234a01F15",
        "name": "Newton",
        "symbol": "NEW",
        "decimals": 18,
        "asset_type": "ERC20",
        "chain_id": 4,
        "sub_network": "Rinkeby",
        "network_name": "Ethereum",
        "network_prefix": "eth"
      },
      "new2eth_fee_min_amount": "20000",
      "new2eth_fee_percent": "0.000000",
      "new2eth_min_deposit_amount": "50000",
      "newchain_asset": {
        "address": "",
        "raw_address": "",
        "name": "Newton",
        "symbol": "NEW",
        "decimals": 18,
        "asset_type": "Coin",
        "chain_id": 1007,
        "sub_network": "Testnet",
        "network_name": "NewChain",
        "network_prefix": "new"
      }
    },
    {
      "bridge_pair": "newchain-hecochain",
      "heco2new_fee_min_amount": "100",
      "heco2new_fee_percent": "0.000000",
      "heco2new_min_deposit_amount": "10000",
      "hecochain_asset": {
        "address": "0x0C1e6DFD61aA2a82A5A8bB6A6b4b378F95624c4B",
        "raw_address": "0x0C1e6DFD61aA2a82A5A8bB6A6b4b378F95624c4B",
        "name": "Newton",
        "symbol": "NEW",
        "decimals": 18,
        "asset_type": "HRC20",
        "chain_id": 256,
        "sub_network": "HecoTestnet",
        "network_name": "HecoChain",
        "network_prefix": "heco"
      },
      "new2heco_fee_min_amount": "100",
      "new2heco_fee_percent": "0.000000",
      "new2heco_min_deposit_amount": "10000",
      "newchain_asset": {
        "address": "",
        "raw_address": "",
        "name": "Newton",
        "symbol": "NEW",
        "decimals": 18,
        "asset_type": "Coin",
        "chain_id": 1007,
        "sub_network": "Testnet",
        "network_name": "NewChain",
        "network_prefix": "new"
      }
    }
  ]
}
```

| Name                      | Type   | Description                                                                                                                                             |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| newchain_asset            | Token  | Assets on NewChain                                                                                                                                      |
| ethereum_asset            | Token  | Assets on Ethereum family, the name can be changed to `ethereum_asset` , `hecochain_asset` or `bschain_asset`.                                          |
| <A2B>\_min_deposit_amount | string | Minium deposit amount for `<A2B>` direction. `<A2B>` can be `new2eth`, `new2heco` or `new2bsc`.                                                         |
| <B2A>min_deposit_amount   | string | Minium deposit amount for `<B2A>` direction. `<B2A>` can be `eth2new`, `heco2new` or `bsc2new`.                                                         |
| <A2B>\_fee_percent        | string | Fee percentage for `<A2B>` direction. `<A2B>` can be `new2eth`, `new2heco` or `new2bsc`.                                                                |
| <B2A>\_fee_percent        | string | Fee percentage for `eth2new` direction. `<B2A>` can be `eth2new`, `heco2new` or `bsc2new`.                                                              |
| <A2B>\_fee_min_amount     | string | Minium fee for `<A2B>` direction. `<A2B>` can be `new2eth`, `new2heco` or `new2bsc`.                                                                    |
| <B2A>\_fee_min_amount     | string | Minium fee for `eth2new` direction. `<B2A>` can be `eth2new`, `heco2new` or `bsc2new`.                                                                  |
| bridge_pair               | string | bridage pair blockchain name, merge of `NewChain` family and `Ethtereum` family, such as `newchain-ethereum`, `newchain-hecochain`, `newchain-bschain`. |

### Fee

The actual amount of fee will use the larger one in `fee_percent` and `fee_min_amount` after calculation.

### `Token` type definition

| Name           | Type   | Description                                                                                                       |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| address        | string | Contract address. `0x` format for ethereum, `NEW` address for newchain. `null` for chain coin like `ETH` or `NEW` |
| raw_address    | string | Contract address in `0x` format.                                                                                  |
| name           | string | Asset Name                                                                                                        |
| symbol         | string | Asset Symbol                                                                                                      |
| decimals       | uint8  | Asset Presision.                                                                                                  |
| asset_type     | string | Asset Type. `Coin` or `NRC6` for NewChain. `Coin` or `ERC20` for Ethereum.                                        |
| chain_id       | int    | ChainID                                                                                                           |
| sub_network    | string | Sub Network Name. `Mainnet` or `Testnet` for NewChain, `Mainnet` or `Rinkeby` for Ethereum.                       |
| network_name   | string | The network name, such as `NewChain`, `Ethereum`, `HecoChain`, `BSChain`.                                         |
| network_prefix | string | The prefix of network, such as `new`, `eth`, `heco`, `bsc`.                                                       |
