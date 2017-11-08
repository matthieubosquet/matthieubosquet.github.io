---
permalink: /code/localhost
title: Localhost troubleshooting
description: ...or how to run websites on your machine.
category: programming
tags:
  - programming
  - localhost
  - bash
---

## Start a server in current folder

e.g. with python 2 on localhost port 8000. [http://localhost:8000](http://localhost:8000)

{% highlight bash %}
$ cd my-website-directory
$ python -m simpleHTTPServer 8000
{% endhighlight %}

## Troubleshoot localhost

Check if a process is still running on port 8000.

{% highlight bash %}
$ netstat -np | grep 8081
{% endhighlight %}

Check if a javascript node server is running (head displays the header line of the ps command).

{% highlight bash %}
$ ps aux | { head -1; grep -i node; }
{% endhighlight %}

Check if a python simpleHTTPServer is running (grep -i is case insensitive).

{% highlight bash %}
$ ps aux | { head -1; grep -i simplehttpserver; }
{% endhighlight %}

Kill all processes associated with port 8000.

{% highlight bash %}
$ sudo fuser -k 8000/tcp
{% endhighlight %}

Kill the process with pid 8784 (checkout PID column of the ps command to find a process id number).

{% highlight bash %}
$ kill -9 8784
{% endhighlight %}
