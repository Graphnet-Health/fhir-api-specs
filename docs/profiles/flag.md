---
id: Flag
title: Flag
sidebar_label: Flag
---

### Profile

The Flag must conform to the Graphnet specific Flag profile.

### Extensions

The following Graphnet specific extensions are used for the Flag profile within the Graphnet solution.

 -  [Alert Sub Type](https://fhir.graphnethealth.com/STU3/Extension-AlertSubType), this extension carries an alert sub type code
 -  [Severity](https://fhir.graphnethealth.com/STU3/Extension-Severity), this extension carries the severity of an alert
 -  [Comment](https://fhir.graphnethealth.com/STU3/Extension-Comment), this extension carries a comment associated with an alert
 

### Implemented Data Items

The Graphnet FHIR Flag API currently supports a limited number of elements from the FHIR Flag resource.

The table below details where constraints are added. The FHIR API will not allow records to be stored containing restricted elements.

<div class="widetable">

| Path                                        | Level of Support              |
| --------------------------------------------| ----------------------------- |
| Flag.identifier               | System & Value only           |
| Flag.subject                  | "Patient" only                |
| Flag.encounter                | Prohibited – not supported    |


</div>

### Flag.identifier

Multiple identifiers are accepted, though only the system and value components should be present.

```json
"identifier": [
        {
            "system": "http://www.acme.com/health/Id",
            "value": "dc6a8b58-1ca4-421c-8695-e2f592db30cb"
        },
        {
            "system": "http://www.med.com/id",
            "value": "32443-123/YH"
        }
    ]
```

