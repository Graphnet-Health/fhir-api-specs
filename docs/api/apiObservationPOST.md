---
id: apiObservationPOST
title: POST Observation
sidebar_label: POST Observation
hide_table_of_contents: true
---

## Overview

The **Observation** API can be used to add new observation records to a patient's record. The payload can be in either XML or JSON and must conform to the criteria for Graphnet Observations described in the [profiles](../profiles/Observation) section.

```http
POST /Observation
```

Note that observations created in via this manner can also be updated or deleted by using the API as well.
