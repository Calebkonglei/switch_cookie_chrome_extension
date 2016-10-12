# switch_cookie_chrome_extension
>通过切换是否开启测试环境
>功能实现: 
		  >1.按钮状态为on，会向当前页面注入一个name为'x-server-env',value为'test'的cookie，缓存时间为7天；
		  >2.按钮状态为off，会删除页面注入的该cookie。
		  >3.每次加载检测当前页面是否有该cookie，按钮显示相应状态
		  >4.功能待完善中...
		  >更新：
		  >添加功能：检测页面是否有CNZZ数据监测链接，如果有，则取得相关链接数据，显示到弹出框，点击跳转



