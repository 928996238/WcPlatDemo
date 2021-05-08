# Git日常
## git提交
```
git add
git commit -m '提交说明'
```

## git推送
```
git push origin master
```

## 回退版本 数字是几就回退到哪个版本
```
git reset --hard HEAD~1
git reset --hard 版本号   回退到此版本
```

## 对于log和reflog中的版本合并 
```
git rebase -i HEAD~3(三个版本进行合并)
```

## 获取状态  获取操作日志   和版本
```
git status
git log
git reflog
```
## 比较差异
```
git diff
git diff --cached  比较暂存区和本地库最后一次commit的区别
git diff HEAD  比较工作区和本地库最后一次commit的区别
```

## 分支
```
查看分支  git branch
新建并切换分支  git checkout -b 分支名称
新建分支  git branch 分支名称
切换分支  git checkout 分支名称
删除本地分支  git branch -d 分支名称
删除远程分支  git push -d 分支名称
```

## 合并
```
git merge 分支名称(当前分支和指令分支 两个分支合并)
```


## 拉取代码
```
git pull origin master    git pull  分支名称  （从指令分支拉取代码 到当前分支）
```
