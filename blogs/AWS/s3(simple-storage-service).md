---
title: S3(Simple Storage Service)
date: 2023-07-15
tags:
	- aws
categories: 
	- aws
---
## What is Object Storage(Object-based Storage)?

data storage architecture that manages data as objects, as opposed to other storage architectures

* **file system** which manages data as a file and file hierarchy.
* **block storage** which manages data as a blocks within sectors and tracks.

S3 provides you with **unlimited storage**. You don't need to think about the underlying infrasturcture.

* S3 Console provide an interface for you to upload and access your data.

## S3 Object

Objects contains your data. They are like files.

Object may consist of:

* **Key** this is the name of the object
* **Value** the data itself made up of a sequence of bytes.
* **Version ID** when versing enabled, the version of object.
* **Metadata** additional informaion attached to the object.

> You can store data from **0 Byte** to 5 Terabytes in size

## S3 Bucket

Buckets hold objects, Buckets can also have folders which is turn hold objects.

S3 is a universal namespace so bucket names must be unique(think like having a domain name).

## [Storage Classes](https://aws.amazon.com/s3/storage-classes/)

* Standard(default)
  * Fast
  * 99.99% Availability
  * 11 9's Durability
  * Replicated across at least three AZs
* Intelligent Tiering
  * Uses ML to analyze your object usage and determinie the appropriate storage class. Data is moved to the most cost-effective access tier, without any performance impact to added overhead.
* Standard Infrequently Access(IA)
  * Still Fast
  * Cheaper if you access files less than once a month
  * Additional retrieval free is applied
  * **50% less** than Standard(reduced availability)
* One Zone IA
  * Still Fast
  * Object only exist in one AZ
  * Avaliability(is 99.95%), but cheaper that Standard IA by 20% less(Reduce durability)
  * Because S3 One Zone-IA stores data in a single AWS Availability Zone, data stored in this storage class will be lost in the event of Availability Zone destruction.
  * A retrieval free is applied.
* Glacier
  * For long-trem cold storage
  * Retrieval of data can take minutes to hours but the off is very cheap storage
* Glacier Deep Archive
  * The lowest cost storage class
  * Data retrieval time is 12 hours

### Storage Class Comparsion

|                                    | S3 Standard            | S3 Intelligent-Tiering | S3 Standard-IA         | S3 One Zone-IA         | S3 Glacier Instant Retrieval | S3 Glacier Flexible Retrieval | S3 Glacier Deep Archive |
| ---------------------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------------- | ----------------------------- | ----------------------- |
| Designed for durability            | 99.999999999%(11 9’s) | 99.999999999%(11 9’s) | 99.999999999%(11 9’s) | 99.999999999%(11 9’s) | 99.999999999%(11 9’s)       | 99.999999999%(11 9’s)        | 99.999999999%(11 9’s)  |
| Designed for availability          | 99.99%                 | 99.9%                  | 99.9%                  | 99.5%                  | 99.9%                        | 99.99%                        | 99.99%                  |
| Availability SLA                   | 99.9%                  | 99%                    | 99%                    | 99%                    | 99%                          | 99.9%                         | 99.9%                   |
| Availability Zones                 | ≥3                    | ≥3                    | ≥3                    | 1                      | ≥3                          | ≥3                           | ≥3                     |
| Minimum capacity charge per object | N/A                    | N/A                    | 128 KB                 | 128 KB                 | 128 KB                       | N/A                           | N/A                     |
| Minimum storage duration charge    | N/A                    | N/A                    | 30 days                | 30 days                | 90 days                      | 90 days                       | 180 days                |
| Retrieval charge                   | N/A                    | N/A                    | per GB retrieved       | per GB retrieved       | per GB retrieved             | per GB retrieved              | per GB retrieved        |
| First byte latency                 | milliseconds           | milliseconds           | milliseconds           | milliseconds           | milliseconds                 | minutes or hours              | hours                   |
| Storage type                       | Object                 | Object                 | Object                 | Object                 | Object                       | Object                        | Object                  |
| Lifecycle transitions              | Yes                    | Yes                    | Yes                    | Yes                    | Yes                          | Yes                           | Yes                     |

S3 Guarantees

* Platform is built for 99.99% availability.
* Amazon guarantee 99.9% availability.
* Amazon guarantee 11 9's of durability.

## S3 Security

* All new buckets are **PRIVATE** when created by default(Block all public access).
* Logging per request can be turned on a bucket. Log files are generated and saved in a different bucket(even a bucket in a different AWS account if desired).
* Access control is configured using **Bucket Policies** and **Access Control List(ACL)**
  * Access Control Lists
    * Legacy feature(but not deprectaed) of controlling access to bucket and objects.
    * Simple way of granting access.
  * [Bucket Policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)
    * Usa a policy to define complex rules access.

## [S3 Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html)

* Encryption In Transit
  * Traffic between your local host and S3 is achieved vis **SSL/TLS**
* Server Side Encryption(SSE) - Encryption At Rest
  * Amazon S3 encrypts your objects before saving them on disks in AWS data centers and then decrypts the objects when you download them
  * SSE-AES
    * S3 handle the key, uses AES-256 algorithm.
  * SSE-KMS
    * Envelope encryption, AWS KMS and you manage the keys.
  * SSE-C
    * Customer provide key(you manage the keys)
* Client-Side Encryption
  * You encrypt your own files before uploading them to S3.

## Data Consistency

* New Object(PUTS)
  * Read after Write Consistency
    * When you upload a new S3 objecy you are able read immediately after writing
* Overwrite(PUTS) or Delete Objects(DELETES)
  * Eventual Consistency
    * When you overwrite or delete an object it takes time for S3 to replicate version to AZs.
    * If you were to read immediately, S3 may return you an old copy. You need to generally wait a few seconds before reading.

## Cross-Region Replication(CRR)

When enabled, any object that is uploaded will be **automatically replicated** to another regions. Provides higer durability and potential disaster recovery for objects.

You **must have versioning turned on both the source and destination buckets**. You can have CRR replicate to another AWS account.

## [Versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html)

* Store all versions of an object in S3
* Once enabled it cannot be disabled, only suspended on the bucket.
* Fully integrates with S3 Lifecycle rules.
* MFA Delete feature provides extra protection against deletion of your data.

## [Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)

Automate the process of moving objects to different Storage classes objects all together.

* Can be used together with versioning
* Can be applied to both current and pervious versions

## [Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html)

Fast and secure transfer of files **over long distances** between your end users and an S3 bucket.

Utilizes CloudFront's distributed Edge Locations.

Instead of uploading to your bucket, users use a **distinct URL** for an Edge Location.

As data arrives at the Edge Location it is automatically routed to S3 over a special optimized network path.(Amazon's backbone network)

## Presigned URLs

Generate a URL which provides you temporary access to an object to either upload or download object data. Presigned URLs are commonly used to provide access to private objects. You can use AWS CLI or AWS SDK to generate Presigned URLs.

For instance, You have a web-application which needs to allow users to download files from a password protected part of your web-app. Your web-app generates presigned URL which expires after 5 seconds. The user downloads the file.

## [MFA Delete](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html)

MFA Delete ensures users cannot delete objects from a bucket unless they provide their MFA code.

MFA Delete can only be enabled under these conditions

1. The AWS CLI must be used to turn on MFA.
2. The bucket must have versioning turned on.
3. Only the bucket owner logged in as Root User can DELETE objects from bucket.
