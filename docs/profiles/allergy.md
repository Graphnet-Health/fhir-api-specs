---
id: AllergyIntolerance
title: AllergyIntolerance
sidebar_label: AllergyIntolerance
---

### Profile

The AllergyIntolerance must conform to the Graphnet specific Allergy Intolerance profile.

### Extensions

No extensions are used for the AllergyIntolerance profile within the Graphnet solution.

### Implemented Data Items

The Graphnet FHIR AllergyIntolerance API currently supports a limited number of elements from the FHIR AllergyIntolerance resource.

The table below details where constraints are added. The FHIR API will not allow records to be stored containing restricted elements.

<div class="widetable">

| Path                                        | Level of Support              |
| --------------------------------------------| ----------------------------- |
| AllergyIntolerance.identifier               | System & Value only           |
| AllergyIntolerance.clinicalStatus           | "Active" only                 |
| AllergyIntolerance.category                 | Prohibited – not supported    |
| AllergyIntolerance.code                     | Restricted values (see below) |
| AllergyIntolerance.onset                    | Limited to dateTime only      |
| AllergyIntolerance.lastOccurence            | Prohibited – not supported    |
| AllergyIntolerance.note                     | Limited to text only          |
| AllergyIntolerance.reaction                 | Limited to one only           |
| AllergyIntolerance.reaction.substance       | Limited to one only (no text) |
| AllergyIntolerance.reaction.manifestation   | Limited to one only (no text) |
| AllergyIntolerance.reaction.onset           | Prohibited – not supported    |
| AllergyIntolerance.reaction.severity        | Prohibited – not supported    |
| AllergyIntolerance.reaction.exposureRoute   | Prohibited – not supported    |
| AllergyIntolerance.reaction.note            | Prohibited – not supported    |

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
