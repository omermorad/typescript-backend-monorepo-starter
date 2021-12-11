# TypeScript Lerna Monorepo Starter

This is a monorepo boilerplate to quickly start TypeScript backend projects for
publishing/deploying packages to a npm registry.

### Motivation
As mentioned, this template is designed to help you set up a project whose ultimate
goal is to deploy/publish packages to any external (or even local) source such as
npm or GitHub's packages registry.

**Common use cases can be:**
 - Distribution of various packages when using microservice architecture
 - Development of a new framework that contains multiple packages
 - Development of one main package and its breakdown into several core packages

### What's inside?

 - TypeScript support (pre configured `tsconfig.json` file)
 - `yarn` Workspaces
 - Lerna support (pre configured `lerna.json` file)
 - `preconstruct` - util for building packages easily (configured with `babel`)
 - ESLint for TypeScript (based on `airbnb`)
 - `manypkg` cli - util for linting packages dependencies [link](https://www.npmjs.com/package/@manypkg/cli)
 - Builtin CI/workflow with GitHub Actions for releasing stable and candidates packages
 - `commitizen` + Commit lint
 - `husky` for Git hooks
 - `jest` for testing with cool Monorepo support
 - `lint-staged` for staged linting

### How do I start?

After opening the project locally you need to run the `yarn` command:

```bash
$ yarn install && lerna bootstrap
```

You need to set up a repository secret named `NPM_TOKEN` if you want to release packages.

That's it! start building and publishing you packages easily :)
