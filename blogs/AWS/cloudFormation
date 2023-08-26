---
title: CloudFormation 
date: 2023-08-24
tags:
	- aws
categories: 
	- aws
---

## [Introduction](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

A Templating Language that **defines AWS resources** to be provisioned. **Automating** the creation of resources via code.

**Infrastructure as Code**

### What is Infrastructure As Code(IaC)

The process of managing and provisioning computer data centers(eg. AWS) through machine-readable definition files(eg. YAML, JSON files) rather than physical hardware configuration or interactive configuration tools. (stop doing manual configuartion!)

### Use Case

People pay a monthly subscription and we run a Minecraft server. They choose **where** they want to and **what size** of server they want to run.

We can use their **inputs** and use an AWS Lambda to create a new CloudFormation stack. We have a lambda send them the email of their new Minecraft Server IP address and details.

## Cheat Sheet

* When being asked to **automate** the provisioning of resources think CloudFormation.
* When Infrastructure as Code(IaC) is mentioned, think CloudFormation.
* CloudFormation can be written in either JSON or YAML.
* When CloudFormation encounters an error, it will rollback with **ROLLBACK_IN_PROGRESS**.
* CloudFormation templates larger than 51,200 bytes(0.05M) are too large to upload directly, and must be imported into CloudFormation via an S3 bucket.
* **NestedStacks** helps you break up your CloudFormation template smaller reusable templates that can be composed into large templates.
* **At least one resource** under resources
  * must be defined for a CloudFormation template to be valid.
* **MetaData** extra information about your template.
* **Description** a description of what the template is suppose to do.
* **Parameters** is how you get user inputs into templates.
* **Transofrms** applies marcos(like applying a mod which change the anatomy to be custom)
* **Outputs** are values you can use to import into other stacks.
* **Mappings** maps keys to values, just like a lookup table.
* **Resources** defines the resources you want to provision, **at least one resource is required**(others are optional).
* **Conditions** are whether resources are created or properties are assigned.
