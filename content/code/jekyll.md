---
permalink: /code/jekyll
title: Github pages 101
description: ...or how to host a static website for free!
category: programming
tags:
  - programming
  - jekyll
  - github
  - static website
---

## The building blocks of Jekyll

**_layout**  
Holds the 

<h2>Jekyll for github pages</h2>
<h3>Installation</h3>
<p>From repository root :</p>
{% highlight bash %}
$ printf "source 'https://rubygems.org'\ngem 'github-pages'" > Gemfile
$ bundle install
{% endhighlight %}
<p>n.b. On Ubuntu require ruby and ruby-dev</p>

<h3>Commands</h3>
<p>(From repository root)</p>
<p>Run server at http://localhost:4000</p>
{% highlight bash %}
$ bundle exec jekyll serve
{% endhighlight %}

<p>Update Jekyll</p>
{% highlight bash %}
$ bundle update
{% endhighlight %}

<h3>Publish</h3>
<p>Push to branch master on username.github.io (Github Pages)</p>
<p>Create branch gh-pages branch for other repos username.github.io/repos (Github Projects)</p>
{% highlight bash %}
$ git checkout --orphan gh-pages
$ git rm -rf .
$ echo "new project bla" > index.html
$ git add -A
$ git commit -m "My new project"
$ git push origin gh-pages
{% endhighlight %}

<h3>Highlight code with pygments</h3>
<p>Install pygments</p>
{% highlight bash %}
$ pip install Pygments
{% endhighlight %}
<p>Generate a stylesheet (don't forget to link it from html template)</p>
{% highlight bash %}
$ pygmentize -S vim -f html > syntax.css
{% endhighlight %}
<p>List the different styles available</p>
{% highlight bash %}
$ pygmentize -L
{% endhighlight %}
<p>Tag with highlight the portion of code to pygment. Specify language. Add raw/endraw tag for code with curly brackets.</p>
{% highlight bash %}
{% raw %}
{% highlight bash %}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

<h3>Docs</h3>
<p><a href="http://jekyllrb.com/docs/home/">Jekyll docs</a></p>
