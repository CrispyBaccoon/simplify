# simpl.fyi

A browser extension that brings the simplicity of Google Inbox to Gmail.

## What is this fork?

<kbd>command + \\</kbd> to toggle the menu instead of the existing shortcut. Maybe helpful if you're used to Notion. That's the only change.

> ⚠️ `edit Jun 26, 19` — I switched my text editor to VS Code and all the shortcuts are the same as Notion's lmao. I've come to the conclusion that Notion's keyboard shortcuts are probably a product of Notion being written using using VS Code. 🤔

You can also use <kbd>control + \\</kbd> if you like.

I'll merge updates from @[leggett](https://github.com/leggett)'s [Simplify repo](https://github.com/leggett/simplify) every once and a while probably. Message me on twitter if u need a critical update or st but idk who even reads the readmes of forks lmao.

## How to install

[Download the repo](https://github.com/mwvd/simplify/archive/master.zip) then load the `gmail` folder as an unpacked extension in Chrome.

## Who made Simplify

Simplify was made by [Michael Leggett](https://leggett.org).

## Some notes:

Exclude your work email if you want - in [`gmail/manifest.json`](https://github.com/mwvd/simplify/blob/master/gmail/manifest.json), `content_scripts.exclude_matches` ⤵

```json
"exclude_matches": ["*://mail.google.com/mail/u/1/"],
```

## Merging between forks

```shell
git remote add og https://github.com/leggett/simplify.git # (already done)

git pull og master
git push origin
```
