---
id: apiObservationPUT
title: PUT Observation
sidebar_label: PUT Observation
hide_table_of_contents: true
---

## Overview

The **Observation** API can be used to delete observation records for a patient. These must always be performed against specific `Observation` records using the `id` field of the record to be deleted.

```http
DELETE /Observation/{id}
```

:::warning
Should we include ETag validation - if so would it be optional or mandatory?
:::

:::warning
Testing of "client id" deletes to be performed plus supporting text to describe this.
:::
