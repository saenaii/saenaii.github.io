(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{452:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"introduction"}},[s._v("Introduction")]),s._v(" "),t("p",[t("strong",[s._v("Domain Name System(DNS)")]),s._v(" is the service which handles "),t("strong",[s._v("converting")]),s._v(" a domain name into a routable "),t("strong",[s._v("Internet Protocol(IP)")]),s._v(" address")]),s._v(" "),t("p",[s._v("This is what allows your computer to "),t("strong",[s._v("find specific servers")]),s._v(" on the internet automatically "),t("strong",[s._v("depending what domain name")]),s._v(" you browse to.")]),s._v(" "),t("h2",{attrs:{id:"internet-protocol-ip"}},[s._v("Internet Protocol(IP)")]),s._v(" "),t("p",[s._v("IP Addresses are what uniquely "),t("strong",[s._v("identifies each computer")]),s._v(" on a network, and "),t("strong",[s._v("allows communication")]),s._v(" between them using the Internet Protocol(IP)")]),s._v(" "),t("h3",{attrs:{id:"ipv4-internet-protocol-version-4"}},[s._v("IPv4 Internet Protocol Version 4")]),s._v(" "),t("ul",[t("li",[s._v("Example: 52.216.8.34")]),s._v(" "),t("li",[s._v("Address space is "),t("strong",[s._v("23-bits")]),s._v(" with up to "),t("strong",[s._v("4,294,967,296")]),s._v(" available addresses(we are running out)")])]),s._v(" "),t("h3",{attrs:{id:"ipv6-internet-protocol-version-6"}},[s._v("IPv6 Internet Protocol Version 6")]),s._v(" "),t("ul",[t("li",[s._v("Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334")]),s._v(" "),t("li",[s._v("Address space is "),t("strong",[s._v("128-bits")]),s._v(" with up to "),t("strong",[s._v("340 undecillion potential addresses(1+36 Zeros)")]),s._v(". Invented to solve available address limiations of IPv4")])]),s._v(" "),t("h2",{attrs:{id:"domain-registrars"}},[s._v("Domain Registrars")]),s._v(" "),t("p",[s._v("Domain registrars are authorities who "),t("strong",[s._v("have the ability to assign domain names")]),s._v(" under one or more "),t("strong",[s._v("top-level domains")])]),s._v(" "),t("p",[s._v("Domains get registered through "),t("strong",[s._v("InterNIC")]),s._v(", which is a service provided by the "),t("strong",[s._v("Internet Corporation for Assigned Name and Numbers(ICANN),")]),s._v(" and enforces the uniqueness of domain names all over the internet.")]),s._v(" "),t("p",[s._v("After registration all domain names can be found publically in a central "),t("strong",[s._v("WhoIS database")])]),s._v(" "),t("h2",{attrs:{id:"top-level-domains"}},[s._v("Top-Level Domains")]),s._v(" "),t("ul",[t("li",[s._v("The "),t("strong",[s._v("last word")]),s._v(" within a domain name represents the "),t("strong",[s._v("top-level")]),s._v(" domain name\n"),t("ul",[t("li",[s._v("google"),t("b",[s._v(".com")])])])]),s._v(" "),t("li",[s._v("The "),t("strong",[s._v("second word")]),s._v(" within a domain name is know as the "),t("strong",[s._v("second-level")]),s._v(" domain name.\n"),t("ul",[t("li",[s._v("google"),t("b",[s._v(".co")]),s._v(".jp")])])])]),s._v(" "),t("p",[s._v("Top-level domain names are controlled by the "),t("strong",[s._v("Internet Assigned Numbers Authority(IANA)")])]),s._v(" "),t("p",[s._v("All available top level domains are stored in a publically available database at http://www.iana.org/domains/root/db")]),s._v(" "),t("p",[s._v("AWS has their own top level domain "),t("strong",[s._v(".aws")]),s._v(" because of course they do.")]),s._v(" "),t("h2",{attrs:{id:"start-of-authority-soa"}},[s._v("Start of Authority(SOA)")]),s._v(" "),t("p",[s._v("Every domain "),t("strong",[s._v("must have a SOA record")]),s._v(". The SOA is a way for the Domain Admins to provide information about the domain. eg. how often it is updated, what's the admin's email address and etc.")]),s._v(" "),t("p",[s._v("A "),t("strong",[s._v("Zone")]),s._v(" file can contain only one SOA Record")]),s._v(" "),t("h2",{attrs:{id:"a-records"}},[s._v("A Records")]),s._v(" "),t("p",[t("strong",[s._v("Address Records(A Records)")]),s._v(" are one of the fundamental types of DNS records")]),s._v(" "),t("p",[s._v("An A Record allows you to convert the "),t("strong",[s._v("name of a domain")]),s._v(" directly into "),t("strong",[s._v("an IP address")]),s._v(". They can also be used on the root(naked domain name) itself.")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ResourceRecordSets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"TTL"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testing-domain.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ResourceRecords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Value"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"52.216.8.34"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("The testing-domain.com(naked domain name) using an A record to directly to a web-server IP address of 52.216.8.34")]),s._v(" "),t("h2",{attrs:{id:"cname-records"}},[s._v("CNAME Records")]),s._v(" "),t("p",[s._v("Canonical Names(CNAME) are another fundamental DNS record used to "),t("strong",[s._v("resolve one domain name to another - rather than an IP address")])]),s._v(" "),t("p",[s._v("The advantage of CNAMES is they are unlikely to change where IP addressse can change over time(if its a dynamic IP address)")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ResourceRecordSets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"TTL"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CNAME"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testing-domain.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ResourceRecords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Value"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www.testing-domain.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("we have testing-domain.com(naked domain name) using an A record to redirect our www.testing-domain.com")]),s._v(" "),t("h2",{attrs:{id:"ns-records"}},[s._v("NS Records")]),s._v(" "),t("p",[t("strong",[s._v("Name Server Records(NS)")]),s._v(" are used by "),t("strong",[s._v("top-level domain services")]),s._v(" to direct traffic to the DNS server containing the authoritative DNS records. Typically multiple name servers are provided for redundancy.")]),s._v(" "),t("p",[s._v("If you were managing your DNS records with Route53. The "),t("strong",[s._v("NS records")]),s._v(" for your domain name would be pointing at the AWS servers.")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NS"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ResourceRecordSets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"TTL"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172800")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testing-domain.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ResourceRecords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Value"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ns-245.awsdns-30.com."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Value"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ns-523.awsdns-01.net."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Value"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ns-1586.awsdns-06.co.uk."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Value"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ns-1373.awsdns-43.org."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("Theres servers are where the DNS records can be found for this domain name.")]),s._v(" "),t("h2",{attrs:{id:"time-to-live-ttl"}},[s._v("Time To Live(TTL)")]),s._v(" "),t("p",[s._v("Time-to-live(TTL) is the "),t("strong",[s._v("length of time that a DNS record gets cached")]),s._v(" on the resolving server or the users own local machine.")]),s._v(" "),t("p",[t("strong",[s._v("The lower the TTL - the faster that changes to DNS records will propagate across the internet")])]),s._v(" "),t("p",[s._v("TTL is always measured in secondes under IPv4")]),s._v(" "),t("h2",{attrs:{id:"cheat-sheet"}},[s._v("Cheat Sheet")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Domain Name System(DNS)")]),s._v(" "),t("ul",[t("li",[s._v("Internet service that converts domain names into routable IP addresses")])])]),s._v(" "),t("li",[t("strong",[s._v("IPv4")]),s._v(" "),t("ul",[t("li",[s._v("Internet Protocol Version 4, 32 bit address space("),t("strong",[s._v("limited")]),s._v(" number of addresses)")]),s._v(" "),t("li",[s._v("eg. 53.216.8.34")])])]),s._v(" "),t("li",[t("strong",[s._v("IPv6")]),s._v(" "),t("ul",[t("li",[s._v("Internet Protocol Version 6, 128 bit address space("),t("strong",[s._v("unlimited")]),s._v(" number of addresses)")]),s._v(" "),t("li",[s._v("eg. 2001:0db8:85a3:0000:0000:8a2e:0370:7334")])])]),s._v(" "),t("li",[s._v("Top-Level Domain is the last part of the domain. eg. google"),t("b",[s._v(".com")])]),s._v(" "),t("li",[s._v("Second-Level Domain\n"),t("ul",[t("li",[s._v("The "),t("strong",[s._v("second last part of the domain")]),s._v(" eg. google"),t("b",[s._v(".co")]),s._v(".jp")])])]),s._v(" "),t("li",[s._v("Domain Registrar\n"),t("ul",[t("li",[s._v("A 3rd party company who you regisister domains through.")])])]),s._v(" "),t("li",[s._v("Name Server\n"),t("ul",[t("li",[s._v("The server(s) which contain the DNS records for a domain")])])]),s._v(" "),t("li",[s._v("Start of Authority(SOA)\n"),t("ul",[t("li",[s._v("Contains information about the DNS zone and associated DNS records")])])]),s._v(" "),t("li",[s._v("A record\n"),t("ul",[t("li",[s._v("DNS record which directly converts a domain name into an IP address")])])]),s._v(" "),t("li",[s._v("CNAME Record\n"),t("ul",[t("li",[s._v("DNS record which lets you convert a domain name into another domain name")])])]),s._v(" "),t("li",[s._v("Time to Live(TTL)\n"),t("ul",[t("li",[s._v("The time that a DNS record will be cached for (lower time means changes propagate faster)")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);