---
id: apiQuestionnaireResponsePUT
title: PUT QuestionnaireResponse
sidebar_label: PUT QuestionnaireResponse
hide_table_of_contents: true
---

## Overview

The **QuestionnaireResponse** API can be used to update QuestionnaireResponse records for a patient. This must always be performed against specific `QuestionnaireResponse` records using the `id` field of the record to be updated.

```http
PUT /QuestionnaireResponse/{id}
```

:::info
The PUT functionality will only permit you to update content that has been added by your system. You cannot update content loaded by others.
:::
