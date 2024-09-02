# Axiom
> Effortless TypeScript linting with zero configuration

## Why "Axiom"?

In mathematics and logic, an axiom is a statement that is taken to be true without proof. Similarly, Axiom provides a set of linting rules that are considered best practices without the need for debate or configuration.

## Overview

Axiom is a zero-configuration ESLint package that not only provides the best set of rules (inspired by StandardJS) but also manages other ESLint plugins. This removes the need for discussing and configuring ESLint rules, as well as maintaining and version tracking of various plugins.

With ESLint v9 flat configs, configurations can become complex, and mistakes can happen even in the setup. Axiom simplifies this process, allowing developers to focus on writing code rather than configuring linters.

## Quick Start

1. Install Axiom:

```bash
npm install --save-dev @2bad/axiom
```

2. Create an `eslint.config.mjs` file in your project root:

```javascript
import { axiom } from '@2bad/axiom'

export default axiom(import.meta.dirname)
```

3. Add a lint script to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

4. Run the linter:

```bash
npm run lint
```

## Features

- Zero configuration required
- Comprehensive set of ESLint rules based on best practices
- Automatic management of ESLint plugins
- Simplified setup process
- Consistent code style across projects

## Why Axiom?

Axiom aims to solve the following problems:

1. **Configuration Overload**: With the multitude of ESLint plugins and rules available, configuring a linter can be overwhelming. Axiom provides a curated set of rules out of the box.

2. **Plugin Management**: Keeping track of multiple ESLint plugins, their versions, and configurations can be time-consuming. Axiom manages this for you.

3. **Consistency**: By providing a standard set of rules, Axiom ensures consistency across projects and team members.

4. **Focus on Code**: Spend less time configuring and more time coding. Axiom handles the linting details so you can focus on writing great JavaScript.

## Contributing

Contributions are welcome! Please check out the [issues](https://github.com/2bad/axiom/issues) or submit a pull request.
