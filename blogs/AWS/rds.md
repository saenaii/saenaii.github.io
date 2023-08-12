---
title: Relational Database Service(RDS)
date: 2023-08-12
tags:
	- aws
categories: 
	- aws
---

## Introduction

A managed relational database service. Support multiple SQL engines, easy to scale, backup and secure.

Relational Database Service(RDS) is the AWS solution for **relational** databases. There're **6 relational database** options currently available on AWS.
* Amazon Aurora
* MySQL
* MariaDB
* PostgreSQL
* Oracle
* Microsoft SQL Server

## RDS Encryption

You can turn on encryption at-rest for all RDS engines.

You may not be able to turn encryption on for older versions of some engines.

It will also encrypted the automated backups, snapshots, and read replicas.

Encryption is handled using the AWS Key Management Service(KMS)

## RDS Backups

There're 2 backup solutions available for RDS

### Automated Backups

Choose a Retention Period between 1 and 35 days.

Stores transaction logs throughout the day.

Automated backups are enabled by default. All data is stored inside S3. There's no additional charge for backup storage.

You defined your backup window. Storage I/O may be suspended during backup.

### Manual Snapshots

Taken manually by the user. Backup persist even if you delete the original RDS instance.

## RDS Restoring Backups

When recovering AWS will take the most recent daily backup, and apply transaction log data relevant to that day. This allows point-in-time recovery down to a second inside the retention period.

Backup data is **never restored overtop** of an existing instance.

When you restore an RDS instance from Automated Backup or a Manual Snapshot a new instnace is crated for the restored database.

Restored RDS instance will have a new DNS endpoint.

## RDS Multi-AZ

Ensures database remains available if another AZ becomes unavailable.

Makes an exact copy of your database in another AZ. AWS automatically **synchronizes** changes in the database over to the standby copy.

**Automatic Failover protection** if one AZ goes down failover will occur and standby slave will be promoted to master.

## RDS Read Replicas

Read-Replicas allow you to run **multiples copies** of your database, these copies only allows **reads**(no writes) and is intended to alleviate the workload of your primary database to improve performance.

You must have automatic backups enabled to use Read Replicas.

**Asynchronous** replication happens between the primary RDS instance and the replicas.

You can have up to **5 replicas** of a database. Each Read Replic will have its own DNS Endpoint.

You can have Muti-AZ replicas, replicas in another region, or even replicas of other read replicas.

Replicas can be promoted to their own database, but this breaks replication.

No automatic failover, if primary copy fails you must manually update urls to point at copy.

## RDS Multi-AZ vs Read Replicas

| Multi-AZ Deployments                                      | Read Replicas                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| Synchronous replication - highly durable                  | Asynchronous replication - highly scalable                          |
| Only database engine on primary instance is active        | All read replicas are accessible and can be used for read scaling   |
| Automated backups are taken from standby                  | No backups configured by default                                    |
| Always span two Availability Zones within a single Region | Can be within an Availability Zone, Cross-AZ, or Cross-Region       |
| Database engine version upgrades happen on primary        | Database engine version upgrade is independent from source instance |
| Automatic failover to standby when a problem is detected  | Can be manually promoted to a standalone database instance          |
