# Getting Started with BuilderHub

Welcome to BuilderHub! This guide will help you get started with contributing to our community learning platform.

## What is BuilderHub?

BuilderHub is a community-driven platform that provides a structured learning roadmap to take beginners from zero confidence to contributing to real fullstack applications. Our focus is on practical, hands-on learning through project contributions.

## Quick Start for New Contributors

### 1. Prerequisites

Before you begin, ensure you have:

- A GitHub account
- Git installed on your local machine
- A code editor (we recommend VS Code)
- Basic familiarity with command line

### 2. Set Up Your Development Environment

```bash
# Fork the repository on GitHub:
# 1) Go to https://github.com/kc-clintone/builderhub and click "Fork".
# 2) Clone your fork locally (replace <your-username>):

git clone https://github.com/<your-username>/builderhub.git
cd builderhub

# Or using SSH:
# git clone git@github.com:<your-username>/builderhub.git
# cd builderhub

# Install dependencies (use npm ci if you have a lockfile)
npm install

# Start the dev server (Vite default port is 5173)
npm run dev

# Open the project in VS Code
code .
```
### 3. Understand the Project Structure

```
builderhub/
├── README.md              # Project overview and getting started
├── CONTRIBUTING.md        # Contribution guidelines
├── CODE_OF_CONDUCT.md     # Community standards
├── LICENSE                # MIT License
├── SECURITY.md            # Security policy
├── CHANGELOG.md           # Version history
├── docs/                  # Documentation
│   ├── roadmap.md         # Learning roadmap
│   ├── getting-started.md # This file
│   └── ...                # Other docs
├── .github/               # GitHub configuration
│   ├── ISSUE_TEMPLATE/    # Issue templates
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/         # CI/CD workflows
└── .gitignore             # Git ignore rules
```

### 4. Start with Phase 0

Begin your journey with [Phase 0 of our learning roadmap](roadmap.md#phase-0--foundations--environment-week-1). This phase focuses on building foundational skills and making your first contribution.

### 5. Make Your First Contribution

1. **Find an issue**: Look for [good first issues](https://github.com/kc-clintone/builderhub/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Make changes**: Implement your contribution
4. **Test your changes**: Ensure everything works
5. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```
6. **Open a PR**: Create a pull request and wait for review

## Learning Resources

- [Complete Learning Roadmap](roadmap.md)
- [Contribution Guidelines](../CONTRIBUTING.md)
- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [GitHub Discussions](https://github.com/kc-clintone/builderhub/discussions)

## Need Help?

- Join our [GitHub Discussions](https://github.com/kc-clintone/builderhub/discussions) for questions
- Check the [FAQ](faq.md) for common questions
- Create an issue if you find a bug or need clarification

## Next Steps

After completing Phase 0:

1. Continue with [Phase 1: Frontend Core](roadmap.md#phase-1--frontend-core-weeks-23)
2. Join our community discussions
3. Help other newcomers
4. Consider mentoring or reviewing PRs

Welcome to the BuilderHub community! 🚀
