### nvm安装
#### windows
*  [nvm下载](https://github.com/coreybutler/nvm-windows/releases)
#### 其他平台
* [nvm](https://github.com/creationix/nvm)

### nrm
```
$ npm install -g nrm
```
```
nrm ls
* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

```
nrm use cnpm
```
### npm 
#### 安装淘宝 NPM 镜像
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```


## Git
### 生成SSH
```
$ git config --global user.name 'wzheng'

$ git config --global user.email 'hb_wangzheng@163.com'
```
```
<!--如果.ssh存在-->
$ mkdir key_backup
$ cp id_rsa* key_backup
$ rm id_rsa*

<!--如果不存在-->
$ ssh-keygen -t rsa _C 'hb_wangzheng@163.com'
```