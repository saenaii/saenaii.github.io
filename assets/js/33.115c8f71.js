(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{471:function(s,e,a){"use strict";a.r(e);var t=a(2),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"context"}},[s._v("Context")]),s._v(" "),e("p",[s._v("During my work, we met some issue when we're using Redis. The latency for pipeline is quite high in our service. We're putting some HGET CMD into the pipeline, I'm thinking use the SET instead of the HGET, since we only have 1 field in the hash.")]),s._v(" "),e("p",[s._v("If you're using datadog, some metrics may can show you the latency for different CMDs easily. Like "),e("code",[s._v("aws.elasticache.get_type_cmds_latency")]),s._v(" and "),e("code",[s._v("aws.elasticache.hash_based_cmds_latency")]),s._v(". For more details, can refer to the "),e("a",{attrs:{href:"https://docs.datadoghq.com/integrations/amazon_elasticache/#data-collected",target:"_blank",rel:"noopener noreferrer"}},[s._v("offical doc"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("After some reserach, I found Redis already include a utility named "),e("a",{attrs:{href:"https://redis.io/docs/management/optimization/benchmarks/",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis-benchmark"),e("OutboundLink")],1),s._v(", so I'd like to record some usage for this tool.\nAlthough this article is a summary of the offical doc, but it's still better to read the offical doc, there're some useful point for redis performance.")]),s._v(" "),e("h2",{attrs:{id:"usage"}},[s._v("Usage")]),s._v(" "),e("p",[s._v("The followings are the usage from offial website.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Usage: redis-benchmark "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND ARGS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOptions:\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      Server "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("          Server port "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("socket"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        Server socket "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("overrides "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" and port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      Password "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Redis Auth\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  Used to send ACL style "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'AUTH username pass'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" Needs -a.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uri"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           Server URI.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("clients"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       Number of parallel connections "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("requests"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      Total number of requests "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("size"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("          Data size of SET/GET value "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" bytes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dbnum")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("db"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       SELECT the specified db number "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-3")]),s._v("                 Start session "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" RESP3 protocol mode.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--threads")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    Enable multi-thread mode.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),s._v("          Enable cluster mode.\n                    If the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" is supplied on the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" cluster\n                    mode, the key must contain "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{tag}"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" Otherwise, the\n                    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" will not be sent to the right cluster node.\n --enable-tracking  Send CLIENT TRACKING on before starting benchmark.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("boolean"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("keep alive "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("reconnect "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("keyspacelen"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   Use random keys "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" SET/GET/INCR, random values "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" SADD,\n                    random members and scores "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ZADD.\n                    Using this option the benchmark will "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("expand")]),s._v(" the string\n                    __rand_int__ inside an argument with a "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" digits number "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n                    the specified range from "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" to keyspacelen-1. The\n                    substitution changes every "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" a "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" is executed.\n                    Default tests use this to hit random keys "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the specified\n                    range.\n                    Note: If "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" is omitted, all commands "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a benchmark will\n                    use the same key.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("numreq"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        Pipeline "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("numreq"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" requests. Default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("no pipeline"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v("                 Quiet. Just show query/sec values\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--precision")]),s._v("        Number of decimal places to display "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" latency output "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--csv")]),s._v("              Output "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" CSV "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("                 Loop. Run the tests forever\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tests"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         Only run the comma separated list of tests. The "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n                    names are the same as the ones produced as output.\n                    The "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" option is ignored "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a specific "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" is supplied\n                    on the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v("                 Idle mode. Just "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" N idle connections and wait.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v("                 Read last argument from STDIN.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tls")]),s._v("              Establish a secure TLS connection.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--sni")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       Server name indication "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" TLS.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cacert")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    CA Certificate "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" to verify with.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cacertdir")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  Directory where trusted CA certificates are stored.\n                    If neither cacert nor cacertdir are specified, the default\n                    system-wide trusted root certs configuration will apply.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--insecure")]),s._v("         Allow insecure TLS connection by skipping cert validation.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cert")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      Client certificate to authenticate with.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--key")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       Private key "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" to authenticate with.\n --tls-ciphers "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("list"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Sets the list of preferred ciphers "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TLSv1.2 and below"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" order of preference from highest to lowest separated by colon "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n                    See the ciphers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1ssl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" manpage "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about the syntax of this string.\n --tls-ciphersuites "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("list"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Sets the list of preferred ciphersuites "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TLSv1.3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" order of preference from highest to lowest separated by colon "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n                    See the ciphers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1ssl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" manpage "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about the syntax of this string,\n                    and specifically "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" TLSv1.3 ciphersuites.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("             Output this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" and exit.\n "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("          Output version and exit.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br")])]),e("h3",{attrs:{id:"just-show-the-query-sec-values"}},[s._v("Just show the query/sec values")]),s._v(" "),e("p",[s._v("Usually, we don't need run all CMDs during our test. We can use the "),e("code",[s._v("-q")]),s._v(" option to only show the query/sec values. If we omit the "),e("code",[s._v("-q")]),s._v(", the output may over 1000 lines.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-benchmark -q")]),s._v("\nPING_INLINE: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("209643.61")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nPING_MBULK: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("201612.91")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.127")]),s._v(" msec                    \nSET: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("214592.28")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nGET: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("216450.20")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nINCR: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("213675.22")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nLPUSH: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223713.64")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nRPUSH: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("225733.64")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nLPOP: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("220264.31")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nRPOP: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("224719.11")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nSADD: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("217391.30")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nHSET: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223214.28")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nSPOP: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("212765.95")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nZADD: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("225733.64")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nZPOPMIN: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("214132.77")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec                    \nLPUSH "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("needed to benchmark LRANGE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("228310.50")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.111")]),s._v(" msec                    \nLRANGE_100 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" elements"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("84175.09")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.303")]),s._v(" msec                   \nLRANGE_300 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" elements"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("33852.40")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.751")]),s._v(" msec                   \nLRANGE_500 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" elements"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23457.66")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.055")]),s._v(" msec                   \nLRANGE_600 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" elements"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20100.50")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.239")]),s._v(" msec                   \nMSET "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" keys"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("197238.64")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.167")]),s._v(" msec\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h3",{attrs:{id:"only-run-specific-cmds"}},[s._v("Only run specific CMDs")]),s._v(" "),e("p",[s._v("Sometimes, we only care about some specific keys, in that case, we can use "),e("code",[s._v("-t")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-benchmark -t get,lpush -q -n 1000")]),s._v("\nGET: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("142857.14")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.159")]),s._v(" msec        \nLPUSH: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200000.00")]),s._v(" requests per second, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p50")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.119")]),s._v(" msec\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"examples"}},[s._v("examples")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("If you want to test a remote service, please use "),e("code",[s._v("redis-benchmark -h host -p <port>")]),s._v(" spec the host and port.")])]),e("p",[s._v("The key params will highlight in the CMD")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Description")]),s._v(" "),e("th",[s._v("CMD")]),s._v(" "),e("th",[s._v("tips")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("I'd like to perform a test with 1000 requests")]),s._v(" "),e("td",[s._v("redis-benchmark -q "),e("code",[s._v("-n")]),s._v(" 100000")]),s._v(" "),e("td")]),s._v(" "),e("tr",[e("td",[s._v("Only test specific CMDs")]),s._v(" "),e("td",[s._v("redis-benchmark "),e("code",[s._v("-t set,get")]),s._v(" -q -n 100000")]),s._v(" "),e("td")]),s._v(" "),e("tr",[e("td",[s._v("Test pipeline")]),s._v(" "),e("td",[s._v("redis-benchmark -q -n 100000 -t set,get "),e("code",[s._v("-P 100")])]),s._v(" "),e("td",[s._v("using pipeline can significant increase the performance")])]),s._v(" "),e("tr",[e("td",[s._v("Test for cluster")]),s._v(" "),e("td",[s._v("redis-benchmark -q -n 100000 -t set,get -P 100 "),e("code",[s._v("--cluster")])]),s._v(" "),e("td",[s._v("only support when your redis in cluster mode")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);