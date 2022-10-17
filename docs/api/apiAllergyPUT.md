---
id: apiAllergyIntolerancePUT
title: PUT AllergyIntolerance
sidebar_label: PUT AllergyIntolerance
hide_table_of_contents: true
---

## Overview

The **AllergyIntolerance** API can be used to update AllergyIntolerance records for a patient. This must always be performed against specific `AllergyIntolerance` records using the `id` field of the record to be updated.

```http
PUT /AllergyIntolerance/{id}
```

:::info
The PUT functionality will only permit you to update content that has been added by your system. You cannot update content loaded by others.
:::
