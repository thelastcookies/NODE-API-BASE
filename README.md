# NODE-API-BASE

A general WEB API using NodeJS.

## 关键字

- Node.js;
- Koa;
- Prisma;

## 项目目录及说明

```
|-- .env                    # 环境变量
|-- |-- types
|-- |-- |-- env.d.ts        # 环境变量类型声明
|-- |-- .env                # 项目环境变量
|-- |-- .env.development    # 开发环境变量
|-- |-- .env.production     # 发布环境变量
|-- .github                 # GitHub 配置
|-- |-- workflows           # GitHub Workflows 配置
|-- |-- |-- release-please.yml # release-please 配置文件
|-- .husky                  # Git hooks 脚本
|-- |-- commit-msg
|-- |-- pre-commit
|-- logs                    # 日志文件目录
|-- prisma                  # Prisma 目录
|-- |-- schema.prisma       # Prisma 数据库模型
|-- |-- seed.ts             # 数据库初始数据
|-- src                     # 源代码目录，包含项目的主要代码文件
|-- |-- controller          # 控制器层，处理请求并返回响应
|-- |-- |-- index.ts        # 各控制器的总输出文件
|-- |-- |-- user.ts         # 示例用户控制器文件
|-- |-- middleware          # 中间件层，用于处理请求的中间件函数
|-- |-- |-- logger.ts       # 日志中间件
|-- |-- router              # 路由层，定义应用程序的路由
|-- |-- |-- index.ts        # 路由的总输出文件
|-- |-- |-- user.ts         # 示例用户路由
|-- |-- service             # 服务层，包含业务逻辑和数据处理
|-- |-- |-- index.ts        # 各服务的总输出文件
|-- |-- |-- user.ts         # 示例用户服务
|-- |-- utils               # 工具库，包含辅助函数和工具类
|-- |-- |-- log.ts          # 日志工具库 log4js 配置
|-- |-- index.ts            # 应用入口文件
|-- |-- prisma.ts           # Prisma 客户端实例
|-- .gitignore              # Git 忽略文件
|-- LICENSE                 # License 文件
|-- package.json            # 项目的配置文件，包含依赖、脚本等
|-- README.md               # 项目说明文档
|-- tsconfig.json           # TypeScript 配置文件
```

## 安装与环境配置

### DotEnv

DotEnv 用于加载环境变量文件（通常是 .env 文件）中的变量到 process.env 中。

这有助于将敏感数据（如数据库连接字符串、API 密钥等）与代码分离，同时使项目的配置更加灵活和安全。

```shell
pnpm install dotenv --save
```

#### 配置 DATABASE_URL

.env

```
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
```

之后使用的 prisma 工具会默认读取环境变量中的 `DATABASE_URL` 作为数据库连接字符串。

### Prisma

Prisma 是一个现代化的 TypeScript 和 Node.js ORM（对象关系映射工具），旨在简化与数据库的交互。
它适合开发人员快速、安全地管理数据库结构和数据操作。

#### 安装与初始化

```shell
pnpm install prisma -D
```

```shell
pnpm init
```

初始化后会生成 prisma/schema.prisma 文件，用于定义数据库模型。

#### 定义数据模型

在 schema.prisma 中描述数据库的表结构和关系。

如：

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### 模型迁移

应用模型更改到数据库：

```shell
pnpm migrate
```

该操作会将数据模型的变更迁移到数据库中，可能会造成数据的丢失，在实际开发中要谨慎处理。

#### 生成 Prisma Client

在项目根目录下运行命令生成客户端：

```shell
pnpm generate
```

使用 `generate` 指令会默认添加 `@prisma/client` 工具，也可以通过 `pnpm install @prisma/client` 指令手动安装。

该指令会根据 `schema.prisma` 文件在 `node_modules` 下生成 `@prisma/client`。

#### 使用 Prisma Client

在代码中通过 PrismaClient 进行数据库操作。

#### seed.ts

seed.ts 文件用于向数据库填充初始数据。

##### package.json 配置

```
"prisma": {
  "seed": "dotenv -e .env/.env.development -- tsx prisma/seed.ts"
},
```

### Nodemon

nodemon 是一个开发工具，会自动监视文件的变化，并在检测到变化时重启应用程序。可以使开发过程更加高效，减少手动重启服务器的频率。

```shell
pnpm install nodemon -D
```

### 启动服务

```shell
pnpm dev
```

## 构建步骤
