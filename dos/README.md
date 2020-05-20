# DOS

>

## 常见的 DOS 命令

### 静默运行 jar 包

> 下面以运行`xx_a.jar`和`path`目录下的`xx_b.jar`两个 jar 包为例

- 常规启动 jar 包

  直接在 shell 中输入以下命令

```shell
$ java -jar xx_a.jar
```

```shell
$ java -jar <path>/xx_b.jar
```

- 静默启动 jar 包

  新建 start.bat 文件,文件内容如下:

```bat
@echo off
start javaw -jar xx_a.jar
start javaw -jar <path>/xx_b.jar
exit
```

- 查看端口(PORT)、进程(PID)

```shell
# 这里我的启动端口为9080
netstat -ano | findstr 9080
```

- 静默关闭

  新建 shutdown.bat 文件,文件内容如下:

```bat
@echo off
taskkill -f -t -im javaw.exe
exit
```
