module.exports = {
  apps: [
    {
      name: 'chatgpt-service',
      exec_mode: 'fork',
      instances: '1',
      script: './build/index.js',
      args: 'prod', // npm run start:test
      watch: true, // 启动热重载
      // https://juejin.cn/post/7110115159695163406
      // https://juejin.cn/post/7110114603446566925
      // 配置环境变量，这里的环境变量要与nuxt里边的`package.json`文件的变量相同
      // env_prod: {
      //   NODE_ENV: 'production',
      //   MODE: 'prod',
      // },
      // env_test: {
      //   NODE_ENV: 'test',
      //   MODE: 'test',
      // },
      // env_uat: {
      //   NODE_ENV: 'uat',
      //   MODE: 'uat',
      // },
    },
  ],
}
