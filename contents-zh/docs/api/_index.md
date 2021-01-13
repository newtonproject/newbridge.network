---
title: API 文档
description: NewBridge API 文档
weight: 5
---

## NewBridge API 文档

欢迎使用面向开发人员的 NewBridge API 文档。

## 简介

加入正在构建下一代跨链服务的开发人员的行列。 我们全面的文档和指南可帮助您探索 NewBridge API 和功能，并尽快集成以使用 NewBridge。

## 前端 APIs

{{< section-list >}}

## XChain API

Chain API 是运行在 `main api` 及 `newbridge core`后端的程序，其接口以 [grpc](https://grpc.io) 定义。

`ChainAPI` 服务定义如下：

```grpc
// The ChainAPI service definition.
service ChainAPI {
    rpc CreateAccount (CreateAccountRequest) returns (CreateAccountReply) {}
}
```

- [CreateAccount](create-account.md)
