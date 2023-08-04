---
title: Command Line Interface(CLI)
date: 2023-07-30
tags:
	- aws
categories: 
	- aws
---

## Introduction

The **AWS CLI** lets you interact with AWS from anywhere by simple using a command line.

You can from the CLI perform actions such as
* List buckets, upload data S3.
* Lanuch, stop, start and terminate EC2 instances
* Update security groups, create subnets
* etc

Important AWS CLI flags to know
* Easily switch between AWS accounts using **--profile**
* Change the **--output** between json, table and text

## Software Deveolpment Kit(SDK)

A Software Developement Kit(SDK) is a set of tools and libraries that you can use to create applications for a specific software package.

The AWS SDK is a set of API libaries that let you intergrate AWS services into your applications.

The SDK is available for the following languages:
* C++
* GO
* Java
* Javascript
* .NET
* NodeJs
* PHP
* Python
* Ruby

## Programmatic Access Key and Secret

When you enable **Programmatic Access** for AWS users, you'll have the ability create **Access Key ID** and **Secret Access Key**. These are collectively known as **AWS Credentials**

You will want to stored your credentials in your user's home, like `~/.aws/credentials`

The credentials files allow you to manage multipe credentials(called profiles)

## Cheat Sheet
* **CLI** stands for Command Line Interface
* **SDK** stands for Software Development Kit
* The **AWS CLI** lets you interact with AWS from anywhere by simple using a command line.
* The **AWS SDK** is a set of API libraries that let you integrate AWS services into your applications.
* **Programmatic Access** must be enabled per user via the IAM console to use CLI or SDK.
* **aws configure** command used to setup your AWS credentials for the CLI
* The CLI is installed via a python script
* Credentials get stored in a plain text file(whenever possible use roles instead of AWS credentials)
* The SDK is available for the following programming languages
    * C++
    * Go
    * Java
    * Javascript
    * .NET
    * NodeJs
    * PHP
    * Python
    * Ruby
