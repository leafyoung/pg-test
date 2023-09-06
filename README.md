README

```
npm install

./node_modules/.bin/ts-node client.ts


```

```
error: SSL connection error: no pg_hba.conf entry for host "IP.IP.IP.IP", user "XXXXXX", database "XXXXX", no encryption
    at pg/node_modules/pg/lib/client.js:526:17
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async del (pg/client.ts:16:20) {
  length: 154,
  severity: 'FATAL',
  code: '08006',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: undefined,
  line: undefined,
  routine: undefined
}
```
