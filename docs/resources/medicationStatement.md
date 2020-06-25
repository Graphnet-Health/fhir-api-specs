---
id: medicationStatement
title: MedicationStatement
sidebar_label: MedicationStatement
version: 1.0.0
---

:::caution

This API is a draft API. Before using the API please speak to Graphnet.

:::

## Overview

Graphnet APIs use a valid constraint of the **CareConnect** FHIR profile for the [MedicationStatement](https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-MedicationStatement-1).

The profile is ```https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationStatement``` 


## Extensions

**Graphnet** make use of a number of diferent extension within our APIs

| Extension        | Identifier |
| :-----------: | :-----------: |  
| [Last Issue Date](extLastIssueDate)     |```https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-MedicationStatementLastIssueDate```|
| [Prescription Type](doc1.md)   |```https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-Prescription-Type```|


## Terminology
We use a variety of Code Systems to represent medications including **SNOMED dm+d** codes where available. These include the following

| Name       |      System Identifier      | 
| ------------- | :-----------: | 
| SNOMED dm+d     | http://snomed.info/sct |
| EMIS drug code     | https://fhir.hl7.org.uk/Id/emis-drug-codes    |
| BNF drug code |   ##tbc##    |  

## Example

```js 
    {
      "resourceType": "Medication",
      "id": "med",
      "meta": {
        "profile": [
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Medication-1"
        ]
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "408614000",
            "display": "Latanoprost 50micrograms/ml / Timolol 5mg/ml eye drops"
          },
          {
            "system": "https://fhir.hl7.org.uk/Id/emis-drug-codes",
            "code": "LAEY19461NEMIS",
            "display": "Latanoprost 50micrograms/ml / Timolol 5mg/ml eye drops"
          }
        ],
        "text": "Latanoprost 50micrograms/ml / Timolol 5mg/ml eye drops"
      }
    }
```









