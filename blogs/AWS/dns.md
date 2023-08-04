---
title: Domain Name System(DNS)
date: 2023-08-04
tags:
	- aws
categories: 
	- aws
---

## Introduction

**Domain Name System(DNS)** is the service which handles **converting** a domain name into a routable **Internet Protocol(IP)** address

This is what allows your computer to **find specific servers** on the internet automatically **depending what domain name** you browse to.

## Internet Protocol(IP)

IP Addresses are what uniquely **identifies each computer** on a network, and **allows communication** between them using the Internet Protocol(IP)

### IPv4 Internet Protocol Version 4
* Example: 52.216.8.34
* Address space is **23-bits** with up to **4,294,967,296** available addresses(we are running out)

### IPv6 Internet Protocol Version 6
* Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
* Address space is **128-bits** with up to **340 undecillion potential addresses(1+36 Zeros)**. Invented to solve available address limiations of IPv4

## Domain Registrars

Domain registrars are authorities who **have the ability to assign domain names** under one or more **top-level domains**

Domains get registered through **InterNIC**, which is a service provided by the **Internet Corporation for Assigned Name and Numbers(ICANN),** and enforces the uniqueness of domain names all over the internet.

After registration all domain names can be found publically in a central **WhoIS database**

## Top-Level Domains

* The **last word** within a domain name represents the **top-level** domain name 
    * google<b>.com</b>
* The **second word** within a domain name is know as the **second-level** domain name.
    * google<b>.co</b>.jp

Top-level domain names are controlled by the **Internet Assigned Numbers Authority(IANA)**

All available top level domains are stored in a publically available database at http://www.iana.org/domains/root/db

AWS has their own top level domain **.aws** because of course they do.

## Start of Authority(SOA)

Every domain **must have a SOA record**. The SOA is a way for the Domain Admins to provide information about the domain. eg. how often it is updated, what's the admin's email address and etc.

A **Zone** file can contain only one SOA Record

## A Records

**Address Records(A Records)** are one of the fundamental types of DNS records

An A Record allows you to convert the **name of a domain** directly into **an IP address**. They can also be used on the root(naked domain name) itself.

```json
{
    "ResourceRecordSets": [
        {
            "TTL": 300,
            "Type": "A",
            "Name": "testing-domain.com",
            "ResourceRecords": [
                {"Value": "52.216.8.34"}
            ]
        }
    ]
}
```

The testing-domain.com(naked domain name) using an A record to directly to a web-server IP address of 52.216.8.34

## CNAME Records

Canonical Names(CNAME) are another fundamental DNS record used to **resolve one domain name to another - rather than an IP address**

The advantage of CNAMES is they are unlikely to change where IP addressse can change over time(if its a dynamic IP address)

```json
{
    "ResourceRecordSets": [
        {
            "TTL": 300,
            "Type": "CNAME",
            "Name": "testing-domain.com",
            "ResourceRecords": [
                {"Value": "www.testing-domain.com"}
            ]
        }
    ]
}
```

we have testing-domain.com(naked domain name) using an A record to redirect our www.testing-domain.com

## NS Records

**Name Server Records(NS)** are used by **top-level domain services** to direct traffic to the DNS server containing the authoritative DNS records. Typically multiple name servers are provided for redundancy.

If you were managing your DNS records with Route53. The **NS records** for your domain name would be pointing at the AWS servers.

```json
{
    "Type": "NS",
    "ResourceRecordSets": [
        {
            "TTL": 172800,
            "Name": "testing-domain.com",
            "ResourceRecords": [
                {"Value": "ns-245.awsdns-30.com."},
                {"Value": "ns-523.awsdns-01.net."},
                {"Value": "ns-1586.awsdns-06.co.uk."},
                {"Value": "ns-1373.awsdns-43.org."},
            ]
        }
    ]
}
```

Theres servers are where the DNS records can be found for this domain name.

## Time To Live(TTL)

Time-to-live(TTL) is the **length of time that a DNS record gets cached** on the resolving server or the users own local machine.

**The lower the TTL - the faster that changes to DNS records will propagate across the internet**

TTL is always measured in secondes under IPv4

## Cheat Sheet
* **Domain Name System(DNS)**
    * Internet service that converts domain names into routable IP addresses
* **IPv4**
    * Internet Protocol Version 4, 32 bit address space(**limited** number of addresses)
    * eg. 53.216.8.34
* **IPv6**
    * Internet Protocol Version 6, 128 bit address space(**unlimited** number of addresses)
    * eg. 2001:0db8:85a3:0000:0000:8a2e:0370:7334
* Top-Level Domain is the last part of the domain. eg. google<b>.com</b> 
* Second-Level Domain 
    * The **second last part of the domain** eg. google<b>.co</b>.jp
* Domain Registrar 
    * A 3rd party company who you regisister domains through.
* Name Server 
    * The server(s) which contain the DNS records for a domain
* Start of Authority(SOA)
    * Contains information about the DNS zone and associated DNS records
* A record
    * DNS record which directly converts a domain name into an IP address
* CNAME Record
    * DNS record which lets you convert a domain name into another domain name
* Time to Live(TTL)
    * The time that a DNS record will be cached for (lower time means changes propagate faster)
