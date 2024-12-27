# 使用官方 Node.js 运行时作为基础镜像
FROM node:21-alpine

LABEL authors="thelastcookies"

# 设置工作目录
WORKDIR /app

# 复制构建后的代码到容器
COPY dist/ /app/dist/
COPY .env/.env /app/dist/.env/
COPY .env/.env.production /app/dist/.env/

COPY 'node_modules/.pnpm/@prisma+client@5.15.0_prisma@5.15.0/node_modules/.prisma/client/libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node/' '/app/dist/node_modules/.pnpm/@prisma+client@5.15.0_prisma@5.15.0/node_modules/.prisma/client/'

EXPOSE 8192
# 设置应用运行的默认命令
#CMD ["node", "dist/index.js"]

ENTRYPOINT ["top", "-b"]
