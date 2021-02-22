# Chrome Extension - DevOps Adjust Layout

Move the "n of m required checks failed" card to the right sidebar. IMO, this makes the description and comments more accessible.

## How to use

I don't plan to submit this extension to Chromes store. You can use it as a developer:

1. Clone this repo
1. In your browser, visit: chrome://extensions/
1. Check "Developer mode" in the upper right corner
1. Choose "Load unpacked" and select the repo folder

## Microsoft Edge

This extension works in edge but there's a nag dialog if you leave developer extensions enabled.

## Firefox

With a couple minor adjustments this extension works on firefox as well. 

First, enable unsigned extensions by visiting `about:config` and disabling `xpinstall.signatures.required`

Second, change this line in manifest.json

```
  "background": {
    "scripts": ["service-worker.js"]
  },
```
