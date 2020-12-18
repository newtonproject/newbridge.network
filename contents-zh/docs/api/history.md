---
title: (Core) Account History API
description: 返回一个JSON结构，其中包含指定帐户的NewBridge桥接历史记录的详细信息
weight: 13
---

# (Core) Account History API

## `GET` Account History

**`GET` /v1/newbridge/history**

返回一个 JSON 结构，其中包含指定帐户的 NewBridge 桥接历史记录的详细信

## API parameters

### 请求参数

| 名称             | In    | 类型   | 描述                                                                                                        | Enum | Default |
| ---------------- | ----- | ------ | ----------------------------------------------------------------------------------------------------------- | ---- | ------- |
| newchain_address | query | string | NewChain 的地址，可以是 NEW 开头或者 0x 开头的地址。`newchain_address` 和 `ethereum_address` 至少需要一个。 |      |         |
| ethereum_address | query | string | 0x 开头的 ethereum 地址。`newchain_address` 和 `ethereum_address` 至少需要一个。                            |      |         |

### Optional

| **Name**  | **In** | **Type** | **Description**             | **Enum** | **Default** |
| --------- | ------ | -------- | --------------------------- | -------- | ----------- |
| page_id   | query  | integer  | Page number.                |          |             |
| page_size | query  | integer  | Number of results per page. |          |             |

```bash
curl -v https://replace-api-domain.ext/newbridge/history?newchain_address=0x97549E368AcaFdCAE786BB93D98379f1D1561a29&page_size=1
```

## 返回 `200`

```json
{
  "newchain_address": "NEW17zS9ZvgGV1EaT8KT2tLjqRvQbcApjFot8xj",
  "newchain_raw_address": "0x97549E368AcaFdCAE786BB93D98379f1D1561a29",
  "page_id": "1",
  "page_size": "1",
  "total_page": "6",
  "total_history": "53",
  "list": [
    {
      "from_network": "Ethereum",
      "from_sub_network": "Rinkeby",
      "from_chain_id": "4",
      "to_network": "NewChain",
      "to_sub_network": "Testnet",
      "to_chain_id": "1007",
      "from_address": "0xad61cc6653B62b7C05Bd2F593Bc49d22Fb901A9c",
      "from_raw_address": "0xad61cc6653B62b7C05Bd2F593Bc49d22Fb901A9c",
      "to_address": "NEW17zS9ZvgGV1EaT8KT2tLjqRvQbcApjFot8xj",
      "to_raw_address": "0x97549E368AcaFdCAE786BB93D98379f1D1561a29",
      "from_tx_hash": "0xad9716fdd2ae16840a96360e54dd683511a20a68c9e855c58ea333a3930206b2",
      "from_asset_type": "Token",
      "from_asset_name": "TestNet Launch",
      "from_asset_symbol": "TL",
      "from_asset_address": "0xCc5b1517bae326F8E147D6bEd17F5F53bc2f85c5",
      "to_tx_hash": "0x54b61d26348c2f6b71866620325c3ec39eaa8c5d1488cecc7f5b28422583bcc9",
      "to_asset_type": "Token",
      "to_asset_name": "TestNet Launch",
      "to_asset_symbol": "TL",
      "to_asset_address": "0x243a5C81C1F9970aa3e6f51d73fC13eE853FC338",
      "amount_requested": "14",
      "amount_fulfilled": "14",
      "fee": "0",
      "status": "Confirmed"
    }
  ]
}
```

| **Name**             | **Type**      | **Description**                                                                             |
| -------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| newchain_address     | String        | `NEW`开头的 NewChain 地址。 `newchain_address` 或者 `ethereum_address` 之中的一个会被返回。 |
| ethereum_address     | String        | `0x`开头的 ethereum 地址。 `newchain_address` 或者 `ethereum_address` 之中的一个会被返回。  |
| newchain_raw_address | String        | `0x`开头的 NewChain 地址                                                                    |
| page_id              | int           | 页编号。                                                                                    |
| page_size            | int           | 页大小。                                                                                    |
| total_page           | int           | 总页数                                                                                      |
| total_history        | int           | 总结果数                                                                                    |
| list                 | BridgeHistory | `BridgeHistory` 类型的数组                                                                  |

### Error Codes

| **Status** | **Code**                     | **Description**                              | **Params**                                                           |
| ---------- | ---------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| **400**    | account_not_found            | Acount was not found                         |                                                                      |
| **400**    | address_is_in_invalid_format | Requested address format is not valid        | { "type" => "newchain_address" } or { "type" => "ethereum_address" } |
| **429**    | too_many_requests            | Too many requests have been made to the api. |                                                                      |
| **500**    | internal_server_error        | Internal server error                        |                                                                      |
| **503**    | service_unavailable          | Service is temporary unavailable             |                                                                      |
