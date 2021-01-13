---
title: API Endpoints
description: API Endpoints for NewBridge
weight: 1
---

We provided public API addresses for NewBridge.

## NewBridge Core API

NewBridge Core API provides lookup services for NewBridge App and 3rd-party apps to use NewBridge. There are two different _environments_, **Production** and **Test**.

**Production** environment operates for each blockchain's _Main Networks_.

**Test** environment is for testing purpose only and operates for selectd _Test Networks_ for each blockchain.

### Production Networks

`https://api.end.point.to.be.replaced`

### Test Networks

`https://api.end.point.to.be.replaced`

{{< hint warning >}}
Transations on _Test Networks_ are for testing purpose only.
{{< /hint >}}

## XChain API

XChain api is backend api for `Main API` and `NewBridgeCore`,
chainapi is defined in [grpc](https://grpc.io)

The Chain API server is defined as follow:

```grpc
// The ChainAPI service definition.
service ChainAPI {
    rpc CreateAccount (CreateAccountRequest) returns (CreateAccountReply) {}
}
```

Currently there are no public XChain API Endpoints provided by Newton Project.
