# Markdown 拓展范例

以下内容是VitePress的内置Markdown扩展展示.

## 文字highlight

VitePress 运用[Shiki](https://github.com/shikijs/shiki),的功能

**内容输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**内容输出**

```js{4}     
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 标题

**内容输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**内容输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
