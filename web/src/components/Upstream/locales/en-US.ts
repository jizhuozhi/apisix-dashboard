/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
  'component.upstream.fields.tls.client_key': 'Client Key',
  'component.upstream.fields.tls.client_key.required': 'Please enter the client key',
  'component.upstream.fields.tls.client_cert': 'Client Cert',
  'component.upstream.fields.tls.client_cert.required': 'Please enter the client cert',

  'component.upstream.fields.upstream_type': 'Upstream Type',
  'component.upstream.fields.upstream_type.node': 'Node',
  'component.upstream.fields.upstream_type.service_discovery': 'Service Discovery',

  'component.upstream.fields.discovery_type': 'Discovery Type',
  'component.upstream.fields.discovery_type.tooltip': 'Discovery Type',
  'component.upstream.fields.discovery_type.placeholder': 'Please select the discovery type',
  'component.upstream.fields.discovery_type.type.dns': 'DNS',
  'component.upstream.fields.discovery_type.type.consul': 'Consul',
  'component.upstream.fields.discovery_type.type.consul_kv': 'Consul KV',
  'component.upstream.fields.discovery_type.type.nacos': 'Nacos',
  'component.upstream.fields.discovery_type.type.eureka': 'Eureka',
  'component.upstream.fields.discovery_type.type.kubernetes': 'Kubernetes',

  'component.upstream.fields.discovery_args.group_name': 'Group Name',
  'component.upstream.fields.discovery_args.group_name.tooltip': 'Group Name',
  'component.upstream.fields.discovery_args.group_name.placeholder': 'Please enter the group name',
  'component.upstream.fields.discovery_args.namespace_id': 'Namespace ID',
  'component.upstream.fields.discovery_args.namespace_id.tooltip': 'Namespace ID',
  'component.upstream.fields.discovery_args.namespace_id.placeholder':
    'Please enter the namespace id',

  'component.upstream.fields.service_name': 'Service Name',
  'component.upstream.fields.service_name.tooltip': 'Service Name',
  'component.upstream.fields.service_name.placeholder': 'Please enter the service name',

  'component.upstream.fields.discovery_args.metadata_match': 'Metadata Match',
  'component.upstream.fields.discovery_args.metadata_match.tooltip': 'Used to filter nodes by metadata; each value can be a comma-separated list.',
  'component.global.value.key': 'Key',
  'component.global.value.value': 'Comma-separated values',
  'component.global.add': 'Add',

  'component.upstream.fields.scheme.tooltip.stream':
    'This type is only used for Stream Route, which is a layer 4 proxy. Reference: https://apisix.apache.org/docs/apisix/stream-proxy/',
  'component.upstream.fields.scheme.tooltip.pubsub':
    'This type is only used in publish subscription. Reference: https://apisix.apache.org/docs/apisix/pubsub/',

  'component.upstream.fields.tls': 'TLS',
  'component.upstream.fields.tls.tooltip': 'TLS Certificate',

  'component.upstream.fields.hash_on': 'Hash on',
  'component.upstream.fields.hash_on.tooltip': 'What to use as hashing input',

  'component.upstream.fields.key': 'Key',
  'component.upstream.fields.key.tooltip': 'Key as hashing input',

  "component.upstream.fields.subset.fallback_policy": "Fallback Policy",
  "component.upstream.fields.subset.fallback_policy.tooltip": "Subset fallback policy",
  "component.upstream.fields.subset.fallback_policy.no_fallback": "No Fallback",
  "component.upstream.fields.subset.fallback_policy.any_endpoint": "Any Endpoint",
  "component.upstream.fields.subset.fallback_policy.default_subset": "Default Subset",
  "component.upstream.fields.subset.header_prefix": "Header Prefix",
  "component.upstream.fields.subset.header_prefix.tooltip": "HTTP header prefix for subset matching",
  "component.upstream.fields.subset.header_prefix.placeholder": "Enter header prefix",
  "component.upstream.fields.subset.lb_type": "Load Balancer Type",
  "component.upstream.fields.subset.lb_type.tooltip": "Load balancing type for subsets",
  "component.upstream.fields.subset.default_subset": "Default Subset",
  "component.upstream.fields.subset.default_subset.tooltip": "Default subset metadata, key-values",
  "component.upstream.fields.subset.default_subset.key_required": "Key is required",
  "component.upstream.fields.subset.default_subset.key_placeholder": "Key",
  "component.upstream.fields.subset.default_subset.values_required": "Values are required",
  "component.upstream.fields.subset.default_subset.values_placeholder": "Enter values",
  "component.upstream.fields.subset.default_subset.add": "Add Default Subset Item",
  "component.upstream.fields.subset.subset_selectors": "Subset Selectors",
  "component.upstream.fields.subset.subset_selectors.tooltip": "Subset selectors, each contains keys",
  "component.upstream.fields.subset.subset_selectors.keys_required": "Keys are required",
  "component.upstream.fields.subset.subset_selectors.keys_placeholder": "Enter selector keys",
  "component.upstream.fields.subset.subset_selectors.add": "Add Subset Selector",

  'component.upstream.fields.retries': 'Retries',
  'component.upstream.fields.retries.tooltip':
    'The retry mechanism sends the request to the next upstream node. A value of 0 disables the retry mechanism and leaves the table empty to use the number of available backend nodes.',

  'component.upstream.fields.retry_timeout': 'Retry Timeout',
  'component.upstream.fields.retry_timeout.tooltip':
    'Configure a number to limit the amount of seconds that retries can be continued, and do not continue retries if the previous request and retry requests have taken too long. 0 means disable retry timeout mechanism.',

  'component.upstream.fields.keepalive_pool': 'Keepalive Pool',
  'component.upstream.fields.keepalive_pool.tooltip': 'Set independent keepalive pool for Upstream',
  'component.upstream.fields.keepalive_pool.size': 'Size',
  'component.upstream.fields.keepalive_pool.size.placeholder': 'Please enter the size',
  'component.upstream.fields.keepalive_pool.idle_timeout': 'Idle Timeout',
  'component.upstream.fields.keepalive_pool.idle_timeout.placeholder':
    'Please enter the idle timeout',
  'component.upstream.fields.keepalive_pool.requests': 'Requests',
  'component.upstream.fields.keepalive_pool.requests.placeholder': 'Please enter the requests',

  'component.upstream.fields.checks.active.type': 'Type',
  'component.upstream.fields.checks.active.type.tooltip':
    'Whether to perform active health checks using HTTP or HTTPS, or just attempt a TCP connection.',

  'component.upstream.fields.checks.active.concurrency': 'Concurrency',
  'component.upstream.fields.checks.active.concurrency.tooltip':
    'Number of targets to check concurrently in active health checks.',

  'component.upstream.fields.checks.active.host': 'Host',
  'component.upstream.fields.checks.active.host.required': 'Please enter the hostname',
  'component.upstream.fields.checks.active.host.tooltip':
    'The hostname of the HTTP request used to perform the active health check',
  'component.upstream.fields.checks.active.host.scope': 'Only letters, numbers and . are supported',

  'component.upstream.fields.checks.active.port': 'Port',

  'component.upstream.fields.checks.active.http_path': 'HTTP Path',
  'component.upstream.fields.checks.active.http_path.tooltip':
    'The path that should be used when issuing the HTTP GET request to the target. The default value is /.',
  'component.upstream.fields.checks.active.http_path.placeholder':
    'Please enter the HTTP request path',

  'component.upstream.fields.checks.active.https_verify_certificate': 'Verify HTTPs Certificate',
  'component.upstream.fields.checks.active.https_verify_certificate.tooltip':
    'Whether to check the validity of the SSL certificate of the remote host when performing active health checks using HTTPS.',

  'component.upstream.fields.checks.active.req_headers': 'Request Headers',
  'component.upstream.fields.checks.active.req_headers.tooltip':
    'Additional request headers, example: User-Agent: curl/7.29.0',

  'component.upstream.fields.checks.active.healthy.interval': 'Interval',
  'component.upstream.fields.checks.active.healthy.interval.tooltip':
    'Interval between checks for healthy targets (in seconds)',

  'component.upstream.fields.checks.active.healthy.successes': 'Successes',
  'component.upstream.fields.checks.active.healthy.successes.tooltip':
    'Number of successes to consider a target healthy',
  'component.upstream.fields.checks.active.healthy.successes.required':
    'Please enter successes number',

  'component.upstream.fields.checks.active.healthy.http_statuses': 'HTTP Statuses',
  'component.upstream.fields.checks.active.healthy.http_statuses.tooltip':
    'An array of HTTP statuses to consider a success, indicating healthiness, when returned by a probe in active health checks.',

  'component.upstream.fields.checks.active.unhealthy.timeouts': 'Timeouts',
  'component.upstream.fields.checks.active.unhealthy.timeouts.tooltip':
    'Number of timeouts in active probes to consider a target unhealthy.',

  'component.upstream.fields.checks.active.unhealthy.http_failures': 'HTTP Failures',
  'component.upstream.fields.checks.active.unhealthy.http_failures.tooltip':
    'Number of HTTP failures to consider a target unhealthy',
  'component.upstream.fields.checks.active.unhealthy.http_failures.required':
    'Please enter the HTTP failures',

  'component.upstream.fields.checks.active.unhealthy.tcp_failures': 'TCP Failures',
  'component.upstream.fields.checks.active.unhealthy.tcp_failures.tooltip':
    'Number of TCP failures to consider a target unhealthy',
  'component.upstream.fields.checks.active.unhealthy.tcp_failures.required':
    'Please enter the TCP Failures',

  'component.upstream.fields.checks.active.unhealthy.interval': 'Interval',
  'component.upstream.fields.checks.active.unhealthy.interval.tooltip':
    'Interval between active health checks for unhealthy targets (in seconds). A value of zero indicates that active probes for healthy targets should not be performed.',
  'component.upstream.fields.checks.active.unhealthy.required':
    'Please enter the unhealthy interval',

  'component.upstream.fields.checks.passive.healthy.successes': 'Successes',
  'component.upstream.fields.checks.passive.healthy.successes.tooltip':
    'Number of successes to consider a target healthy',
  'component.upstream.fields.checks.passive.healthy.successes.required':
    'Please enter the successes number',

  'component.upstream.fields.checks.passive.unhealthy.timeouts': 'Timeouts',
  'component.upstream.fields.checks.passive.unhealthy.timeouts.tooltip':
    'Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks.',

  'component.upstream.other.none': 'None (Only available when binding the service)',
  'component.upstream.other.pass_host-with-multiple-nodes.title':
    'Please check the target node configuration',
  'component.upstream.other.pass_host-with-multiple-nodes':
    'When using a host name or IP in the target node list, make sure there is only one target node',
  'component.upstream.other.health-check.passive-only':
    'When passive health check is enabled, active health check needs to be enabled at the same time.',
  'component.upstream.other.health-check.invalid': 'Please check the health check configuration',
};
