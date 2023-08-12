---
title: ElastiCache 
date: 2023-08-12
tags:
	- aws
categories: 
	- aws
---

## Introduction

Managed **caching** service which either runs Redis or Memcached.

### Caching

Caching is the process of storing data in a cache. A cache is a **temporary storage** area. Caches are optimized for fast retrieval with the trade off that data is not durable.

### In-Memory Data Store

When data is stored In-Memory(think of RAM). The trade off is high volatility(low durability, risk of data loss) but access to data is **very fast**.

Deploy, run, and scale **popular open source compatible** in-memory data stores.

Frequently identical queries are stored in the cache.

ElastiCache is only accessible to resource operating with the same VPC to ensure low latency.

ElastiCache supports 2 open-source caching engins:
1. Memcached
2. Redis

## Caching Comparison

* **Memcached** is generally perferred for caching HTML fragments. Memcache is a simple key/value store. The trade off it to be simple is that its very fast.
* **Redis** can perform many different kinds of operations on your data. It's very good for leaderboards, keep track of unread notification data. It's very fast, but arguably not as fast as Memcached.

## Cheat Sheet
* **ElastiCache** is a managed in-memory caching service.
* ElastiCache can launch either **Memcached** or **Redis**.
* **Memcached** is a simple key/value store preferred for caching HTML fragments and is arguably faster than Redis.
* **Redis** has richer data types and operations. Great for leaderboard, geospatial data or keeping track of unread notifications.
* A cache is a **temporary storage** area.
* Most frequently identical queries are stored in the cache.
* Resources only **within the same VPC** may connect to ElastiCache to ensuer low latencies. 
