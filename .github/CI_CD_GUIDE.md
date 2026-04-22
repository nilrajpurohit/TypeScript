# GitHub Actions CI/CD Pipeline

This project uses GitHub Actions for automated testing, building, and deployment. Here's how it works:

## 📋 Workflows Overview

### 1. **CI - Build & Test** (`ci.yml`)
**Triggers:** Every push to `main`/`develop` and all pull requests

**What it does:**
- Tests on Node.js 18.x and 20.x
- Installs dependencies
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

### 3. **Docker Build & Push to Docker Hub** (`docker-hub-push.yml`)
**Triggers:** Push to `main` branch and version tags

**What it does:**
- Builds and pushes Docker image to Docker Hub
- Supports semantic versioning
- Auto-tags as `latest` on default branch

**Required Secrets (configure in GitHub):**
- `DOCKER_USERNAME` - Your Docker Hub username
- `DOCKER_PASSWORD` - Your Docker Hub access token

**Image location:** `docker.io/<username>/ts-runner:latest`

---

### 4. **Security Scan** (`security.yml`)
**Triggers:** Push, PRs, and weekly schedule (Sundays)

**What it does:**
- Audits npm dependencies for vulnerabilities
- Scans Docker image with Trivy
- Reports vulnerabilities to GitHub Security tab

**No secrets required**

---

## 🔧 Setup Instructions

### Step 1: Enable GitHub Actions
1. Go to your repository on GitHub
2. Click **Settings** → **Actions** → **General**
3. Ensure Actions are enabled

### Step 2: Configure Secrets (for Docker Hub push)

Only needed if you want to push to Docker Hub:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:
   - **Name:** `DOCKER_USERNAME`  
     **Value:** Your Docker Hub username
   - **Name:** `DOCKER_PASSWORD`  
     **Value:** Your Docker Hub access token (NOT password)

**How to get Docker Hub token:**
```bash
# Create token on Docker Hub:
# 1. Login to https://hub.docker.com
# 2. Account Settings → Security → New Access Token
# 3. Give it read/write permissions
```

### Step 3: Create Version Tags for Releases

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

### View Security Reports
1. Go to **Security** tab
2. Click **Code scanning alerts**
3. See Trivy vulnerability scan results

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
- Verify `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets are set correctly
- Ensure token has read/write permissions
- Check Docker Hub is not having service issues

### Node version compatibility?
- Current workflows test on Node 18.x and 20.x
- Modify `node-version` matrix in `ci.yml` if needed
- Dockerfile uses `node:20-alpine`

---

## 📚 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Docker GitHub Actions](https://github.com/docker/build-push-action)
- [Node.js GitHub Actions](https://github.com/actions/setup-node)
- [Trivy Scanner](https://github.com/aquasecurity/trivy-action)
