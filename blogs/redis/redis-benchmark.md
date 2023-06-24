---
title: Redis Benchmark 
date: 2023-04-21
tags:
 - redis
categories: 
 - redis
---

## Context

During my work, we met some issue when we're using Redis. The latency for pipeline is quite high in our service. We're putting some HGET CMD into the pipeline, I'm thinking use the SET instead of the HGET, since we only have 1 field in the hash.

If you're using datadog, some metrics may can show you the latency for different CMDs easily. Like `aws.elasticache.get_type_cmds_latency` and `aws.elasticache.hash_based_cmds_latency`. For more details, can refer to the [offical doc](https://docs.datadoghq.com/integrations/amazon_elasticache/#data-collected)

After some reserach, I found Redis already include a utility named [redis-benchmark](https://redis.io/docs/management/optimization/benchmarks/), so I'd like to record some usage for this tool. 
Although this article is a summary of the offical doc, but it's still better to read the offical doc, there're some useful point for redis performance.

## Usage

The followings are the usage from offial website.

```shell
Usage: redis-benchmark [OPTIONS] [COMMAND ARGS...]

Options:
 -h <hostname>      Server hostname (default 127.0.0.1)
 -p <port>          Server port (default 6379)
 -s <socket>        Server socket (overrides host and port)
 -a <password>      Password for Redis Auth
 --user <username>  Used to send ACL style 'AUTH username pass'. Needs -a.
 -u <uri>           Server URI.
 -c <clients>       Number of parallel connections (default 50)
 -n <requests>      Total number of requests (default 100000)
 -d <size>          Data size of SET/GET value in bytes (default 3)
 --dbnum <db>       SELECT the specified db number (default 0)
 -3                 Start session in RESP3 protocol mode.
 --threads <num>    Enable multi-thread mode.
 --cluster          Enable cluster mode.
                    If the command is supplied on the command line in cluster
                    mode, the key must contain "{tag}". Otherwise, the
                    command will not be sent to the right cluster node.
 --enable-tracking  Send CLIENT TRACKING on before starting benchmark.
 -k <boolean>       1=keep alive 0=reconnect (default 1)
 -r <keyspacelen>   Use random keys for SET/GET/INCR, random values for SADD,
                    random members and scores for ZADD.
                    Using this option the benchmark will expand the string
                    __rand_int__ inside an argument with a 12 digits number in
                    the specified range from 0 to keyspacelen-1. The
                    substitution changes every time a command is executed.
                    Default tests use this to hit random keys in the specified
                    range.
                    Note: If -r is omitted, all commands in a benchmark will
                    use the same key.
 -P <numreq>        Pipeline <numreq> requests. Default 1 (no pipeline).
 -q                 Quiet. Just show query/sec values
 --precision        Number of decimal places to display in latency output (default 0)
 --csv              Output in CSV format
 -l                 Loop. Run the tests forever
 -t <tests>         Only run the comma separated list of tests. The test
                    names are the same as the ones produced as output.
                    The -t option is ignored if a specific command is supplied
                    on the command line.
 -I                 Idle mode. Just open N idle connections and wait.
 -x                 Read last argument from STDIN.
 --tls              Establish a secure TLS connection.
 --sni <host>       Server name indication for TLS.
 --cacert <file>    CA Certificate file to verify with.
 --cacertdir <dir>  Directory where trusted CA certificates are stored.
                    If neither cacert nor cacertdir are specified, the default
                    system-wide trusted root certs configuration will apply.
 --insecure         Allow insecure TLS connection by skipping cert validation.
 --cert <file>      Client certificate to authenticate with.
 --key <file>       Private key file to authenticate with.
 --tls-ciphers <list> Sets the list of preferred ciphers (TLSv1.2 and below)
                    in order of preference from highest to lowest separated by colon (":").
                    See the ciphers(1ssl) manpage for more information about the syntax of this string.
 --tls-ciphersuites <list> Sets the list of preferred ciphersuites (TLSv1.3)
                    in order of preference from highest to lowest separated by colon (":").
                    See the ciphers(1ssl) manpage for more information about the syntax of this string,
                    and specifically for TLSv1.3 ciphersuites.
 --help             Output this help and exit.
 --version          Output version and exit.
```

### Just show the query/sec values

Usually, we don't need run all CMDs during our test. We can use the `-q` option to only show the query/sec values. If we omit the `-q`, the output may over 1000 lines.

```shell
# redis-benchmark -q
PING_INLINE: 209643.61 requests per second, p50=0.119 msec                    
PING_MBULK: 201612.91 requests per second, p50=0.127 msec                    
SET: 214592.28 requests per second, p50=0.119 msec                    
GET: 216450.20 requests per second, p50=0.119 msec                    
INCR: 213675.22 requests per second, p50=0.119 msec                    
LPUSH: 223713.64 requests per second, p50=0.119 msec                    
RPUSH: 225733.64 requests per second, p50=0.119 msec                    
LPOP: 220264.31 requests per second, p50=0.119 msec                    
RPOP: 224719.11 requests per second, p50=0.119 msec                    
SADD: 217391.30 requests per second, p50=0.119 msec                    
HSET: 223214.28 requests per second, p50=0.119 msec                    
SPOP: 212765.95 requests per second, p50=0.119 msec                    
ZADD: 225733.64 requests per second, p50=0.119 msec                    
ZPOPMIN: 214132.77 requests per second, p50=0.119 msec                    
LPUSH (needed to benchmark LRANGE): 228310.50 requests per second, p50=0.111 msec                    
LRANGE_100 (first 100 elements): 84175.09 requests per second, p50=0.303 msec                   
LRANGE_300 (first 300 elements): 33852.40 requests per second, p50=0.751 msec                   
LRANGE_500 (first 500 elements): 23457.66 requests per second, p50=1.055 msec                   
LRANGE_600 (first 600 elements): 20100.50 requests per second, p50=1.239 msec                   
MSET (10 keys): 197238.64 requests per second, p50=0.167 msec
```

### Only run specific CMDs
Sometimes, we only care about some specific keys, in that case, we can use `-t`

```shell
# redis-benchmark -t get,lpush -q -n 1000
GET: 142857.14 requests per second, p50=0.159 msec        
LPUSH: 200000.00 requests per second, p50=0.119 msec
```

## examples

::: tip
If you want to test a remote service, please use `redis-benchmark -h host -p <port>` spec the host and port.
:::

The key params will highlight in the CMD
| Description | CMD | tips |
|---|---|---|
| I'd like to perform a test with 1000 requests| redis-benchmark -q `-n` 100000 ||
| Only test specific CMDs | redis-benchmark `-t set,get` -q -n 100000 ||
| Test pipeline | redis-benchmark -q -n 100000 -t set,get `-P 100` | using pipeline can significant increase the performance |
| Test for cluster | redis-benchmark -q -n 100000 -t set,get -P 100 `--cluster` | only support when your redis in cluster mode |