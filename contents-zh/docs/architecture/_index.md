---
title: 架构
description: NewChain基本架构
weight: 3
---

## 架构

NewBridge 包含如下多个组件：

- NewBridge Core
  - Validator
- Secure Vault
  - Collection
  - Payout
- Monitor
- APIs
  - NewBridge Service API
  - XChain API

架构图:

![NewBridge Architecture](newbridge-architecture.jpg)

## Monitor

每个链均有各自的检测程序，检测程序会基于币种信息来检测系统内对应地址的收款情况。

## Secure Vault

### Collection

资金归并程序，每个链均有各自的归并程序；

- 归并方式
  - native
    针对类似 ETH/NEW 的资金，直接转账到离线钱包
  - burnable
    针对可销毁的 token，采用 burn 来销毁 token，不进行归并，一般针对跨链后的币种
  - transfer
    一般 token 采用 transfer 到离线钱包

### Payout

每个链均有一个支出程序，给用户兑付相应的 token

- native
  原生 coin 采用普通转账方式，由 MainAddress 统一转出
- mintable
  针对可铸币的 token，由 MainAddress 调用 mint 函数进行铸币
- transfer
  针对普通 token，由 MainAddress 从自己地址转出 token 到目标地址

## NewBridge Core (validator)

NewBridge Core 用来协调各条区块链程序的用户充值、手续费、兑付等程序；

- 输入
  - 用户充值地址
  - 系统内收币地址
  - 金额
- 输出
  - 用户收币地址
  - 金额
