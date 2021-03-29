---
id: Observation
title: Observation
sidebar_label: Observation
---

The Graphnet CareCentric system can store a wide variety of Observation profiles. For an Observation to be valid then the following criteria must be met:

- The Observation must conform to the [CareConnect-Observation-1](https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1) profile as published by HL7 UK

- Further restrictions are provided by the Graphnet specific profile `https://fhir.graphnethealth.com/STU3/StructureDefinition/Observation`

## Extensions

No extensions are used for the AllergyIntollerance profile within the Graphnet solution.

## Implemented Data Items

The Graphnet FHIR Observation API currently supports a limited number of elements from the FHIR observation resource, this is expected to be extended in future releases.

The table below details where constraints are added. The FHIR API will not allow records to be stored containing restricted elements.

<div class="widetable">

| Path                         | Level of Support              |
| ---------------------------- | ----------------------------- |
| Observation.identifier       | System & Value only           |
| Observation.basedOn          | Prohibited – not supported.   |
| Observation.status           | "Final" only                  |
| Observation.category         | Prohibited – not supported.   |
| Observation.code             | Restricted values (see below) |
| Observation.subject          | System & Value only           |
| Observation.context          | System & Value only           |
| Observation.effective        | DateTime only                 |
| Observation.performer        | Restricted values (see below) |
| Observation.value            | Quantity only                 |
| Observation.dataAbsentreason | Prohibited – not supported.   |
| Observation.interpretation   | Limited values (see below)    |
| Observation.bodySite         | Prohibited – not supported.   |
| Observation.method           | Prohibited – not supported.   |
| Observation.specimen         | Prohibited – not supported.   |
| Observation.device           | Prohibited – not supported.   |
| Observation.referenceRange   | Restricted values (see below) |
| Observation.related          | Prohibited – not supported.   |
| Observation.component        | Prohibited – not supported.   |

</div>

### Observation.identifier

Multiple identifiers are accepted, though only the system and value components should be present.

```json
"identifier": [
        {
            "system": "http://www.acme.com/health/Id",
            "value": "069e985e-7eb1-47a2-9a21-513edc2086af"
        },
        {
            "system": "http://www.med.com/id",
            "value": "32443-234/DF"
        }
    ]
```

### Observation.code

A maximum of two codes can be attached to each record.

When using SNOMED CT codes, a SNOMED CT Concept Code is recorded as

```json
{
  "system": "http://snomed.info/sct",
  "code": "103228002",
  "display": "Blood oxygen saturation"
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
                    "valueString": "260893019"
                },
                {
                    "url": "descriptionDisplay",
                    "valueString": "Haemoglobin saturation with oxygen
                }
            ],
            "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
        }
    ],
    "system": "http://snomed.info/sct",
    "code": "103228002",
    "display": "Blood oxygen saturation"
}
```

If non SNOMED codes are used then these can be recorded either with or without the SNOMED equivalent

```json
({
  "system": "http://snomed.info/sct",
  "code": "103228002",
  "display": "Blood oxygen saturation"
},
{
  "system": "urn:iso:std:iso:11073:10101",
  "code": "150456",
  "display": "MDC_PULS_OXIM_SAT_O2"
})
```

:::warning

If SNOMED CT codes are used then the codes must be semantically relevant for an observation.
Invalid codes will not be excepted.

:::

### Observation.performer

Limited information is persisted for performers in the current Graphnet API. Currently, this is limited to the name of the performer only.

```json
"performer": [
    {
        "display": "Dr David Mannings"
    }
]
```

### Observation.value

Currently, observations only cater for values that are observable quantities, such as

```json
"valueQuantity": {
    "value": 95,
    "unit": "%",
    "system": "http://unitsofmeasure.org",
    "code": "%"
}
```

Ideally, the standardised units of measure should be used, though these can be omitted if they are not known.

```json
"valueQuantity": {
    "value": 95,
    "unit": "%"
}
```

### Observation.interpretation

The API will only accept a limited number of interpretations at the current time - this is expected to be extended in later releases.

Currently, the API caters for `normal` and `abnormal` interpretations using the values shown below.

<div class="widetable">

| Code | System                      | Display  |
| :--: | --------------------------- | :------: |
|  A   | http://hl7.org/fhir/v2/0078 | Abnormal |
|  N   | http://hl7.org/fhir/v2/0078 |  Normal  |

</div>

```json
"interpretation": [
    {
        "coding": [
            {
                "system": "http://hl7.org/fhir/v2/0078",
                "code": "A",
                "display": "Abnormal"
            }
        ]
    }
],
```

```json
"interpretation": [
    {
        "coding": [
            {
                "system": "http://hl7.org/fhir/v2/0078",
                "code": "N",
                "display": "Normal"
            }
        ]
    }
]
```

### Observation.referenceRange

The Graphnet Observation API allows a single reference range to be added to an Observation record. This is optional and can contain a `high` range, `low` range or both.

```json
"referenceRange": [
    {
        "low": {
            "value": 90,
            "unit": "%"
        },
        "high": {
            "value": 99,
            "unit": "%"
        }
    }
]

```
