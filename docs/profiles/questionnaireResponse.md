---
id: QuestionnaireResponse
title: QuestionnaireResponse
sidebar_label: QuestionnaireResponse
---

### Profile

The QuestionnaireResponse must conform to the Graphnet specific QuestionnaireResponse profile.

### Extensions

The following extensions are used for the QuestionnaireResponse profile within the Graphnet solution:

 - The HL7 FHIR standard extension [CO-value](http://hl7.org/fhir/STU3/extension-iso21090-co-value.html) is permitted for use on element `item.answer.valueCoding`.

### Implemented Data Items

The Graphnet FHIR QuestionnaireResponse API currently supports a limited number of elements from the FHIR QuestionnaireResponse resource.

The table below details where constraints are added. The FHIR API will not allow records to be stored containing restricted elements.

<div class="widetable">

| Path                                        | Level of Support              |
| --------------------------------------------| ----------------------------- |
| QuestionnaireResponse.identifier               | System & Value only           |
| QuestionnaireResponse.basedOn                  | Prohibited – not supported    |
| QuestionnaireResponse.parent                   | Prohibited – not supported    |
| QuestionnaireResponse.context                  | Prohibited – not supported    |
| QuestionnaireResponse.source                   | Prohibited – not supported    |
| QuestionnaireResponse.item.definition          | Prohibited – not supported    |
| QuestionnaireResponse.item.subject             | Prohibited – not supported    |
| QuestionnaireResponse.item.answer              | Limited to one only with limited datatypes supported  |
| QuestionnaireResponse.item.answer.item         | Prohibited – not supported   |
| QuestionnaireResponse.item.item                | Prohibited – not supported   |


</div>

### QuestionnaireResponse.identifier

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
### QuestionnaireResponse.item.answer

The following datatypes are supported:

#### Boolean

```json
"item": [
    {
    "linkId": "087ec9bb-ef98-45e3-aacb-5e2ff4b7c092",
    "text": "Text of question",
    "answer": {
        "valueBoolean": true
        }
    }
]
```

#### Decimal

```json
"item": [
    {
    "linkId": "fa3fbe1d-f361-4948-8846-962746f3d7ec",
    "text": "Text of question",
    "answer": {
        "valueDecimal": 44.3
        }
    }
]
```

#### Integer
 
 ```json
"item": [
 {
    "linkId": "80755a7f-5166-4550-914f-8d1f42cd98c9",
    "text": "Text of question",
    "answer": {
        "valueInteger": 3
        }
    }
]
```

#### Date

```json
"item": [
    {
    "linkId": "9c93ca47-3ccd-4dd2-8f12-613469d93edf",
    "text": "Text of question",
    "answer": {
        "valueDate": "1972-11-30"
        }
    }
]
```

#### DateTime
 
```json
"item": [
{
    "linkId": "1bb83487-0638-4f37-bbb1-9212109abd30",
    "text": "Text of question",
    "answer": {
        "valueDateTime": "2020-01-13T11:43:12+00:00"
        }
    }
]
```

#### Time
 
```json
"item": [
    {
    "linkId": "bd63b4ee-307c-47fb-b351-b9a06c46ec52",
    "text": "Text of question",
    "answer": {
        "time": "11:43:12+00:00"
        }
    }
]
```

#### String
 
```json
"item": [
{
    "linkId": "087ec9bb-ef98-45e3-aacb-5e2ff4b7c092",
    "text": "Text of question",
    "answer": {
    "valueString": "Answer to question"
        }
    }
]
```

#### Coding

```json
"item": [
{
    "linkId": "4e1b95ad-2278-4e35-b745-7b2dcd844b97",
    "text":"Text of question",
    "answer": 
        {
        "valueCoding": {
           "system": "http://system.name",
           "code": "xxxx",
           "display": "Display"
            }
        }
      }
]
```

The coding element permits the use of the HL7 FHIR standard extension [CO-value](http://hl7.org/fhir/STU3/extension-iso21090-co-value.html)
```json
"item": [
{
    "linkId": "c9cba4ef-b9c7-4128-adbd-28fbb54c7156",
    "text": "Text of question",
    "answer":
        {
        "valueCoding": {
         "extension": [
            {
            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
            "valueDecimal": 4
            }
              ],
            "system": "http://system.name",
            "code": "xxxx",
            "display": "Display"
            }
          }
    }
]
```


