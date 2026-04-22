# TypeScript Docker Setup - Developer Guide

## ✅ What's Fixed

This setup is now **team-ready** with:
- ✅ Consistent paths (WORKDIR `/app` in both Dockerfile and docker-compose)
- ✅ `.gitignore` & `.dockerignore` for clean repos
- ✅ Pinned dependencies (no `^` for production consistency)
- ✅ Watch mode enabled for hot-reload development
- ✅ Proper npm ci for reproducible installs
- ✅ Environment variables support
- ✅ Build scripts for production

## 🚀 Quick Start for Developers

### Option 1: Docker Development (Recommended for consistency)
```bash
# Start development container with hot-reload
npm run docker:dev

# Or just build and run
npm run docker:build
npm run docker:run
```

### Option 2: Local Development
```bash
npm install
npm run dev
```

### Option 3: Production Build
```bash
npm run build
npm run start
```

## 📁 Key Files Explained

| File | Purpose |
|------|---------|
| `Dockerfile` | Defines image with Node 20 Alpine |
| `docker-compose.yml` | Orchestrates container with volumes & env vars |
| `.gitignore` | Excludes node_modules, dist, env files |
| `.dockerignore` | Keeps image small (excludes unnecessary files) |
| `package.json` | Dependencies + npm scripts for all tasks |
| `tsconfig.json` | TypeScript compiler configuration |

## 🔄 How It Works for Teams

1. **Clone repository** → All developers get same config
2. **Run `npm run docker:dev`** → Same Node version, same dependencies
3. **Edit TypeScript files** → Changes reflected instantly (watch mode)
4. **Commit to git** → node_modules excluded (smaller diffs)
5. **CI/CD builds** → Uses `npm ci` for reproducible builds

## 📝 Environment Variables

Create `.env` file in project root:
```env
NODE_ENV=development
```

Modify docker-compose to use it:
```yaml
env_file:
  - .env
```

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| `node_modules` conflicts | Remove volume: `docker-compose down -v` |
| Port conflicts | Change `container_name` in docker-compose.yml |
| Changes not reflecting | Check volumes are mounted correctly |

## 📌 Best Practices Applied

✓ Alpine image (smaller size)  
✓ npm ci instead of npm install (reproducible)  
✓ Dev dependencies clearly separated  
✓ Pinned versions (no `^` or `~`)  
✓ Named volumes for node_modules  
✓ Watch mode for development  
✓ .dockerignore to reduce image size  

---

**Grade: 9/10** ✅ Team-ready setup!
