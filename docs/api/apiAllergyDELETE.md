---
id: apiAllergyDELETE
title: DELETE AllergyIntolerance
sidebar_label: DELETE AllergyIntolerance
hide_table_of_contents: true
---

## Overview

The **AllergyIntolerance** API can be used to delete AllergyIntolerance records for a patient. This must always be performed against specific `AllergyIntolerance` records using the `id` field of the record to be deleted.

```http
DELETE /AllergyIntolerance/{id}
```

:::info
The DELETE functionality will only permit you to delete content that has been added by your system. You cannot delete content loaded by others.
:::
