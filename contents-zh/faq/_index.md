---
title: 常见问题
menu:
  main:
    name: 常见问题
    weight: 3
---

## 什么是 NewBridge?

NewBridge 跨链技术实现了 NewChain 和其他区块链间的数字资产互通，现已支持 NewChain 和以太坊之间的三种通证 NEW、USDT、ETH 互通，以后会陆续增加更多资产。

## NewBridge 能做什么？

NewBridge 实现了 NewChain 和其他区块链间的数字资产互通，即: 可以将你的 ETH 通过 NewBridge 跨链到 NewChain，使用 NETH 参与牛顿生态，例如在 NewSwap 提供 NETH-NEW 的交易对，进行流动性挖矿; 可以将 NEW 通过 NewBridge 跨链到以太坊，使用 WNEW 参与以太坊生态等等...

## NewBridge 怎么用?

使用前提:

- 浏览器中使用: 需要安装浏览器插件 [Chrome 插件](https://chrome.google.com/webstore/detail/newmask/moaehhjcfiempcbcglpmmppcdphmgkef?hl=zh-CN) 或者 [Firefox 插件](https://addons.mozilla.org/zh-CN/firefox/addon/newmask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)。

- 手机中操作，需要下载[NewPay](https://www.newtonproject.org/newpay/)。

### 将 NewChain 资产转移到以太坊:

确保要转移的资产在 NewChain 上的余额充足，在目标地址的输入框中输入以太坊钱包的地址，输入转账额度，点击`跨链转出`, 然后会弹出授权转账页面，确认授权，即可将 NewChain 上的资产转移到以太坊上的对应地址。

### 将以太坊资产转移到 NewChain:

切换资产方向，会看到一个二维码，使用以太坊钱包，将要转移的以太坊资产转移到该二维码对应地址中(点击可以复制地址)即可。

### 将 NewChain 资产转移到 HecoChain:

确保要转移的资产在 NewChain 上的余额充足，在目标地址的输入框中输入 HecoChain 钱包的地址，输入转账额度，点击`跨链转出`, 然后会弹出授权转账页面，确认授权，即可将 NewChain 上的资产转移到 HecoChain 上的对应地址。

### 将 HecoChain 资产转移到 NewChain:

切换资产方向，会看到一个二维码，使用 HecoChain 钱包，将要转移的 HecoChain 资产转移到该二维码对应地址中(点击可以复制地址)即可。

## NewBridge 手续费是怎么计算的？

NewBridge 手续费用于维护系统正常运行，即用于在 NewChain 和 Ethereum 上转账的手续费消耗。手续费具体计算规则: 从 Ethereum 跨链到 NewChain，收取手续费为两倍的 ETH 转账手续费和一倍的 NEW 转账手续费; 从 NewChain 跨链到 Ethereum，收取手续费为两倍的 NEW 转账手续费和一倍的 ETH 转账手续费。如果是 ERC20/NRC6 类通证，转账手续费根据市场价折算为通证本位再做对应计算。由于市场的波动性较大，可能会存在偏差，NewBridge 会对手续费定时或者不定时进行调整，NewBridge 本身不赚取用户任何费用。
