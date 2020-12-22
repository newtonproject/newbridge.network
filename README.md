# NewBridge Network Website

Languages: English | [中文](README-zh.md)

This repo is for NewBridge website.

Visit [https://newbridge.network](https://newbridge.network/).

## Quick Start

This repo contents docs for NewBridge Network. For source code please see the repo list below.

### FAQs

Visit [https://newbridge.network/faq](https://newbridge.network/faq).

### NewBridge Repos ⚠️

- NewBridge Network Website

- NewBridge App UI

### Run website in this repo

NewBridge Network Website is using [Hugo](https://gohugo.io) to generate static website.

All configs and settings files for Hugo are placed in `.configs` directory. If you are familiar with Hugo, go into the directory and use it as any other Hugo project.

This website uses [NewDocs Theme](https://github.com/newtonproject/newdocs-hugo).

And for most people having `NPM` and `Yarn`, we added the hugo-bin and hugo-bin-extended to the Dev Dependencies. Use the following steps to run without install Hugo independently.

**Clone This Repo**

Clone and update submodule:

```bash
git clone --recursive git@github.com:newtonproject/newbridge.network.git
```

If not cloned with `--recursive`, update submodule to fetch the theme:

```bash
git submodule update --init --recursive
```

Install Dependencies:

```bash
yarn
```

**Start Website in Dev Mode**

```bash
yarn dev
```

For more documentation please see _Docs Section_ on [https://newbridge.network/docs](https://newbridge.network/docs).

## Contributing

### Join NewBridge

Visit [https://newbridge.network/docs/contributing](https://newbridge.network/docs/contributing).

### Contributing To Contents

Visit [https://newbridge.network/docs/contributing](https://newbridge.network/docs/contributing).

### Contributing To Source Code

Visit [https://newbridge.network/docs/contributing](https://newbridge.network/docs/contributing).

## License

- The content of this project itself is licensed under the [CC0 1.0 Universal (CC0 1.0)
Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

- The underlying source code used to format and display that content is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

- Individule files may contains seperated License, those files should use their own Licenses.

- The contents of this project are placed in `contents` and `contents-*` directories.