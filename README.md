# picgo 安装与Typora配置

### 0x01 node 安装

[windows](https://nodejs.org/zh-cn/)

### 0x02 安装 picgo

```bash
npm install picgo -g
##命令查看完成安装完成
picgo -v
```

### 0x03 插件配置

先下载一款其他插件，目的是为了让picgo自动生成一些目录。

```bash
picgo install gitee-uploader
```

![image-20220622102836052](https://image.3001.net/images/20220622/1655868572_62b28c9c3beeebbaf3f2f.png)

![image-20220622102939078](https://image.3001.net/images/20220622/1655868583_62b28ca7c0bee164468c2.png)

把自己的插件解压放在node_modules目录下

![image-20220622103219297](https://image.3001.net/images/20220622/1655868598_62b28cb6b3edae52c2860.png)

### 0x04 参数配置

修改picgo的package.json配置文件，该为自己的插件名。如`picgo-plugin-freebuf`

![image-20220622110816117](https://image.3001.net/images/20220622/1655868614_62b28cc65617a766e60d9.png)

再通过picgo use命令选择我们的插件

```
picgo use
```

![image-20220622111206027](https://image.3001.net/images/20220622/1655868617_62b28cc9f1beb94266a2e.png)

一路回车就可以了

最后测试

![image-20220622111257700](https://image.3001.net/images/20220622/1655868622_62b28ccea0159424dbefb.png)



### 0x05 配置Typora

偏好设置->图像->上传服务设定

命令参数：

```bash
[node地址] （空格）[picgo地址] （空格）u
//如
"C:\Program Files\nodejs\node" C:\Users\DELL\AppData\Roaming\npm\node_modules\picgo\bin\picgo u
```





![image-20220622112628242](https://image.3001.net/images/20220622/1655868682_62b28d0aedf18c471823c.png)

