---
title: VPC(Virtual Private Cloud)
date: 2023-07-17
tags:
	- aws
categories: 
	- aws
---

Provision a **logically isolated section of the AWS Cloud** where you can launch AWS resources in a **virtual network** that you define.

![](../../asset/images/aws/vpc.png)

## Key Features
* VPCs are **Region Specific** they do not span regions.
* You can create upto **5 VPC** per region.
* Every region comes with a default VPC.
* You can have **200 subnets** per VPC.
* You can use **IPv4 CIDR Block** and in addition to a **IPv6 CIDR Blocker**(the address of the VPC)
* **Cost nothing**: VPC's, Route Tables, Nacls, Internet Gateways, Security Groups and Subnets, VPC Peering
* **Some things cost money**: eg. NAT Gateway, VPC Endpoints, VPN Gateway, Customer Gateway.
* **DNS hostnames** (should your instance have domain name addresses)
* When you create a VPC, the DNS hostname is disabled by default.

## Default VPC
AWS has a default VPC in every region so you can immediately deploy instances.

* Create a VPC with a size /16 IPv4 CIDR block(172.31.0.0/16)
* Create a size /20 **default subnet in each Availability Zone**
* Create an **Internet Gateway** and connect it to your default VPC.
* Create a **default security group** and associate it with your default VPC
* Create a **default network access control list(NACL)** and associate it with your default VPC.
* Associate the **default DHCP** options set for your AWS account with your default VPC.
* When you create a VPC, it automatically has a main route table.

## Default Everywhere IP

0.0.0.0/0 is also know as default, it represents all possible IP addresses.

* When we specify **0.0.0.0/0** in our route table for IGW(Internet Gateway) we are allow internet access.
* When we specific **0.0.0.0/0** in our security groups inbound rules, we are allowing all trafic from the internet access our public resources.
* When you see **0.0.0.0/0**, just think of giving access from anywhere or the internet. 

## VPC Peering

**VPC Peering** allows you to connect one VPC with another over a **direct network route** using **private IP addresses**

![](../../asset/images/aws/vpc_peering.png)

**VPC Peering** allows you to connect one VPC with another over a **direct network route** using **private IP addresses**
* Instances on peered VPCs **behave** just like they are on the **same network**
* Connect VPCs across **same** or **different AWS accounts** and **regions**
* Peering uses a **Star Configuration: 1 Central VPC-4 other VPCs**
* **No Transitive Peering**(peering must take place directly between VPCs)
  * Needs a one to one connect to immediate VPC
  * For example, A - B - C, A cannot talk to C, because there's no VPC between A and C, we must create a VPC to connect A and C, like A-C.
* **No Overlapping CIDR Blocks**

## Route Tables

![](../../asset/images/aws/route_tables.png)
Route tables are used to determine where **network traffic is** directed. Each **subnet** in your VPC **must be associated** with a route table.

A subnet can only be associated **with one route table at a time**, but you can associate multiple subnets with the same route table.

## Internet Gateway(IGW)

