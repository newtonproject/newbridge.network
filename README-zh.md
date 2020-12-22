# NewBridge Network 网站

语言：[English](README.md) | 中文

访问 [https://newbridge.network/zh](https://newbridge.network/zh).

## 快速开始

此 repo 是 NewBridge Network 网站和文档的仓库。NewBrige 源代码仓库请访问下面相关链接。

### 常见问题

访问 [https://newbridge.network/zh/faq](https://newbridge.network/zh/faq).

### NewBridge 仓库列表 ⚠️

- NewBridge Network 网站

- NewBridge App 界面

### 运行此仓库的网站

NewBridge Network 使用 [Hugo](https://gohugo.io) 生成静态网站文件。

所有的 Hugo 设置相关文件位于 `.configs` 目录下。如果你熟悉 Hugo，可直接进入该目录像其他 Hugo 项目一样来使用。

本网站使用 [NewDocs 主题](https://github.com/newtonproject/newdocs-hugo)。

对于大部分使用 `NPM` 和 `Yarn` 进行包管理的开发者，我们添加了 hugo-bin 和 hugo-bin-extended 作为开发依赖。使用下面的说明可无须单独安装 Hugo 来运行此网站。

**克隆此仓库**

克隆并更新 submodule：

```bash
git clone --recursive git@github.com:newtonproject/newbridge.network.git
```

如果没有使用 `--recursive` 参数克隆，需要更新 submodule 获取主题：

```bash
git submodule update --init --recursive
```

安装依赖：

```bash
yarn
```

**安装依赖**

```bash
yarn
```

**在开发模式运行网站**

```bash
yarn dev
```

更多的文档请访问 [https://newbridge.network/zh/docs](https://newbridge.network/zh/docs) 的 _文档章节_。

## 贡献

### 加入 NewBridge

访问 [https://newbridge.network/zh/contributing](https://newbridge.network/zh/contributing).

### 对内容进行贡献

访问 [https://newbridge.network/zh/contributing](https://newbridge.network/zh/contributing).

### 对代码进行贡献

访问 [https://newbridge.network/zh/contributing](https://newbridge.network/zh/contributing).

## 许可协议

- 此项目的内容使用 [CC0 1.0 Universal (CC0 1.0)
Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/) 许可协议。

- 此项目用于生成静态网站及展示的代码使用 [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0) 许可协议。

- 部分文件可能包含独立的许可协议，这些文件按照所包含许可协议。

- 此项目的内容位于 `contents` 及其他 `contents-*` 目录下。
