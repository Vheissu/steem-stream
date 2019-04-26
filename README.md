# steem-stream

A Node.js layer for Steem that allows you to watch for specific actions on the Steem blockchain.

## Permanently running with PM2

**ecosystem.config.js**

```
module.exports = {
  apps: [
    {
      name: 'steem-stream',
      script: 'index.js',
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
```