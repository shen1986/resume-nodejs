<!--
 * @Description: 个人介绍说明文件
 * @Author: shenxf
 * @Date: 2019-03-06 09:17:38
 -->
# 个人介绍页说明

运用已经学到的知识做了一个模板介绍网页,支持手机端查看。

## 如何使用 //TODO

- 个人介绍的模版,只要修改`staticData/resumeData.json`里面的数据就可以让这份介绍变成你自己的介绍
- 由于使用的是服务端渲染，所以可以设置自己的SEO，以便于被搜索引擎搜索。而且网页展示的结构更清晰
- 必须安装node环境，
    + [Windows 安装](https://jingyan.baidu.com/article/48b37f8dd141b41a646488bc.html)
    + [MacOS 安装](https://www.cnblogs.com/milo-xie/p/6581188.html)
    + [Linux 安装](https://www.cnblogs.com/liuqi/p/6483317.html)
- 进入文件进行如下操作
    + `npm install`
    + `npm server/server.js`
- 打开网页输入`http://127.0.0.1:3000`就能看到个人介绍的网站

## 如何部署 //TODO

- docker 社区版安装 注意，docker虽然有中文网站，但是里面的安装内容比较老，安装的时候最好看源网站
    + 我用的是CentOS系统 [社区版安装方法](https://docs.docker.com/install/linux/docker-ce/centos/)
- docker文件还在制作中，稍后上传

## 补充

- 还有一些功能没有完成，如有什么好的点子和想法或则问题的话，可以联系我`shenxf1986@qq.com`
- fullpage 3.0以后要开源许可证了，还要联系作者，以后自己压缩，就先用2.0版本的。