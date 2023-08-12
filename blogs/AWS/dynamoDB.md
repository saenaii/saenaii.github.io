---
title: DynamoDB 
date: 2023-08-12
tags:
	- aws
categories: 
	- aws
---

## Introduction

A key-value and document database(NoSQL) which can guarantee **consistent reads and writes** at any scale.

### What is NoSQL

NoSQL is database which is nither relational and does not use SQL to query the data for results.

### What is a Key/Value Store

A form of data storage which has a key which references a value and nothing more
```json
{Title: 'S01E019 DS9 Duet'}
```

### What is a Document Store

A form of data storage which a nested data structure.
```json
{
    Series: 'DS9',
    Episodes: [
        {
            Season: 1,
            Epsisode: 19,
            Title: 'Duet'
        }
    ]
}
```

DynamoDB is a NoSQL key/value and document database for internet-scale applications.

### Features
* Fully managed
* Multiregion
* Multimaster
* Durable database
* Built-in security
* Backup and restore
* In-memory caching

### Provides
* Eventual Consistent Reads(default)
* Strongly Consistent Reads

All data is stored on **SSD storage** and is spread across **3 different regions**.

## Table Structure

## Consistent Reads

When data needs to updated it has to write updates to all copies. **It is possible for data to be inconsistent** if you are reading from a copy which has yet to be updated. You have the ability to choose the read consistency in DynamoDB to meet your needs.

### Eventual Consistent Reads(DEFAULT)

When copies are being updated it is possible for you to read and returned an inconsistent copy.

Reads are fast but there is no guarantee of consistent.

All copies of data eventuall become generally consistent within a second.

### Strongly Consistent Reads

When copies are being updated and you attempt to read, it will not return a result untill all copies are consistent.

You have a guarantee of consistency but the trade off is higher latency(slower reads).

All copies of data will be consistent within a second.

## Cheat Sheet

* **DynamoDB** is a fully managed NoSQL key/value and document database.
* Applications that contain large amounts of data but require predictable read and write performance while scaling is a good fit for DynamoDB.
* DynamoDB scales with whatever **read and write capacity you specific** per second.
* DynamoDB can be set to have **Eventually Consistent Read(default)** and **Strongly Consistent Reads**
* **Eventually consistent reads** data is returned immediately but data can be inconsistent. Copies of data will be generally consistent in 1 second.
* **Strongly Consistent Reads** will wait until data in consistent. Data will never be inconsistent but latency will be higher. Copies of data will be consistent within a guarantee of 1 second.
* DynamoDB stores 3 copies of data on SSD drives across 3 regions.
