# Junhao Wu — Personal Website

A minimal Jekyll site hosted with GitHub Pages.

## Structure

```text
index.md / publications.md / experience.md   Page content
_data/                                       Publications and education data
_includes/                                   Reusable cards
_layouts/default.html                        Shared page shell and navigation
assets/css/profile.css                       All visual styles
images/                                      Site images
```

To add a publication or education entry, edit the corresponding YAML file in
`_data/`; the card markup is generated automatically.

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000>.
