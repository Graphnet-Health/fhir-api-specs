---
id: apiFlagPUT
title: PUT Flag
sidebar_label: PUT Flag
hide_table_of_contents: true
---

## Overview

The **Flag** API can be used to update Flag records for a patient. This must always be performed against specific `Flag` records using the `id` field of the record to be updated.

```http
PUT /Flag/{id}
```

:::info
The PUT functionality will only permit you to update content that has been added by your system. You cannot update content loaded by others.
:::
