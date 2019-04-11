#### 域名解析，根据URL向DNS服务器查询IP

#### 根据IP地址向服务器发起TCP连接
##### 这个连接就是我们所熟知的三次握手

#### 向服务器发起HTTP请求
##### 根据 请求报文 和 响应报文 确定是否需要更新缓存内容


#### 服务器返回请求内容
##### 解析dom tree
##### 解析css tree,构建styles rules，两者结合形成一个Attachment
##### 通过Attachment构造出一个呈现树（Render Tree）
##### Render Tree构建完毕，进入到布局阶段（layout/reflow），将会为每个阶段分配一个应出现在屏幕上的确切坐标。
##### 绘制这个render tree

#### 关闭连接
##### 默认持久连接connection:keep-alive(长连接)
##### 关闭标签页就是关闭这个TCP连接的时机，也就是四次挥手