# VUE 使用说明

## v-model修饰符
* v-model.number  表示获取到的值 是 number类型的
> 有空的时候补充一下  绑定值  和 修饰符

## 计算属性 computed:{}
* 数据实时更新
* 计算属性是基于响应式依赖就行缓存的   对应的值不变动 不会重新执行
* 使用缓存  节省性能消耗
* 但是方法 当其他的值变动的时候 会导致页面重新渲染  方法也会执行
> 只有当依赖的属性 发生变化的时候  计算属性才会重新执行
```
computed:{
    msgReverse:function(){
        return "gsm!!!";
    }
}
```

## 侦听器 watch
* 两种使用形式(三种写法)
> 第一种  监测到 msg 变化的时候   触发 后边的 function
> 第二种  检测到msg变化的时候   触发 func 方法  func 为methods 里边定义的方法
> 第三种  检测到msg变化的时候   触发 handler 方法   其中的 deep(深度监听) 默认为false，监听对象的时候，如果只改变对象其中的一个属性  监听不到 不会触发handler  若deep改为true  则是对对象进行深度监听 每个属性都添加了一个侦听器 就可以侦听到了(但是消耗性能)
```
watch:{
    msg:function(newValue,oldValue){}
    msg:"func"
    msg:{
        handler(){

        },
        deep:true/false,(深度监听)
        immediate:true/false (是否第一次赋值的时候就触发)
    }
    <!-- 侦听某个对象的某一个属性的时候 -->
    "obj.name":function(){}
}
```
* watch 其实就是调用 vm.$watch 方法
```
vm.$watch("msg",function(){
    -------
},{
    deep:true/false
    immediate:true/false
})
```
> var unwatch = vm.$watch('msg',function(){})     unwatch() ==>  vm.$watch会返回一个方法  执行一下 取消监听

### 计算属性computed  VS  侦听器wacth
* 应用场景
> computed 多个数据变化 影响同一个数据
> watch    一个数据变化  影响多个数据
> computed 不支持异步  watch  可以异步执行

## vue发送请求  vue-resource  (不用依赖 jquery  的ajax了)
* 引入 vue-resource
* 返回Promiase对象
> vue-resource 依赖vue  必须在vue引入之后才能引入  会挂载到vue实例对象上  一个$http 方法
```
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
```

## Axios 发送http请求
* 引入 Axios  函数  axios()
* 返回Promiase对象
```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
* 常规使用方法
```
axios({
  method: 'get', // post、get、put....
  baseURL: '', // 请求的域名，基本地址
  url: '', // 请求的路径
  params: {}, // 会将请求参数拼接在url上
  data: {}, // 会将请求参数放在请求体中
  headers: {}, // 设置请求头，例如设置token等
  timeout: 1000, // 设置请求超时时长，单位：ms
})
```
* 简化别名
> axios.get("wechat/getcode",{
>    baseURL:'www....com',
>    params:{
>       id:'',
>       name:''
>   }
> })   
> axios.post("",{},{
>     baseURL:'',
> })
* axios.all() 处理并发
```
axios.all([
    axios.get('/a'),
    axios.get('/b'),
    axios.get('/c')
]).then( axios.spread( (res1,res2,res3) => {} ))
```
* 拦截器 interceptors
> 请求拦截器
```

```

