## git日常
```
git add
git commit -m '提交说明'
```
-- 回退版本 数字是几就回退到哪个版本
```
git reset --hard HEAD~1

git reset --hard 版本号   回退到此版本
```
## 获取状态  获取操作日志   和版本
```
git status
git log
git reflog

```

## 分支
-- 新建分支  git checkout -b 分支名称
-- 切换分支  git checkout 分支名称
-- 删除分支  git chenckout -d 分支名称
## 合并
-- git merge 分支名称(两个分支合并)
