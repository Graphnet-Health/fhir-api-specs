---
id: apiQuestionnaireResponseDELETE
title: DELETE QuestionnaireResponse
sidebar_label: DELETE QuestionnaireResponse
hide_table_of_contents: true
---

## Overview

The **QuestionnaireResponse** API can be used to delete QuestionnaireResponse records for a patient. This must always be performed against specific `QuestionnaireResponse` records using the `id` field of the record to be deleted.

```http
DELETE /QuestionnaireResponse/{id}
```

:::info
The DELETE functionality will only permit you to delete content that has been added by your system. You cannot delete content loaded by others.
:::
