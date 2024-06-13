# TolaDe
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
|-- src                     # 源代码目录，包含项目的主要代码文件
|-- |-- controllers         # 控制器层，处理请求并返回响应
|-- |-- |-- userController.ts   # 示例用户控制器文件
|-- |-- middleware          # 中间件层，用于处理请求的中间件函数
|-- |-- |-- authMiddleware.ts   # 示例身份验证中间件
|-- |-- models              # 数据模型层，定义数据结构和数据库交互
|-- |-- |-- userModel.ts    # 示例用户数据模型
|-- |-- routes              # 路由层，定义应用程序的路由
|-- |-- |-- userRoutes.ts   # 示例用户路由
|-- |-- services            # 服务层，包含业务逻辑和数据处理
|-- |-- |-- userService.ts  # 示例用户服务
|-- |-- utils               # 工具层，包含辅助函数和工具类
|-- |-- |-- helper.ts       # 示例辅助函数
|-- |-- config              # 配置层，存放配置文件
|-- |-- |-- config.ts       # 示例配置文件
|-- |-- app.ts              # 应用入口文件，配置 Koa 实例和中间件
|-- |-- server.ts           # 启动服务器文件，监听端口并启动服务
|-- .gitignore              # Git 忽略文件
|-- package.json            # 项目的配置文件，包含依赖、脚本等
|-- tsconfig.json           # TypeScript 配置文件
|-- README.md               # 项目说明文档
```

## 安装与环境配置

```bash
npm install prisma --save-dev
```
```bash
npx prisma init --datasource-provider mysql
```
```bash
npm install -g dotenv-cli
```
配置DATABASE_URL

.env
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
```bash
npm migrate
```

```bash
npm install @prisma/client
```
```bash
prisma generate
```
## 构建步骤
