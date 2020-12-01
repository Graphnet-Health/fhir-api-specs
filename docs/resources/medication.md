---
id: medication
title: Medication
sidebar_label: Medication
version: 1.0.0
---

import LinkCard from '@site/src/components/LinkCard';

:::caution

This API is a draft API. Before using the API please speak to Graphnet

:::

> Can you send me feedback / alternative ideas, or share to relevant people? Especially if you have experience with various flow engines, e.g. DVC. Thanks!
>
> **The goal is a solution that is simple, expressive, and enables caching.**

<LinkCard title="Docker" description="Build and/or run Clutch inside of a container." to="/docs/getting-started/docker" />

## Overview

Graphnet APIs make use of **CareConnect** FHIR profile for the [Medication Resource](https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Medication-1).

## Extensions

No extensions are used by **Graphnet** within this profile.

## Terminology

We use a variety of Code Systems to represent medications including **SNOMED dm+d** codes where available. These include the following

  <div >
    <table className="fullTable" >
      <tr>
        <th className="fullTableTH">SNOMED dm+d </th>
        <td>http://snomed.info/sct</td>
      </tr>
      <tr>
        <th className="fullTableTH">EMIS drug code </th>
        <td>https://fhir.hl7.org.uk/Id/emis-drug-codes</td>
      </tr>
    </table>
  </div>


:::note

Some medications may not be coded. In this case the medication resource will contain the drug name only. This is illustrated in this [Example](#example-2---uncoded-medication)

:::

## Example #1 - Coded Medication

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

## Example #2 - Uncoded Medication

```js {22,9}
    {
      "resourceType": "Medication",
      "id": "med",
      "meta": {
        "profile": [
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Medication-1"
        ]
      },
        "text": "Latanoprost 50micrograms/ml / Timolol 5mg/ml eye drops"
      }
    }
```
