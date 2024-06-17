---
# 页面的标题
title: macOS chrome浏览器debugging模式新开一个本地调试浏览器

# 页面的描述
description:
editLink: true
categories:
  - 程序员
tag:
  - python
  - selenium
---

# macOS chrome浏览器debugging模式新开一个本地调试浏览器

执行如下命令

``` shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=8888 --user-data-dir="/Users/zcy/dev/python-workspace/spider/pythonProject/chromedriver/debugging"
```

执行上面命令打开浏览器窗口后，python代码
```python

from selenium import webdriver  
from selenium.webdriver import Keys  
from selenium.webdriver.chrome.options import Options  
from selenium.webdriver.chrome.service import Service  
from selenium.webdriver.common.by import By  
from selenium.webdriver.support.wait import WebDriverWait  
from selenium.webdriver.support import expected_conditions as EC


service = Service(r'/Users/zcy/dev/python-workspace/spider/pythonProject/chromedriver/126.0.6478.61/mac/arm/chromedriver')  
opt = Options()  
opt.page_load_strategy = 'eager'  
opt.debugger_address = '127.0.0.1:8888'  
browser = webdriver.Chrome(service=service, options=opt)
```