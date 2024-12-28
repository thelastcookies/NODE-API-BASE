# 使用官方 Node.js 运行时作为基础镜像
FROM node:22-alpine

LABEL authors="thelastcookies"

# 设置工作目录
WORKDIR /app

# 复制构建后的代码到容器
COPY dist/ /app/
COPY .env/.env .env/.env.production /app/.env/
COPY 'node_modules/.pnpm/@prisma+client@6.1.0_prisma@6.1.0/node_modules/.prisma/client/libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node' '/app/node_modules/.pnpm/@prisma+client@6.1.0_prisma@6.1.0/node_modules/.prisma/client/'

# 端口暴露
EXPOSE 8192

# 设置容器启动时的固定命令
ENTRYPOINT ["node", "index.js"]
