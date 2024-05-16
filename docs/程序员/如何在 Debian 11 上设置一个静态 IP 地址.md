---
# 页面的标题
title: 如何在 Debian 11 上设置一个静态 IP 地址

# 页面的描述
description:
editLink: true
categories:
  - 程序员
tag:
 - debian
---

命令行输入命令
```shell
ip link
```

![image.png](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/20240514093203.png)

从输出结果中，我们将记下我们活动的网络接口的名称，即 "**enpos3**"。因为 "**enpos3**"是我们要设置一个静态IP的网络接口。

vi /etc/network/interfaces

```
auto enp0s3
iface enp0s3 inet static
address 192.168.2.2
netmask 255.255.255.0
gateway 192.168.2.2
dns-nameservers 8.8.4.4 8.8.8.8
```

重启网络服务
```shell
sudo systemctl restart NetworkManager.service
```

你可以验证你的 Debian 系统是否已经为你选择的网络接口配置了静态 IP。

```shell
ip a
```

![image.png](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/20240514093330.png)

参考：https://juejin.cn/post/7124495623914520589