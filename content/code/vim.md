---
permalink: /code/vim
title: Vim
description: What to do with vim?
category: programming
tags:
  - programming
  - vim
  - bash
---

<h2>Install</h2>
<p>Install vim-gtk for easy X copy</p>
{% highlight bash %}
$ apt-get install vim-gtk
{% endhighlight %}

<h2>Plugins!</h2>
<h3>Pathogen install</h3>
<p>1. Create directories</p>
{% highlight bash %}
$ mkdir -p ~/.vim/autoload ~/.vim/bundle
{% endhighlight %}
<p>2. Download tpope vim-pathogen from github to ~/.vim/autoload</p>
<p>3. Add a line to ~/.vimrc</p>
{% highlight bash %}
$ echo 'execute pathogen#infect()' >> ~/.vimrc
{% endhighlight %}
<p>4. Copy plugins to ~/.vim/bundle</p>
<h3>Plugins suggestion</h3>
{% highlight bash %}
$ cd ~/.vim/bundle
$ git clone https://github.com/tomtom/tlib_vim.git
$ git clone https://github.com/MarcWeber/vim-addon-mw-utils.git
$ git clone https://github.com/garbas/vim-snipmate.git
$ git clone https://github.com/honza/vim-snippets.git
{% endhighlight %}
