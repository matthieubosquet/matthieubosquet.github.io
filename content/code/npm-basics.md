---
permalink: /code/npm_basics
title: npm 101
description: ...or how to set up a npm.
category: programming
tags:
  - programming
  - node.js
  - javascript
  - npm
  - dev environment
---


!TODO REFACTOR AND WRITE THAT : 

(source: http://stackoverflow.com/questions/10081293/install-npm-into-home-directory-with-distribution-nodejs-package-ubuntu)

NPM will install local packages into your projects already, but I still like to keep the system away from my operating system's files. Here's how I suggest compartmentalizing Nodejs packages:

Install Nodejs and NPM via the chris-lea PPA. Then I set up a package root in my homedir to hold the Node "global" packages:

 $ NPM_PACKAGES="$HOME/.npm-packages"
 $ mkdir -p "$NPM_PACKAGES"
Set NPM to use this directory for its global package installs:

 $ echo "prefix = $NPM_PACKAGES" >> ~/.npmrc
Configure your PATH and MANPATH to see commands in your $NPM_PACKAGES prefix by adding the following to your .zshrc/.bashrc:

# NPM packages in homedir
NPM_PACKAGES="$HOME/.npm-packages"

# Tell our environment about user-installed node tools
PATH="$NPM_PACKAGES/bin:$PATH"
# Unset manpath so we can inherit from /etc/manpath via the `manpath` command
unset MANPATH  # delete if you already modified MANPATH elsewhere in your configuration
MANPATH="$NPM_PACKAGES/share/man:$(manpath)"

# Tell Node about these packages
NODE_PATH="$NPM_PACKAGES/lib/node_modules:$NODE_PATH"
Now when you do an npm install -g, NPM will install the libraries into ~/.npm-packages/lib/node_modules, and link executable tools into ~/.npm-packages/bin, which is in your PATH.

Just use npm install -g as you would normally:

[justjake@marathon:~] $ npm install -g coffee-script
... (npm downloads stuff) ...
/home/justjake/.npm-packages/bin/coffee -> /home/justjake/.npm-packages/lib/node_modules/coffee-script/bin/coffee
/home/justjake/.npm-packages/bin/cake -> /home/justjake/.npm-packages/lib/node_modules/coffee-script/bin/cake
coffee-script@1.3.3 /home/justjake/.npm-packages/lib/node_modules/coffee-script

[justjake@marathon:~] $ which coffee
/home/justjake/.npm-packages/bin/coffee
