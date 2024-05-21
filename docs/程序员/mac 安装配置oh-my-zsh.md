---
# 页面的标题
title: mac 安装配置oh-my-zsh
# 标题的后缀。
titleTemplate:
# 页面的描述
description:
# editLink: true
# 指定要为当前页面注入的额外 head 标签。将附加在站点级配置注入的头部标签之后。
# head:
#   - - meta
#     - name: description
#       content: hello
#   - - meta
#     - name: keywords
#       content: super duper SEO
footer: true
# top: 1
categories:
  - 程序员
tag:
 - zsh
 - mac
---


# mac 安装配置oh-my-zsh

## 1. 安装brew
```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
安装完成查看版本
`brew -v`
![image.png](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/20240521091043.png)

## 2. 安装zsh
`brew install zsh`
 查看版本
 `zsh --version`
 ![image.png](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/20240521091152.png)

将zsh设置为默认shell
```
sudo sh -c "echo $(which zsh) >> /etc/shells" chsh -s $(which zsh)
```
## 3. 安装oh-my-zsh

### curl方式安装：

github
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
gitee
```
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

### wget方式安装：

github
```
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```
gitee
```
sh -c "$(wget -O- https://gitee.com/pocmon/mirrors/raw/master/tools/install.sh)"
```

## 4. 配置Oh My Zsh

安装完成后，Oh My Zsh会提示你选择一种主题。选择一个你喜欢的主题，或者按Enter键使用默认主题。你还可以在`~/.zshrc`文件中自定义Oh My Zsh的配置

![image.png](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/20240521092057.png)

## 5. 重启终端

安装完成后，你需要重新启动终端，以便使用新的Zsh和Oh My Zsh。

## 6. 为 Oh My Zsh 安装 Powerlevel10k 主题

打开终端，运行以下命令，从 GitHub 上克隆 Powerlevel10k 代码库，并将文件放到 Oh My Zsh 的配置文件夹中。

```sh
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

用文本编辑器打开 `~/.zshrc` 文件，将 `ZSH_THEME` 变量设为 `"powerlevel10k/powerlevel10k"`。

![image.png](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/20240521182628.png)

重新启动你的终端，启动首次向导来设置 Powerlevel10k 主题。

### 配置时遇到字体文件无法下载问题

```
curl -fsSL -o /Users/zcy/Library/Fonts/MesloLGS\ NF\ Regular.ttf.tmp https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf

这句报错，忘了截图了
```

发现是自体文件下载地址不对，应该是作者修改了自体文件仓库地址

解决：
修改`～/.oh-my-zsh/custom/themes/powerlevel10k/internal/wizard.zsh`文件
找到，local -r font_base_url，修改为
```
local -r font_base_url='https://github.com/romkatv/powerlevel10k-media/blob/master/'
```

重启客户端，再次运行配置向导