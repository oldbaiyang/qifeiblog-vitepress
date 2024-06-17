---
# 页面的标题
title: mac安装软件，提示文件已损坏，解决办法

# 页面的描述
description:
editLink: true
categories:
  - 程序员
tag:
  - mac
---

# mac安装软件，提示文件已损坏，解决办法

下次出现了再截图吧。

macOS版本：14.5 (23F79)
 
首先打开「终端.app」，其次输入以下命令并回车，最后输入开机密码再回车

sudo xattr -rd com.apple.quarantine 空格 软件的路径

sudo xattr -r -d com.apple.quarantine /Applications/Wormhole.app