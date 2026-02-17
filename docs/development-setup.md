# Development Environment Setup

This guide provides detailed instructions for setting up your development environment to contribute to BuilderHub.

## Prerequisites

### Required Software

1. **Git** (2.30 or later)
   - Download: https://git-scm.com/downloads
   - Verify: `git --version`

2. **Node.js** (18.x LTS or later)
   - Download: https://nodejs.org/
   - Includes npm package manager
   - Verify: `node --version` and `npm --version`

3. **Code Editor**
   - **Recommended**: Visual Studio Code
     - Download: https://code.visualstudio.com/
     - Extensions to install:
       - GitLens
       - Prettier
       - ESLint
       - Markdown Preview Enhanced

### Optional but Recommended

4. **GitHub Desktop** (for GUI Git operations)
   - Download: https://desktop.github.com/

5. **Postman** (for API testing)
   - Download: https://www.postman.com/downloads/

## Environment Setup

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/kc-clintone/builderhub.git

# Or using SSH (if you have SSH keys set up)
git clone git@github.com:kc-clintone/builderhub.git

# Navigate to the project
cd builderhub
```

### 2. Install Dependencies

```bash
# If package.json exists (for future development)
npm install

# Or if using yarn
yarn install
```

### 3. Verify Setup

```bash
# Check Git configuration
git config --list --show-origin

# Check Node.js and npm
node --version
npm --version

# Check if you're in the right directory
pwd  # Should show path ending with 'builderhub'
ls -la  # Should show project files
```

## Git Configuration

### Basic Git Setup

```bash
# Set your name and email
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"

# Set default branch name (optional)
git config --global init.defaultBranch main

# Enable helpful features
git config --global core.autocrlf input  # On Linux/Mac
git config --global core.autocrlf true   # On Windows
```

### GitHub Setup

1. **Create a GitHub account** (if you don't have one)
2. **Generate SSH keys** (optional but recommended):
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   # Follow prompts, then add to GitHub: https://github.com/settings/keys
   ```

## Development Workflow

### 1. Create a Feature Branch

```bash
# Always create a new branch for your work
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

### 2. Make Changes

- Follow the [contribution guidelines](../CONTRIBUTING.md)
- Write clear commit messages
- Test your changes

### 3. Commit Your Changes

```bash
# Stage your changes
git add .

# Or stage specific files
git add filename.md

# Commit with a descriptive message
git commit -m "feat: add new feature description"

# For multiple commits on a branch
git add .
git commit -m "docs: update getting started guide"
```

### 4. Push and Create Pull Request

```bash
# Push your branch
git push origin feature/your-feature-name

# Create a pull request on GitHub
# Go to: https://github.com/kc-clintone/builderhub/pulls
```

## Testing Your Setup

### Basic Git Operations Test

```bash
# Check status
git status

# View commit history
git log --oneline -5

# Check current branch
git branch
```

### Create a Test Contribution

1. Create a new file: `touch test-contribution.md`
2. Add some content
3. Commit and push it
4. Create a pull request
5. Delete the test file after successful merge

## Troubleshooting

### Common Issues

**"Permission denied" when pushing**

- Check if you have write access to the repository
- Verify SSH keys are set up correctly
- Use HTTPS instead: `git remote set-url origin https://github.com/kc-clintone/builderhub.git`

**"Node.js not found"**

- Reinstall Node.js from the official website
- Check your PATH environment variable
- Restart your terminal/command prompt

**Merge conflicts**

```bash
# Abort merge
git merge --abort

# Or resolve conflicts manually
# Edit conflicted files, then:
git add resolved-file
git commit
```

### Getting Help

- Check [Git documentation](https://git-scm.com/doc)
- Search [GitHub Issues](https://github.com/kc-clintone/builderhub/issues) for similar problems
- Ask in [GitHub Discussions](https://github.com/kc-clintone/builderhub/discussions)

## Advanced Setup (Optional)

### VS Code Extensions for BuilderHub

```json
{
  "recommendations": [
    "ms-vscode.vscode-json",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "davidanson.vscode-markdownlint",
    "ms-vscode-remote.remote-containers"
  ]
}
```

### Pre-commit Hooks (Future)

When we add more complex development workflows, we'll set up pre-commit hooks for:

- Code formatting
- Linting
- Testing

## Environment Variables

Create a `.env.local` file for local development (add to .gitignore):

```bash
# Example environment variables (when applicable)
# GITHUB_TOKEN=your_token_here
# DATABASE_URL=your_database_url
```

## Next Steps

- Read the [learning roadmap](roadmap.md)
- Check out [contribution guidelines](../CONTRIBUTING.md)
- Start with [Phase 0](roadmap.md#phase-0--foundations--environment-week-1)

Happy coding! 🎉
