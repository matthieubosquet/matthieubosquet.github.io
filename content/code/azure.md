---
date: 2017-11-08
permalink: dJioHIZfLNKe
tags: ["programming", "azure"]
title: Microsoft Azure
---

## Install the Azure CLI

{% highlight bash %}
$ brew update
$ brew install azure-cli
# Explore az command usage
$ az -h
{% endhighlight %}

## Account and subscription

{% highlight bash %}
# Set current subscription
$ az account set -s "Visual Studio Enterprise"
# Check current subscription
$ az account show
# List supported locations in current subscription
$ az account list-locations
{% endhighlight %}

## Resource groups

{% highlight bash %}
# Create a resource group
$ az group create -n "test-group" -l "westeurope"
# Check existing groups
$ az group list
# Delete group
$ az group delete -n "test-group"
{% endhighlight %}

