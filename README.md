# leetcode_typescript

> leetcode with typescript

This repo project structure is inspired by [axross/
leetcode-typescript](https://github.com/axross/leetcode-typescript), but source code is [my](github.com/minkj1992) own product.

- [Top 100 Liked Questions](https://leetcode.com/problemset/algorithms/)
- 🏃‍♀️ Enough small time and space complexity (not "minimum" because of no micro optimization)
- 💯 Runs on [Deno](https://deno.land) (written in TypeScript)
- ✅ Fully tested
- 🗣 With helpful comments

## setup

```bash
brew install deno
npm i typescript typescript-deno-plugin
```

## run test

```bash
# all
deno test

# single
deno test tests/<테스트명>.ts
```

## git push

```bash
$ git remote -v
nexters	https://github.com/Nexters-Algorithm-Study/leetcode_typescript.git (fetch)
nexters	https://github.com/Nexters-Algorithm-Study/leetcode_typescript.git (push)
origin	https://github.com/minkj1992/leetcode_typescript.git (fetch)
origin	https://github.com/minkj1992/leetcode_typescript.git (push)

$ git remote | xargs -L1 git push --all # push to all remote repo
```
