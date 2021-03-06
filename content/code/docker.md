---
permalink: vOoWhK1ONtmv
title: Docker
description: ...an introduction to Docker.
category: programming
tags:
  - programming
  - docker
---

<p>Easy setup of development environment (Database, Server, Compilation ...). Much faster than virtual machines.</p>
<p><a href="https://docs.docker.com/reference/commandline/cli/">Docker command line reference</a></p>


<h2>Install</h2>
<p>The package docker.io is for Ubuntu 14.04. <a href="https://docs.docker.com/installation/">Follow instructions on docker.com for other os</a>.</p>
{% highlight bash %}
$ sudo apt-get install docker.io
{% endhighlight %}


<h2>Images</h2>
<p>Images are used as a base to run a program with Docker.</p>
<p>Images can be a basic os or an os already customized with packages (debian:wheezy, ubuntu:utopic, redis:latest).</p>
<p>On the Docker Hub, <a href="https://registry.hub.docker.com/repos/stackbrew/?&s=stars">the user stackbrew owns a bunch of official images</a>.</p>
<p>Download a couple of the most important images and list images available on your machine.</p>
{% highlight bash %}
$ sudo docker pull debian:wheezy
$ sudo docker pull ubuntu:vivid
$ sudo docker images
{% endhighlight %}


<h2>Containers</h2>
<p>A container is used to run a command.</p>
<p>A container can expose its ports and share volumes (disk).</p>
<p>Echo 'hello world' with a container, list all containers, remove all containers</p>
{% highlight bash %}
$ sudo docker run -ti debian:wheezy echo "hello world"
$ sudo docker ps -a
$ sudo docker rm $(sudo docker ps -aq)
{% endhighlight %}
<p>Echo 'hello world' with a container and remove it once command finishes.</p>
{% highlight bash %}
$ sudo docker run -ti --rm debian:wheezy echo "hello world"
{% endhighlight %}


<h2>Dockerfile</h2>
<p>Docker files describe the building of an image.</p>
<p>Create a useful dockerfile (vi Dockerfile):</p>
{% highlight bash %}
#########################################
# Cow says fortunes beautiful container #
#########################################
#
# Build image:
# sudo docker build -t docker-username/cowsay-fortune .
# Start container (--rm to remove it on exit):
# sudo docker run --rm docker-username/cowsay-fortune
#
# Use debian wheezy as base image
FROM debian:wheezy

# Install cowsay, fortune and fortune files (-y to say yes during install)
RUN apt-get update && apt-get install -y cowsay fortune fortunes-debian-hints fortunes-off

# Add /usr/games to the $PATH environment variable
# n.b.
# We could specify the full command path and not modify $PATH:
# ENTRYPOINT exec /usr/games/fortune | /usr/games/cowsay
ENV PATH $PATH:/usr/games

# Set command run by the container (exec to stop it nicely)
ENTRYPOINT exec fortune | cowsay
{% endhighlight %}
<p>Now execute the build command from the directory where you saved this Dockerfile.</p>
{% highlight bash %}
$ sudo docker build -t docker-username/cowsay-fortune .
{% endhighlight %}
<p>From anywhere on your system start a container with this image as a base and a cow will tell you fortunes. FANTASTIC!</p>
{% highlight bash %}
$ sudo docker run --rm docker-username/cowsay-fortune
{% endhighlight %}
<p>You should probably not remove this wonder from your system but if you want to delete an image, check out images ids ($ sudo docker images) then remove it ($ sudo docker rm image_id).</p>

<h2>Github pages run in docker</h2>
<p>Create a docker file describing the build of the jekyll server</p>
{% highlight bash %}
#######################
# Github Jekyll pages #
# #####################
#
# Build image:
# sudo docker build -t username/github-pages .
# Start container:
# (map port 4000 of container to port 4000 of host)
# (/github-pages on container is current directory on host)
# sudo docker run --rm -p 4000:4000 -v $(pwd):/github-pages -it username/github-pages
#
# Use debian wheezy as base image
FROM debian:wheezy

# Install ruby
RUN apt-get update \
    && apt-get install -y \
    build-essential zlib1g-dev ruby ruby-dev ruby1.9.1-dev \
    node \
    python-pygments

# Install bundler
RUN gem install bundler

# Install github-pages
WORKDIR /tmp
RUN printf "source 'https://rubygems.org'\ngem 'github-pages'" > Gemfile
RUN bundle install

# Mount point for host is the working directory /github-pages, container listens to port 4000
RUN mkdir /github-pages
WORKDIR /github-pages
VOLUME /github-pages
EXPOSE 4000

# Always use that command on docker run
ENTRYPOINT exec bundle exec jekyll serve
{% endhighlight %}
<p>Build the image and run it from the source of your github-pages repository</p>
{% highlight bash %}
$ sudo docker build -t username/github-pages .
$ sudo docker run --rm -p 4000:4000 -v $(pwd):/github-pages -it username/github-pages
{% endhighlight %}
<p>Browse localhost:4000. Et voilà.</p>

<h2>Docker Hub</h2>
<p>The Docker Hub hosts Docker images.</p>
<p>Create an account on docker.com and you'll be able to publish your images to the Docker Hub.</p>
<p>Publish my cowsay-fortune image.</p>
{% highlight bash %}
$ sudo docker push docker-username/cowsay-fortune
{% endhighlight %}
<p>Download my cowsay-fortune image.</p>
{% highlight bash %}
$ sudo docker pull docker-username/cowsay-fortune
{% endhighlight %}
<p>Alternatively you can '$ sudo docker run registry' over a LAN.</p>


<h2>Compile files</h2>
<p></p>


<h2>Forward X11 over ssh</h2>
<p>To run a GUI, you need to set up ssh in the Dockerfile.</p>
{% highlight bash %}

{% endhighlight %}


<h2>Create a link to a database file</h2>
<p> </p>
{% highlight bash %}
$ docker run -d --name frontdb mysqlimage
$ docker run -d --link frontdb:sql webimage
{% endhighlight %}

<h2>Ship for production tricks</h2>
<h3>Configuration</h3>
<p>1. Inject environment variables</p>
{% highlight bash %}
$ docker run -e DB_HOST=... -e DB_PORT=...
{% endhighlight %}
<p>2. bind-mount a configuration file into the container</p>
{% highlight bash %}
$ docker run -v /etc/docker/config/myapp.yaml:/config.yaml
<p>3. Resolve everything with key-value store (zookeeper, etcd, consul ...) or with DNS (consul, skydns, skydock, dnsmasq ...)</p>

{% endhighlight %}


<h2>Admin cli</h2>
<p>List installed packages on system</p>
{% highlight bash %}
$ dpkg -l | wc -l
{% endhighlight %}
<p>List processes running on system</p>
{% highlight bash %}
$ ps aux | wc -l
{% endhighlight %}
