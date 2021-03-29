---
id: apiObservationDELETE
title: DELETE Observation
sidebar_label: DELETE Observation
hide_table_of_contents: true
---

## Overview

The **Observation** API can be used to delete observation records for a patient. These must always be performed against specific `Observation` records using the `id` field of the record to be deleted.

```http
DELETE /Observation/{id}
```

:::info
The DELETE functionality will only permit you to delete content that has been added by your system. You cannot delete content loaded by others.
:::
