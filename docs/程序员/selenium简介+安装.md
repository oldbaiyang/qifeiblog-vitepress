---
# 页面的标题
title: selenium简介+安装

# 页面的描述
description:
editLink: true
categories:
  - 程序员
tag:
 - python
 - selenium
 - 爬虫
---

## Selenium 简介

Selenium 是一个开源的自动化测试工具，主要用于Web应用程序的测试。它支持多种编程语言，包括Java、Python、Ruby、C#等，并且可以与各种浏览器进行交互，如Chrome、Firefox、Internet Explorer等。

官网：
https://www.selenium.dev/
相关资料：
https://selenium-python.readthedocs.io/

chromedriver是一个驱动Chrome浏览器的驱动程序，针对不同的浏览器有不同的driver

### selenium 安装
``` shell
pip install selenium
```

### chromedriver 安装
下载chromedriver，注意版本要和chrome浏览器对应。

chrome浏览器114版本之前下载地址：[https://chromedriver.storage.googleapis.com/index.html](https://chromedriver.storage.googleapis.com/index.html)

chrome浏览器114版本之后下载地址：[https://googlechromelabs.github.io/chrome-for-testing/](https://googlechromelabs.github.io/chrome-for-testing/)

我当前chrome浏览器的版本是125.0.6422.142
![](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/202406141249457.png)

下载对应的chromedriver
![image.png](https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/20240614132009.png)


## selenium使用

引入selenium包，打开百度页面

```python
from selenium import  webdriver  
from selenium.webdriver.chrome.service import Service  
  
# 初始化service，executable_path参数为chromedriver执行文件地址  
service = Service(executable_path='../chromedriver/126.0.6478.61/mac/arm/chromedriver')  
browser = webdriver.Chrome(service=service)  
# 设置全屏打开  
browser.maximize_window()  
browser.get('https://www.baidu.com')
```