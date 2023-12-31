# DEX Frontend Documentation

Here you can find DEX frontend documentation:

- [User Guide](docs/guide.md) provides instructions on how to interact with DEX 
- [Frontend Specification](docs/modules.md) describes the DEX module structure
- [Deployment Guide](docs/deploy.md) provides instructions on how to deploy DEX

## Local Development

```bash
pnpm i

# run dev server
pnpm dev

# run unit tests in watch mode
pnpm vitest

# open cypress
pnpm cy

# fix formatting
pnpm format:fix

# static analysis
pnpm typecheck
pnpm lint
```

## CI/CD

First of all, create `.env.local` file. Use `.env.example` as a reference.

Commands:

```bash
pnpm i

# check code formatting
pnpm format:check

# run static analysis
pnpm typecheck
pnpm lint

# run both unit & component tests
pnpm test

# build
pnpm build
```

## Want to Contribute ? <a id="want-to-contribute"></a>

In line with our commitment to decentralization, all codebase and its documentations are completely open source. We always welcome your contribution. Anyone can view, edit, fix its contents and make suggestions. You can either create a pull request on GitHub or create a enhancement request. Make sure you check out our guidelines before contributing:

- [Contribution Guide](./CONTRIBUTING.md)
- [License](./LICENSE)
- [Code of Conducts](./code-of-conduct.md)