# 🚀 Hướng dẫn Setup CI/CD với GitHub Actions

## 📋 Tổng quan

Workflow CI/CD này sẽ tự động:

- ✅ Kiểm tra code quality (TypeScript, ESLint, Prettier)
- ✅ Build và test ứng dụng
- ✅ Deploy lên GitHub Pages
- ✅ Chạy khi push code lên branch `main` hoặc `develop`

## 🛠️ Cách setup

### 1. Tạo repository trên GitHub

```bash
# Khởi tạo git repo
git init
git add .
git commit -m "Initial commit"

# Thêm remote repository
git remote add origin https://github.com/qucuongdev/portfolio-cicd.git
git branch -M main
git push -u origin main
```

### 2. Setup Secrets cho GitHub Actions

Vào **Settings > Secrets and variables > Actions** trong GitHub repo của bạn:

#### Cho GitHub Pages:
- `GITHUB_TOKEN`: Tự động có sẵn, không cần setup thêm

### 3. Cấu hình GitHub Pages

1. Vào **Settings > Pages** trong GitHub repo
2. Chọn **Source**: Deploy from a branch
3. Chọn **Branch**: `gh-pages`
4. Click **Save**

### 4. Cấu hình repository name (nếu khác "portfolio")

Nếu repository name của bạn không phải "portfolio", hãy cập nhật:

```bash
# Tạo file .env.local
echo "NEXT_PUBLIC_BASE_PATH=/portfolio-cicd" > .env.local
```

Hoặc cập nhật trong GitHub Actions secrets:
- Thêm `NEXT_PUBLIC_BASE_PATH` với giá trị `/YOUR_REPO_NAME`

## 📁 Cấu trúc file được tạo

```
.github/
└── workflows/
    └── ci-cd.yml        # Main workflow file

.prettierrc              # Prettier configuration
.prettierignore          # Prettier ignore file
next.config.mjs          # Updated Next.js config (đã enable GitHub Pages)
SETUP_CICD.md           # This file
env.example             # Environment variables template
```

## 🔧 Tùy chỉnh Workflow

### Thêm test commands
```yaml
- name: Run tests
  run: pnpm test
```

### Thêm dependency security check
```yaml
- name: Audit dependencies
  run: pnpm audit
```

### Thêm performance budget
```yaml
- name: Lighthouse CI
  run: npx lhci autorun
```

### Thêm custom domain
Nếu bạn có domain riêng, cập nhật trong workflow:
```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./out
    cname: your-domain.com
```

## 🚦 Workflow sẽ chạy khi:

- Push code lên branch `main` hoặc `develop`
- Tạo Pull Request vào branch `main`
- Manual trigger từ GitHub Actions tab

## 📊 Monitoring

Theo dõi workflow tại:
- GitHub repo > Actions tab
- GitHub Pages settings để xem deployment status
- Visit site tại: `https://qucuongdev.github.io/portfolio-cicd/`

## 🔍 Troubleshooting

### Build fails
- Kiểm tra TypeScript errors: `pnpm run build`
- Kiểm tra ESLint errors: `pnpm run lint`
- Chạy local: `pnpm run dev`

### Deploy fails
- Kiểm tra GitHub Pages settings đã enable chưa
- Kiểm tra branch `gh-pages` đã được tạo chưa
- Xem logs trong GitHub Actions

### Site không hiển thị đúng
- Kiểm tra `NEXT_PUBLIC_BASE_PATH` đã set đúng chưa
- Kiểm tra URL: `https://qucuongdev.github.io/portfolio-cicd/`
- Chờ vài phút để GitHub Pages cập nhật

### Dependencies issues
- Xóa `node_modules` và `pnpm-lock.yaml`
- Chạy `pnpm install` lại

## 📞 Hỗ trợ

Nếu gặp vấn đề, check:
1. GitHub Actions logs
2. GitHub Pages settings
3. Browser console khi test local

## 🎯 Scripts có sẵn

```bash
pnpm run dev          # Chạy development server
pnpm run build        # Build production
pnpm run lint         # Kiểm tra ESLint
pnpm run lint:fix     # Fix ESLint errors
pnpm run format       # Format code với Prettier
pnpm run format:check # Kiểm tra format
pnpm run type-check   # Kiểm tra TypeScript
```
