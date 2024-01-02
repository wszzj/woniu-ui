# Woniu UI for Vue3

## 运行步骤

1. 运行yarn
2. 运行yarn dev
3. 打开[http://localhost:5173/#/](http://localhost:5173/#/)

# 官网打包步骤

1. 运行yarn
2. 运行yarn build
3. dist 目录就是官网源代码
4. 编辑并运行 sh deploy.sh 就可以上传到 Github

# 库文件打包步骤

1. 运行yarn
2. 取消vite.config.ts文件的注释
3. 运行yarn build
4. dist 目录就是库文件源代码
5. npm login登录npm官网
6. npm publish发布（每次发布需要修改版本号）
