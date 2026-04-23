# IMP: Move this ".github" folder to "1. basic typescript docker setup", So this CI/CD work for project setup using docker with github action.

# GitHub Actions CI/CD Pipeline

This project uses GitHub Actions for automated testing, building, and deployment. Here's how it works:

## 📋 Workflows Overview

### 1. **CI - Build & Test** (`ci.yml`)
**Triggers:** Every push to `main`/`dev` and all pull requests

**What it does:**
- Tests on Node.js 20.x
- Installs dependencies with caching
- Runs linting (if ESLint is configured)
- Builds TypeScript
- Tests Docker build
- Uploads build artifacts

**Status Badge:**
```markdown
![CI](https://github.com/<username>/<repo>/actions/workflows/ci.yml/badge.svg)
```

---

### 2. **Docker Build & Push to GHCR** (`docker-build.yml`)
**Triggers:** Push to `main` branch and version tags

**What it does:**
- Builds Docker image using Buildx
- Pushes to GitHub Container Registry (GHCR)
- Supports semantic versioning tags
- Uses GitHub Actions cache for faster builds

**No secrets required** - uses `GITHUB_TOKEN` automatically

**Image location:** `ghcr.io/<username>/<repo>:latest`

---

## 🔧 Setup Instructions

### Step 1: Enable GitHub Actions
1. Go to your repository on GitHub
2. Click **Settings** → **Actions** → **General**
3. Ensure Actions are enabled

### Step 2: Create Version Tags for Releases

When you want to release:
```bash
git tag v1.0.0
git push origin v1.0.0
```

This triggers Docker builds with semantic versioning tags.

---

## 📊 Monitoring Workflows

### View Workflow Status
1. Go to your repository
2. Click **Actions** tab
3. See all workflow runs with their status

### View Build Artifacts
1. Click on a workflow run
2. Scroll down to see "Artifacts" section
3. Download build artifacts (dist files)

---

## 🚀 Common Tasks

### Add ESLint Linting
Update `src/package.json`:
```json
{
  "devDependencies": {
    "eslint": "^8.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0"
  },
  "scripts": {
    "lint": "eslint . --ext .ts"
  }
}
```

Create `.eslintrc.json`:
```json
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "rules": {}
}
```

### Deploy to Production

After a successful CI build, create a release:
```bash
git tag v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

This automatically:
- Builds and pushes Docker image with version tag
- Runs all tests first
- Creates release artifacts

### Manual Workflow Trigger

Click **Actions** → Select workflow → **Run workflow** button

---

## 📝 Workflow Status Badge

Add to your `README.md`:
```markdown
![CI](https://github.com/<USERNAME>/<REPO>/actions/workflows/ci.yml/badge.svg)
![Docker Build](https://github.com/<USERNAME>/<REPO>/actions/workflows/docker-build.yml/badge.svg)
```

Replace `<USERNAME>` and `<REPO>` with your values.

---

## 🔍 Troubleshooting

### Workflow not triggering?
- Push to the correct branch (`main` or `develop`)
- Check Actions are enabled in Settings
- Verify `.github/workflows/*.yml` files are committed to git

### Docker push fails?
- Verify repository permissions for GHCR
- Check GitHub Actions permissions
- Ensure you're pushing to the correct branch

### Node version compatibility?
- Current workflows test on Node 20.x
- Modify `node-version` matrix in `ci.yml` if needed
- Dockerfile uses `node:20-alpine`

---

## 📚 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Docker GitHub Actions](https://github.com/docker/build-push-action)
- [Node.js GitHub Actions](https://github.com/actions/setup-node)
