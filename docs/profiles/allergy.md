---
id: AllergyIntolerance
title: AllergyIntolerance
sidebar_label: AllergyIntolerance
---

### Profile

The standard CareConnect profile is used for AllergyIntolerance, it can be viewed on the HL7 UK website.

[https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1](https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1)

### Extensions

No extensions are used for the AllergyIntolerance profile within the Graphnet solution.

### Implemented Data Items

<div class="widetable">

| Path                                  | Level of Support    |
| ------------------------------------- | ------------------- |
| AllergyIntolerance.identifier         | System & Value only |
| AllergyIntolerance.clinicalStatus     | "Active" only       |
| AllergyIntolerance.verificationStatus | "Confirmed" only    |
| AllergyIntolerance.type               | Prohibited – not supported |
| AllergyIntolerance.category           | Prohibited – not supported |
| AllergyIntolerance.criticality        | Prohibited – not supported |
| AllergyIntolerance.code               | Restricted values (see below) |
| AllergyIntolerance.patient            | System & Value only |
| AllergyIntolerance.encounter          | System & Value only |
| AllergyIntolerance.onset              | Prohibited – not supported |
| AllergyIntolerance.assertedDate       | Date only |
| AllergyIntolerance.recorder           | Restricted values (see below) |
| AllergyIntolerance.asserter           | Restricted values (see below) |
| AllergyIntolerance.lastOccurence      | Prohibited – not supported |
| AllergyIntolerance.note               | Prohibited – not supported |
| AllergyIntolerance.reaction           | Prohibited – not supported |

</div>

### AllergyIntolerance.identifier

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
### AllergyIntolerance.code

A maximum of two codes can be attached to each record.

When using SNOMED CT codes, a SNOMED CT Concept Code is recorded as

```json
{
  "system": "http://snomed.info/sct",
  "code": "762952008",
  "display": "Peanut"
}
```

If the SNOMED description Id is also known, this can be recorded making use of the standard FHIR extension available for this

```json
{
    "extension": [
        {
            "extension": [
                {
                    "url": "descriptionId",
                    "valueString": "3635998019"
                },
                {
                    "url": "descriptionDisplay",
                    "valueString": "Peanuts"
                }
            ],
            "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
        }
    ],
    "system": "http://snomed.info/sct",
    "code": "762952008",
    "display": "Peanut"
}
```
### AllergyIntolerance.recorder

Limited information is persisted for performers in the current Graphnet API. Currently, this is limited to the name of the performer only.

```json
"recorder": [
    {
        "display": "Dr David Mannings"
    }
]
```

### AllergyIntolerance.asserter

Limited information is persisted for performers in the current Graphnet API. Currently, this is limited to the name of the performer only.

```json
"asserter": [
    {
        "display": "Dr David Mannings"
    }
]
```