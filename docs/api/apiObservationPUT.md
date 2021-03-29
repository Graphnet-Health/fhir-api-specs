---
id: apiObservationPUT
title: PUT Observation
sidebar_label: PUT Observation
hide_table_of_contents: true
---

## Overview

The **Observation** API can be used to update observation records for a patient. These must always be performed against specific `Observation` records using the `id` field of the record to be updated.

```http
PUT /Observation/{id}
```

:::info
The PUT functionality will only permit you to delete content that has been added by your system. You cannot delete content loaded by others.
:::
