# niu_helper
一个 Surge 脚本，用于获取小牛电动车电量及续航里程。

## Use At Your Own Risk
该脚本没有经过测试，因为作者并没有小牛电动车。

## 使用
1. 在 app 中获取序列号 (SN, serial number)
2. 通过 MITM 工具抓取 app 流量，获取 token
3. 在 niu.js 文件中填入 SN 和 token
4. 将脚本添加至 Surge 配置中。（具体请查阅 Surge Manual）

## 参考
[Basic - Scripting - Surge Manual](https://manual.nssurge.com/scripting/common.html)

[Cron - Scripting - Surge Manual](https://manual.nssurge.com/scripting/cron.html)

[Cron - 维基百科](https://zh.wikipedia.org/zh-cn/cron)

## Copyright
niu_helper 是 [bfishadow/niu](https://github.com/bfishadow/niu) 的衍生作品。



