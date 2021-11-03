---
id: apiFlagPOST
title: POST Flag
sidebar_label: POST Flag
hide_table_of_contents: true
---

## Overview

The **Flag** API can be used to add new Flag records to a patient's record. The payload can be in either XML or JSON and must conform to the criteria for Graphnet Flags described in the [profiles](../profiles/Flag) section.

```http
POST /Flag
```

Note that Flags created in this manner can also be updated or deleted by using the API.
