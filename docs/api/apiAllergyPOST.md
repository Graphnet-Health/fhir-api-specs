---
id: apiAllergyPOST
title: POST AllergyIntolerance
sidebar_label: POST AllergyIntolerance
hide_table_of_contents: true
---

## Overview

The **AllergyIntolerance** API can be used to add new AllergyIntolerance records to a patient's record. The payload can be in either XML or JSON and must conform to the criteria for Graphnet AllergyIntolerances described in the [profiles](../profiles/AllergyIntolerance) section.

```http
POST /AllergyIntolerance
```

Note that AllergyIntolerances created in this manner can also be updated or deleted by using the API.
