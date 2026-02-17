# Example: Documentation Improvement

This example shows how to improve documentation by adding missing information and better organization.

## The Issue

The contribution guidelines mentioned "conventional commits" but didn't explain what they are or provide examples.

## The Improvement

**Added Section to CONTRIBUTING.md:**

```markdown
### Commit Message Conventions

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or updating tests
- `chore:` for maintenance tasks

Example: `feat: add user authentication system`
```

## Steps Taken

1. **Identified the gap** in documentation
2. **Researched best practices** for commit messages
3. **Created a branch** for the documentation update:
   ```bash
   git checkout -b docs/improve-commit-guidelines
   ```
4. **Added the missing section** with clear examples
5. **Tested the changes** by reading through the updated document
6. **Committed with proper message**:
   ```bash
   git add CONTRIBUTING.md
   git commit -m "docs: add commit message conventions with examples"
   ```
7. **Created a pull request** with detailed description

## Learning Points

- Identifying documentation gaps
- Researching and adding helpful information
- Writing clear, structured documentation
- Understanding conventional commits
- The value of documentation contributions

## Impact

This improvement helped future contributors understand how to write proper commit messages, leading to better PR descriptions and project history.

---

_Documentation improvements are highly valuable and often easier for beginners than code changes._
