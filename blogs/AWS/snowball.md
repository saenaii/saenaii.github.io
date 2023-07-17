---
title: Snowball
date: 2023-07-17
tags:
	- aws
categories: 
	- aws
---

## [Introduction](https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snowcone-what-is-snowcone.html)

* **Low Cost** 
  * It cost thousands of dollars to transfer 100TB over high speed internet. Snowball can reduce that costs by **1/5th**
* **Speed** 
  * It can take 100TB over 100 days to transfer over high speed internet
* Snowball can reduce that transfer time by **less than a week**

## Snowball features and limitations
* E-Ink display(shipping information)
* Tamper and weather proof
* Data is encryped end-to-end(256-bit encryption)
* Use Trusted Platform Module(TPM)
* For security purposes, data transfers must be completed within **90 days** of the Snowball being prepared.
* Snowball can **Import** and **Export** from **S3**

Snowballs come in two sizes
* **50TB**(42TB for usable space)
* **80TB**(72TB for usable space)

## Snowball Edge
Similar to Snowball but with **more storage** and with **local processing**

### Snowball Edge feature and limitations
* LCD display(shipping information and other functionality)
* Can undertake local processing and edge-computing workloads.
* Can use in a cluster in groups of 5 to 10 devices.
* Three options for device configurations
  * storage optimized(24 vCPUs)
  * compute optimized(54 vCPUs)
  * GPU optimized(54 vCPUs)

Snowball Edge come in two sizes
* **100TB**(83 TB of usable space)
* **100TB Clusterd**(45 TB per node)

## Snowmobile
A **45-foot long** ruggedized **shipping container**, pulled by a **semi-trailer truck**. Transfer up to **100PB** per Sonwmobile.

AWS personel will help you connect your network to the snowmobile and when data transfer is complete, they'll drive it back to AWS import into **S3** or **Glacier**

### Security Features
* GPS tracking
* Alarm monitoring
* 24/7 video surveillance
* An escort security vehicle while in transit(optional)
  
## Snowball Cheat Sheet
* **Snowball** and **Snowball Edge** is a rugged container which contains a storage device
* **Snowmobile** is a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck.
* Snowball and Snowball Edge is for **peta-scale** migration. Snowmobile is for **exabyte-scale** migration
* **Low Cost** thousands of dollars ot transfer 100TB over high speed internet. Snowball is **1/5th**
* **Speed** 100TB over 100 days to transfer over high speed internet, snowball takes **less than a week**
* **Snowball come in two sizes**
  * **50TB**(42TB of usable space)
  * **80TB**(72TB of usable space)
* **Snowball Edge comes in two sizes**
  * **100TB**(83TB of usable space)
  * **100TB Clustered**(45TB per node)
* **Snowmobile comes in one size**: 100PB
* You can both **export** or **import** data using Snowball or Snowmobile.
* You can import into **S3** or **Glacier**
* **Snowball Edge** can undertake local processing and edge-computing workloads.
* **Snowball Edge** can use in a cluster in groups of 5 to 10 devices.
* **Snowball Edge** provides three options for device configurations
  * storage optimized (24 vCPUs)
  * compute optimized (54 vCPUs)
  * GPU optimized (54 vCPUs)
