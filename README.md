# Vue Web Template

This template should help get you started developing with Vue 3 in Vite.

## Starting out

```sh
pnpm install
pnpm dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) + [Comment](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments).
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) so you don't have to use mouse to show error in the code
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) so you could see git changes for each line of code
- [Console Ninja](https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja) this help you see print result of you log in your code
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) help you see if the translation code exist
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) help you see the cost of your import
- [Pretty TS](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) make typescript error readable
- [Mermaid](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) to help see graph in docs

## Project Structure

### This is the main project structure

```go
├── docs // this are the documentations for app logic
├── src
│   ├── assets
│   |   ├── main.css
│   ├── components
│   |   ├── layout // this are the master layout that is used to wrap app
│   |   |   ├── __tests__ // Test folder will be in line with the component it test for
│   |   |   |   ├── DesktopLayout.spec.ts
│   |   |   |   ├── MobileLayout.spec.ts
│   |   |   |   ├── TabletLayout.spec.ts
│   |   |   ├── DesktopLayout.vue
│   |   |   ├── MobileLayout.vue
│   |   |   ├── TabletLayout.vue
│   |   ├── macro // macro import component from micro
│   |   |   ├── Home // this is module name
│   |   |   |   ├── HomeTermDialog.vue
│   |   |   |   ├── HomeBannerSection.vue
│   |   ├── micro // micro should not import anything from outside
│   |   |   ├── Button.vue
│   |   |   ├── Card.vue
│   |   |   ├── InputField.vue
│   |   |   ├── SelectField.vue
│   |   ├── icon
│   |   |   ├── HomeIcon.vue
│   ├── configs // this are the app configurations and constants
│   |   ├── timerConfig.ts
│   |   ├── environmentConfig.ts
│   |   ├── uiConfig.ts
│   ├── libraries // reusable part
│   |   ├── api-client // we use this to do http request
│   |   |   ├── index.ts // here we will have axios configurations
│   |   |   ├── useBannerListApi.ts
│   |   ├── utils // formatter, storage managers, ect
│   |   |   ├── localStorage.ts // setLocalStorage, getLocalStorage
│   |   |   ├── cookieStorage.ts // getCookie, setCookie
│   |   |   ├── dateFormatter.ts // today, toDateShort, lastMonth
│   |   |   ├── numberFormatter.ts // toMoney, toDecimal, toCount
│   ├── router
│   |   ├── report
│   |   |   ├── monthly.ts // site.com/report/monthly/*
│   |   |   ├── profit.ts // site.com/report/profit/*
│   |   ├── user.ts // site.com/user/*
│   ├── stores // global refs
│   |   ├── auth.ts
│   |   ├── layout.ts
│   ├── views
│   |   ├── report
│   |   |   ├── monthly
│   |   |   |   ├── production.vue // site.com/report/monthly/production
│   |   |   |   ├── incident.vue // site.com/report/monthly/incident
│   |   |   ├── profit
│   |   |   |   ├── company.vue // site.com/report/profit/company
│   |   ├── user
│   |   |   ├── Create.vue // site.com/user/create
│   ├── index.js
├── public
│   ├── images
├── global.d.ts // global type definitions
├── package.json
├── tailwind.config.js // our design system configuration
├── pnpm-lock.yaml
└── .gitignore
```

## Committing Changes

#### Commit your changes with message as follow

- `[T-5000] Create form for Register - add new page for register`
- `[T-5000] Create form for Register - update unit test for register page`

## Dependencies

```json
{
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
    "preview": "vite preview",
    "test:unit": "vitest",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit -p tsconfig.vitest.json --composite false",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/",
    "prepare": "husky install"
  },
  "dependencies": {
    "@tanstack/vue-query": "^5.0.5", // http request caching and utilities
    "@vee-validate/i18n": "^4.11.8", // validation can support multiple language
    "axios": "^1.5.1", // http request helper
    "vee-validate": "^4.11.8", // validator
    "vue": "^3.3.6", // ui framework
    "vue-router": "^4.2.5" // router
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.5.1",
    "@tsconfig/node18": "^18.2.2",
    "@types/jsdom": "^21.1.4",
    "@types/node": "^18.18.6",
    "@vitejs/plugin-vue": "^4.4.0",
    "@vue/eslint-config-prettier": "^8.0.0",
    "@vue/eslint-config-typescript": "^12.0.0",
    "@vue/test-utils": "^2.4.1",
    "@vue/tsconfig": "^0.4.0",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.52.0",
    "eslint-plugin-vue": "^9.17.0",
    "husky": "^8.0.3", // git hooks (will be used later)
    "jsdom": "^22.1.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.31",
    "prettier": "^3.0.3",
    "tailwindcss": "^3.3.3", // css lib
    "typescript": "~5.2.2",
    "vite": "^4.5.0",
    "vitest": "^0.34.6", // test lib, version 1 will come soon!
    "vue-tsc": "^1.8.19"
  }
}
```
