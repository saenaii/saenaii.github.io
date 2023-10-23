(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{427:function(e,t,a){e.exports=a.p+"assets/img/aws-redshift-use.47b7db2a.png"},461:function(e,t,a){"use strict";a.r(t);var s=a(2),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"what-is-a-database-transaction"}},[e._v("What is a Database Transaction")]),e._v(" "),t("p",[e._v("A transaction symbolizes a unit of work performed within a database management system.")]),e._v(" "),t("p",[e._v("eg. reads and writes.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Database")]),e._v(" "),t("th",[e._v("Data Warehouse")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Online "),t("strong",[e._v("Transaction")]),e._v(" Processing(OLTP)")]),e._v(" "),t("td",[e._v("Online "),t("strong",[e._v("Analytical")]),e._v(" Processing(OLAP)")])]),e._v(" "),t("tr",[t("td",[e._v("A database was built to store current transactions and enable "),t("strong",[e._v("fast access to specific transactions")]),e._v(" for ongoing business processes")]),e._v(" "),t("td",[e._v("A data warehouse is built to store large quantites of historcal data and "),t("strong",[e._v("enable fast, complex queries across all the data")])])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Adding Items To Your Shoping List")])]),e._v(" "),t("td",[t("strong",[e._v("Generating Reports")])])]),e._v(" "),t("tr",[t("td",[e._v("Single Source")]),e._v(" "),t("td",[e._v("Multiple Sources")])]),e._v(" "),t("tr",[t("td",[e._v("Short transactions(small and simple queries) with an emphasis on writes")]),e._v(" "),t("td",[e._v("Long transactions(long and complex queries) with an emphasis on reads.")])])])]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[e._v("Introduction")]),e._v(" "),t("p",[e._v("AWS Redshift is the AWS managed, petabyte-scale solution for "),t("strong",[e._v("Data Warehousing")]),e._v(".")]),e._v(" "),t("p",[e._v("Pricing starts at just $0.25 per hour with no upfront costs or commitments.")]),e._v(" "),t("p",[e._v("Scale up to petabytes for $1000 per terbyte, per year.")]),e._v(" "),t("p",[e._v("Redshift is price is less than 1/10 cost of most similar services.")]),e._v(" "),t("ul",[t("li",[e._v("Redshift is used for Business Intelligence.")]),e._v(" "),t("li",[e._v("Redshift uses OLAP(Online Analytics Processing System)")]),e._v(" "),t("li",[e._v("Redshift is "),t("strong",[e._v("Columnar Storage")]),e._v(" Database.")])]),e._v(" "),t("p",[t("strong",[e._v("Columnar Storage")]),e._v(" for database tables is an important factor in optimizing analytic query performance, because it drasticall reduces the overall disk I/O requirements and reduces the amount of data you need to load from disk.")]),e._v(" "),t("h2",{attrs:{id:"use-case"}},[e._v("Use Case")]),e._v(" "),t("p",[t("img",{attrs:{src:a(427),alt:""}})]),e._v(" "),t("p",[e._v("We want to continuously COPY data from")]),e._v(" "),t("ol",[t("li",[e._v("EMR.")]),e._v(" "),t("li",[e._v("S3")]),e._v(" "),t("li",[e._v("DynamoDB\nto power a custom Business Intelligence tool.")])]),e._v(" "),t("p",[e._v("Using a third-party library we can connect and query Redshift for data.")]),e._v(" "),t("h2",{attrs:{id:"columnar-storage"}},[e._v("Columnar Storage")]),e._v(" "),t("p",[t("strong",[e._v("Columnar Storage")]),e._v(" stores data together as columns instead of rows.")]),e._v(" "),t("p",[t("strong",[e._v("OLAP")]),e._v(" applications look at multiple records at the same time. You save memory because you fetch just the columns of data you need instead of whole rows.")]),e._v(" "),t("p",[e._v("Since data is stored via column, that means all data is of the same data-type allowing for easy compression.")]),e._v(" "),t("h2",{attrs:{id:"configurations"}},[e._v("Configurations")]),e._v(" "),t("h3",{attrs:{id:"single-node"}},[e._v("Single Node")]),e._v(" "),t("p",[e._v("Nodes come in sizes of "),t("strong",[e._v("160GB")]),e._v(". You can launch a single node to get started with Redshift.")]),e._v(" "),t("h3",{attrs:{id:"multi-node"}},[e._v("Multi-Node")]),e._v(" "),t("p",[e._v("You can launch a cluster of nodes with Multi-Node mode.")]),e._v(" "),t("h4",{attrs:{id:"leader-node"}},[e._v("Leader Node")]),e._v(" "),t("p",[e._v("Manages client connections and receiving queries")]),e._v(" "),t("h4",{attrs:{id:"compute-node"}},[e._v("Compute Node")]),e._v(" "),t("p",[e._v("Stores data and performs queries up to "),t("strong",[e._v("128 compute nodes")])]),e._v(" "),t("h2",{attrs:{id:"node-types-and-size"}},[e._v("Node Types and Size")]),e._v(" "),t("p",[e._v("The smallest node you can select is "),t("strong",[e._v("dc2.large")])]),e._v(" "),t("h3",{attrs:{id:"dense-compute-dc"}},[e._v("Dense Compute(dc)")]),e._v(" "),t("p",[e._v("Best for high performance, but have less storage")]),e._v(" "),t("h3",{attrs:{id:"dense-storage-ds"}},[e._v("Dense Storage(ds)")]),e._v(" "),t("p",[e._v("Clusters in which you have a lot of data.")]),e._v(" "),t("h2",{attrs:{id:"compression"}},[e._v("Compression")]),e._v(" "),t("p",[e._v("Redshift uses "),t("strong",[e._v("multiple compression techniques")]),e._v(" to achieve significant compression relative to traditional relational data stores.")]),e._v(" "),t("p",[t("strong",[e._v("Similar data")]),e._v(" is "),t("strong",[e._v("stored sequentially")]),e._v(" on disk.")]),e._v(" "),t("p",[e._v("Does "),t("strong",[e._v("not")]),e._v(" require "),t("strong",[e._v("indexes")]),e._v(" or "),t("strong",[e._v("materialized views")]),e._v(", which saves a lot of space "),t("strong",[e._v("compared to traditional systems")]),e._v(".")]),e._v(" "),t("p",[e._v("When loading data to an "),t("strong",[e._v("empty table")]),e._v(", data is "),t("strong",[e._v("sampled")]),e._v(" and the most appropriate compression "),t("strong",[e._v("schema is selected automatically")])]),e._v(" "),t("h2",{attrs:{id:"processing"}},[e._v("Processing")]),e._v(" "),t("p",[e._v("Redshift uses "),t("strong",[e._v("Massively Parallel Processing(MPP)")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Automatically distributes")]),e._v(" data and query loads "),t("strong",[e._v("across all nodes")]),e._v(".")]),e._v(" "),t("p",[e._v("Lets you easily "),t("strong",[e._v("add new nodes")]),e._v(" to your data warehouse while stil "),t("strong",[e._v("maintaining fast query performance")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"backup"}},[e._v("Backup")]),e._v(" "),t("p",[e._v("Backups are "),t("strong",[e._v("enabled by default")]),e._v(" with "),t("strong",[e._v("1 day")]),e._v(" retention period. Retention period can be modified "),t("strong",[e._v("up to 35 days")]),e._v(".")]),e._v(" "),t("p",[e._v("Redshift always attempts to maintain at least "),t("strong",[e._v("3 copies of your data")])]),e._v(" "),t("ol",[t("li",[e._v("The original copy.")]),e._v(" "),t("li",[e._v("Replica on the compute nodes.")]),e._v(" "),t("li",[e._v("Backup copy in S3.")])]),e._v(" "),t("p",[e._v("Can asynchronously replicate your snapshot to S3 "),t("strong",[e._v("in a different region")])]),e._v(" "),t("h2",{attrs:{id:"billing"}},[e._v("Billing")]),e._v(" "),t("h3",{attrs:{id:"compute-node-hours"}},[e._v("Compute Node Hours")]),e._v(" "),t("ul",[t("li",[e._v("The total number of hours ran across all nodes in the billing period.")]),e._v(" "),t("li",[e._v("Billed for 1 unit per node, per hour.")]),e._v(" "),t("li",[t("strong",[e._v("Not charged for leader node hours")]),e._v(", only compute nodes incur charges.")])]),e._v(" "),t("h3",{attrs:{id:"backup-2"}},[e._v("Backup")]),e._v(" "),t("ul",[t("li",[e._v("Backups are stored on S3 and you are billed ths S3 storage fees.")])]),e._v(" "),t("h3",{attrs:{id:"data-transfer"}},[e._v("Data transfer")]),e._v(" "),t("ul",[t("li",[e._v("Billed for Only transfer whitin a VPN, not outside of it.")])]),e._v(" "),t("h2",{attrs:{id:"security"}},[e._v("Security")]),e._v(" "),t("h3",{attrs:{id:"data-in-transit"}},[e._v("Data-in-transit")]),e._v(" "),t("p",[e._v("Encrypted using SSL")]),e._v(" "),t("h3",{attrs:{id:"data-at-rest"}},[e._v("Data-at-rest")]),e._v(" "),t("p",[e._v("Encrypt using AES-256 encryption")]),e._v(" "),t("p",[e._v("Database Encryption can be applied using")]),e._v(" "),t("ul",[t("li",[e._v("Key Management Service(KMS) multi-tenant HSM.")]),e._v(" "),t("li",[e._v("CloudHSM single-tenant HSM.")])]),e._v(" "),t("h2",{attrs:{id:"availability"}},[e._v("Availability")]),e._v(" "),t("p",[e._v("Redshift is "),t("strong",[e._v("Single-AZ")]),e._v(". To run in Multi-AZ you would have to run multiple Redshift Clusters in different AZs with same inputs.")]),e._v(" "),t("p",[e._v("Snapshots "),t("strong",[e._v("can be restored to a different AZ")]),e._v(" in the event an outage occurs.")]),e._v(" "),t("h2",{attrs:{id:"cheat-sheet"}},[e._v("Cheat Sheet")]),e._v(" "),t("ul",[t("li",[e._v("Data can be loaded from S3, EMR, DynamoDB, or multiple data sources on remote hosts.")]),e._v(" "),t("li",[e._v("Redshift is Columnar Store database which can SQL-like queries and is an OLAP.")]),e._v(" "),t("li",[e._v("Redshift can handle petabyres worth of data. Readshift is for Data Warehousing.")]),e._v(" "),t("li",[e._v("Redshift most common use case is Business Intelligence.")]),e._v(" "),t("li",[e._v("Redshift can only run in 1 availability zone("),t("strong",[e._v("Single-AZ")]),e._v(").")]),e._v(" "),t("li",[e._v("Redshift can run via a single node or multi-node(clusters).")]),e._v(" "),t("li",[e._v("A single node is 160 GB in size.")]),e._v(" "),t("li",[e._v("A multi-node is compreised of a leader node and multiple compute nodes.")]),e._v(" "),t("li",[e._v("You are bill per hour for each node(excluding leader node in multi-node).")]),e._v(" "),t("li",[e._v("You are not billed for the leader node.")]),e._v(" "),t("li",[e._v("You can have up to 128 compute nodes(default is 32).")]),e._v(" "),t("li",[e._v("Redshift has two kinds of Node Type.\n"),t("ul",[t("li",[t("strong",[e._v("Dense Compute")])]),e._v(" "),t("li",[t("strong",[e._v("Dense Storage")])])])]),e._v(" "),t("li",[e._v("Redshift attempts to backup 3 copies of your data\n"),t("ul",[t("li",[e._v("The original")]),e._v(" "),t("li",[e._v("On compute node")]),e._v(" "),t("li",[e._v("On S3")])])]),e._v(" "),t("li",[e._v("Similar data is stored on disk sequentially for faster reads.")]),e._v(" "),t("li",[e._v("Redshift database can be encrypted via KMS or CloudHSM.")]),e._v(" "),t("li",[e._v("Backup Retention is default to 1 day and can be increase to maximum of 35 days.")]),e._v(" "),t("li",[e._v("Redshift can asynchronously back up your snapshot to Another Region delivered to S3.")]),e._v(" "),t("li",[e._v("Redshift used Massively Parallel Processing(MPP) to distribute queries and data across all loads.")]),e._v(" "),t("li",[e._v("In the case of empty table, when importing Redshift will sample data to create a schema.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);