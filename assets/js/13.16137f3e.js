(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{422:function(t,s,o){t.exports=o.p+"assets/img/aws-cloudwatch-alarm.292e939d.png"},423:function(t,s,o){t.exports=o.p+"assets/img/cloudwatch-dashboard.07589338.png"},455:function(t,s,o){"use strict";o.r(s);var e=o(2),i=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"introduction"}},[t._v("Introduction")]),t._v(" "),s("p",[t._v("AWS CloudWatch is a "),s("strong",[t._v("monitoring solution")]),t._v(" for your AWS resrouces.")]),t._v(" "),s("p",[t._v("CloudWatch is a "),s("strong",[t._v("collection of monitoring tools")]),t._v(" as follows")]),t._v(" "),s("ul",[s("li",[t._v("CloudWatch "),s("strong",[t._v("Logs")]),t._v(" "),s("ul",[s("li",[t._v("Any custom log data, Memory Usage, Rails Logs, Nginx Logs")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Metrics")]),t._v(" "),s("ul",[s("li",[t._v("Metrics that are based off of logs. eg. Memory Usage.")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Events")]),t._v(" "),s("ul",[s("li",[t._v("Trigger an event based on a condition. eg. ever hour take snapshot of server.")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Alarms")]),t._v(" "),s("ul",[s("li",[t._v("Triggers notifications based on metrics which breach a defined threshold.")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Dashboards")]),t._v(" "),s("ul",[s("li",[t._v("Creat visualizations based on metrics.")])])])]),t._v(" "),s("h2",{attrs:{id:"cloudwatch-logs"}},[t._v("CloudWatch Logs")]),t._v(" "),s("p",[t._v("CloudWatch Logs is used to monitor, store, and access your log files.")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("Log Group")]),t._v(" is a collection of logs. Log files must belong to a log group.")]),t._v(" "),s("p",[t._v("A Log in a Log Group is called a "),s("strong",[t._v("Log Stream")])]),t._v(" "),s("p",[t._v("By default, "),s("strong",[t._v("logs are kept indefinitely and never expire")])]),t._v(" "),s("p",[t._v("Most AWS Services are integrated with CloudWatch Logs. Logging of services sometimes needs to be turned on requires the IAM Permission to write to CloudWatch Logs.")]),t._v(" "),s("h2",{attrs:{id:"cloudwatch-metrics"}},[t._v("CloudWatch Metrics")]),t._v(" "),s("p",[t._v("CloudWatch comes with many "),s("strong",[t._v("perdefined")]),t._v(" metrics.")]),t._v(" "),s("p",[s("strong",[t._v("EC2 Per-Instance Metrics")])]),t._v(" "),s("ul",[s("li",[t._v("CPUUtilization")]),t._v(" "),s("li",[t._v("DiskReadOps")]),t._v(" "),s("li",[t._v("DiskWriteOps")]),t._v(" "),s("li",[t._v("DiskReadBytes")]),t._v(" "),s("li",[t._v("DiskWriteByres")]),t._v(" "),s("li",[t._v("NetworkIn")]),t._v(" "),s("li",[t._v("NetworkOut")]),t._v(" "),s("li",[t._v("NetworkPacketsIn")]),t._v(" "),s("li",[t._v("NetworkPacketsOut")])]),t._v(" "),s("h2",{attrs:{id:"cloudwatch-events"}},[t._v("CloudWatch Events")]),t._v(" "),s("p",[t._v("Trigger an event based on a condition or on schedule.")]),t._v(" "),s("p",[s("strong",[t._v("Event Source")]),t._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("⟶")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\longrightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.522em","vertical-align":"-0.011em"}}),s("span",{staticClass:"mrel"},[t._v("⟶")])])])])]),t._v(" "),s("strong",[t._v("Targets")])],1),t._v(" "),s("p",[t._v("Schedule is like a serverless "),s("strong",[t._v("Cron tab")])]),t._v(" "),s("h2",{attrs:{id:"cloudwatch-custom-metrics"}},[t._v("CloudWatch Custom Metrics")]),t._v(" "),s("p",[t._v("Using the "),s("strong",[t._v("AWS CLI or SDK")]),t._v(" you can create and publish your own "),s("strong",[t._v("custom metrics")])]),t._v(" "),s("h3",{attrs:{id:"high-resolution-metrics"}},[t._v("High Resolution Metrics")]),t._v(" "),s("p",[t._v("When you publish a custom metric, you can define it as either standard resolution or "),s("strong",[t._v("high resolution")])]),t._v(" "),s("p",[t._v("High resolution lets you track "),s("strong",[t._v("under 1 minute down")]),t._v(" to "),s("strong",[t._v("1 second")])]),t._v(" "),s("p",[t._v("With High Resolution you can track at")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("1 second")])]),t._v(" "),s("li",[t._v("5 seconds")]),t._v(" "),s("li",[t._v("10 seconds")]),t._v(" "),s("li",[t._v("30 seconds")]),t._v(" "),s("li",[t._v("multiple of 60 seconds.")])]),t._v(" "),s("h2",{attrs:{id:"cloudwatch-alarms"}},[t._v("CloudWatch Alarms")]),t._v(" "),s("p",[t._v("Triggers a notifications based on "),s("strong",[t._v("metrics")]),t._v(" which "),s("strong",[t._v("breach")]),t._v(" a defined threshold.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(422),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"cloudwatch-dashboard"}},[t._v("CloudWatch Dashboard")]),t._v(" "),s("p",[t._v("Create "),s("strong",[t._v("custom dashboards")]),t._v(" from CloudWatch Metrics.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(423),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"cloudwatch-availability"}},[t._v("CloudWatch Availability")]),t._v(" "),s("p",[t._v("How often CloudWatch will collect and make available data.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("EC2")]),t._v(" "),s("th",[t._v("Other services")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Basic Monitoring")]),t._v(" "),s("td",[t._v("5 minutes interval")]),t._v(" "),s("td",[s("strong",[t._v("1 minute(default)")]),t._v("/3 minutes/5 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("Details Monitoring")]),t._v(" "),s("td",[t._v("1 minute interval")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"agent-host-level-metrics"}},[t._v("Agent & Host Level Metrics")]),t._v(" "),s("p",[t._v("Some metrics you might think we tracked by default for EC2 instances are not, and require install the "),s("strong",[t._v("CloudWatch Agent")])]),t._v(" "),s("p",[t._v("The CloudWatch Agent is a script which can be instanlled via "),s("strong",[t._v("System Manager")]),t._v(" Run Command onto the target EC2 instance.")]),t._v(" "),s("p",[t._v("CouldWatch will track at the Host Level by default")]),t._v(" "),s("ul",[s("li",[t._v("CPU Usage")]),t._v(" "),s("li",[t._v("Network Usage")]),t._v(" "),s("li",[t._v("Disk Usage")]),t._v(" "),s("li",[t._v("Status Checks\n"),s("ul",[s("li",[t._v("Underlying Hypervisor status.")]),t._v(" "),s("li",[t._v("Underlying EC2 instance status.")])])])]),t._v(" "),s("p",[t._v("The folloing require the Agent to get detailed metrics for")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Memory")]),t._v(" utilization")]),t._v(" "),s("li",[t._v("Disk swap utilization")]),t._v(" "),s("li",[s("strong",[t._v("Disk space")]),t._v(" utilization")]),t._v(" "),s("li",[t._v("Page file utilization")]),t._v(" "),s("li",[t._v("Log collection")])]),t._v(" "),s("h2",{attrs:{id:"cheat-sheet"}},[t._v("Cheat Sheet")]),t._v(" "),s("ul",[s("li",[t._v("CloudWatch is a collection of monitoring service: "),s("strong",[t._v("Dashboards")]),t._v(", "),s("strong",[t._v("Events")]),t._v(", "),s("strong",[t._v("Alarms")]),t._v(", "),s("strong",[t._v("Logs")]),t._v(" and "),s("strong",[t._v("Metrics")]),t._v(".")]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Logs")]),t._v(" "),s("ul",[s("li",[t._v("Log data from AWS services. eg. CPU Utiliaztion.")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Metrics")]),t._v(" "),s("ul",[s("li",[t._v("Respresents a time-ordered set of data points, A variable to monitor. eg. CPU Utilization over time.")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Events")]),t._v(" "),s("ul",[s("li",[t._v("Trigger an event based on a condition. eg. ever hour take snapshot of server")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Alarm")]),t._v(" "),s("ul",[s("li",[t._v("Triggers notifications based on metrics when a defined threshold is breached.")])])]),t._v(" "),s("li",[t._v("CloudWatch "),s("strong",[t._v("Dashboard")]),t._v(" "),s("ul",[s("li",[t._v("Create visualizations based on metrics")])])]),t._v(" "),s("li",[t._v("EC2 monitors at 5 mins intervals and at Detailed Monitoring 1 minute intervals")]),t._v(" "),s("li",[t._v("Most other service monitor at 1 minute intervals, with intervals of 1, 3, 5 minutes.")]),t._v(" "),s("li",[t._v("Logs must belong to a "),s("strong",[t._v("Log Group")])]),t._v(" "),s("li",[t._v("CloudWatch Agent needs to be installed on EC2 host to track "),s("strong",[t._v("Memory Usage")]),t._v(" and "),s("strong",[t._v("Disk Size")])]),t._v(" "),s("li",[t._v("You can create stream custom log files. eg. production.log")]),t._v(" "),s("li",[t._v("Custom Metrics allow you to track High Resolution Metrics a sub minute intervals all the way down to 1 second.")])])])}),[],!1,null,null,null);s.default=i.exports}}]);