---
permalink: BGqYOXzSKBEL
title: Git 101
description: An introduction to git.
category: programming
tags:
  - programming
  - git
  - version control
---

<h2>Install</h2>
{% highlight bash %}
$ apt-get install git
$ git config --global user.name "jon coucou"
$ git config --global user.email "joncoucou@coucoucorp.com"
{% endhighlight %}

<h2>Set up a Git repo</h2>
{% highlight bash %}
$ git init
$ git add -A
$ git commit -m "A project about bla bla."
{% endhighlight %}

<h2>Github</h2>
<h3>New repo</h3>
<p>1. Create a new repository from github.com.</p>
<p>2. Initialize project locally (here with MIT License for code, look at Creative Commons NonCommercial ShareAlike for content and investigate options).</p>
{% highlight bash %}
$ mkdir project_bla && cd project_bla
$ printf "# project bla\n\nA great punchline explaining the purpose of project bla." > README.md
$ curl -o LICENSE.md https://raw.githubusercontent.com/matthieubosquet/templates/master/License_MIT
$ sed -i 's/\[year\]/2015/' LICENSE.md
$ sed -i 's/\[fullname\]/Jon Coucou/' LICENSE.md
$ printf "*~\n*.swp\n*.swo" > .gitignore
$ git init
$ git add -A
$ git commit -m "Project bla initialized"
{% endhighlight %}
<p>3. Add origin and push to repo.</p>
{% highlight bash %}
$ git remote add origin <REPOSITORY_URL>
$ git push origin master
{% endhighlight %}
<h3>SSH key commit</h3>
<p>1. Generate ssh key pair.</p>
{% highlight bash %}
$ ssh-keygen -t rsa -C "<Email@truc.com>"
{% endhighlight %}
<p>2. Add private key to ssh agent.</p>
{% highlight bash %}
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/id_rsa
{% endhighlight %}
<p>3. Add public key ~/.ssh/id_rsa.pub to account via github.</p>
<p>4. Test that fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48. If yes connect and check it says Hi to you.</p>
{% highlight bash %}
$ ssh -T git@github.com
{% endhighlight %}
<p>5. Change origin to commit via ssh.</p>
{% highlight bash %}
$ git remote set-url origin git@github.com:<Username>/<Project>.git
{% endhighlight %}
<p>6. Push changes.</p>
{% highlight bash %}
$ git push origin master
{% endhighlight %}

