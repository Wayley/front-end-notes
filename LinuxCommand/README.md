<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-09-04 10:08:16
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-04 14:31:34
 * @Description:
 -->

# LinuxCommand

This is the notes collection for **[LinuxCommand](https://github.com/Wayley/front-end-notes/tree/master/LinuxCommand)**

## How to use it

Copy the repo into your disk first

```bash
$ git clone git@github.com:Wayley/front-end-notes.git
```

Then get into the [LinuxCommand folder](https://github.com/Wayley/front-end-notes/tree/master/LinuxCommand)

```bash
$ cd LinuxCommand/
```

## Table of Contents

1. [File Management](#FM)

   1. [cat](#cat)
   2. [chattr](#chattr)
   3. [chgrp](#chgrp)
   4. [mv](#mv)
   5. [rm](#rm)

2. [Document Editing](#DE)

## File Management

<a name="FM">

### cat

<a name="cat">

### chattr

<a name="chattr">

### chgrp

<a name="chgrp">

### mv

<a name="mv">

```
$ mv [options] source dest
# or
$ mv [options] source... directory
```

##### 参数说明

- -i 若指定目录已有同名文件,则先询问是否覆盖旧文件;
- -f 在 mv 操作要覆盖某已有的目标文件时不给任何提示;

|        命令格式        |                                         结果                                          |
| :--------------------: | :-----------------------------------------------------------------------------------: |
| mv 源文件名 目标文件名 |                               将源文件名改为目标文件名                                |
| mv 源文件名 目标目录名 |                                 将文件移动到目标目录                                  |
| mv 源目录名 目标目录名 | 目标目录已存在,将源目录移动到目标目录;</br>目标目录不存在则将源目录名称改为目标目录名 |
| mv 源目录名 目标文件名 |                                         error                                         |

##### Examples

- 将文件 a(a.txt) 更名为 b(b.txt)

```
$ mv a b
# or
$ mv a.txt b.txt
```

- 将 info 目录放入到 logs 目录中(如果 logs 目录不存在，则将 info 目录改名为 logs)

```
$ mv info/ logs
```

- 将/usr/logs 下的所有文件和目录移动到当前目录下

```
$ mv /usr/logs/* .
```

##### mv 操作文件时是移动并且重命名

- 目标目录和源目录一致,指定了新文件名，则效果仅仅是重命名。

```
$ mv /home/logs/a.txt /home/logs/b.txt
```

- 目标目录与源目录不一致,没有指定新文件名,效果仅仅是移动。

```
$ mv /home/logs/a.txt /home/info/
# or
$ mv /home/logs/a.txt /home/info
```

- 目标目录与源目录不一致,指定了新文件名,效果是 移动+重命名。

```
$ mv /home/logs/a.txt /home/info/b.txt
```

## Document Editing

<a name="DE">
