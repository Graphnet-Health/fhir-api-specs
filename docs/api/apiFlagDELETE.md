---
id: apiFlagDELETE
title: DELETE Flag
sidebar_label: DELETE Flag
hide_table_of_contents: true
---

## Overview

The **Flag** API can be used to delete Flag records for a patient. This must always be performed against specific `Flag` records using the `id` field of the record to be deleted.

```http
DELETE /Flag/{id}
```

:::info
The DELETE functionality will only permit you to delete content that has been added by your system. You cannot delete content loaded by others.
:::
