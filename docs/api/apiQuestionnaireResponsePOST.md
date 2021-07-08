---
id: apiQuestionnaireResponsePOST
title: POST QuestionnaireResponse
sidebar_label: POST QuestionnaireResponse
hide_table_of_contents: true
---

## Overview

The **QuestionnaireResponse** API can be used to add new QuestionnaireResponse records to a patient's record. The payload can be in either XML or JSON and must conform to the criteria for Graphnet QuestionnaireResponses described in the [profiles](../profiles/QuestionnaireResponse) section.

```http
POST /QuestionnaireResponse
```

Note that QuestionnaireResponses created in this manner can also be updated or deleted by using the API.
