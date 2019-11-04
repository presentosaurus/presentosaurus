---
id: configuration
title: Configuration
---

You can configure your slides with one of two options:

- `pyroconfig.yaml` in [YAML](https://github.com/yaml/yaml)
- `pyroconfig.toml` in [TOML](https://github.com/toml-lang/toml)

## Example

#### YAML

```yaml
document:
  title: My Presentation Title
  language: en
  meta:
    - name: author
      content: My Name
    - name: description
      content: Description of my Presentation
  link:
    - rel: icon
      href: favicon.ico
  css:
    - path/to/my-styles.css
  js:
    - path/to/my-script.js
```

#### TOML

```toml
[document]
title = "My Presentation Title"
language = "en"
meta = [
  { name = "author", content = "My Name" },
  { name = "description", content = "Description of my Presentation" }
]
link = [{ rel = "icon", href = "favicon.ico" }]
css = ["path/to/my-styles.css"]
js = ["path/to/my-script.js"]
```
