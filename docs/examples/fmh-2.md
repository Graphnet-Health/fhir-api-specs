---
id: fmh-2
title: FamilyMemberHistory Example 2
sidebar_label: FamilyMemberHistory Example 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[
{ label: 'JSON', value: 'json', },
{ label: 'XML', value: 'xml', },
]}>
<TabItem value="json">

```json
{
  "resourceType": "FamilyMemberHistory",
  "meta": {
    "profile": [
      "https://fhir.graphnethealth.com/STU3/StructureDefinition-FamilyMemberHistory"
    ]
  },
  "identifier": [
    {
      "system": "http://acme.org",
      "value": "12345-343423"
    }
  ],
  "status": "completed",
  "patient": {
    "reference": "Patient/999999999"
  },
  "date": "2018-07-11T14:00:00",
  "relationship": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
        "code": "NAVU",
        "display": "Not Available"
      }
    ],
    "text": "Not Available"
  },
  "condition": [
    {
      "code": {
        "coding": [
          {
            "extension": [
              {
                "extension": [
                  {
                    "url": "descriptionId",
                    "valueString": "2773645012"
                  },
                  {
                    "url": "descriptionDisplay",
                    "valueString": "Family history of diabetes mellitus type 2"
                  }
                ],
                "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
              }
            ],
            "system": "http://snomed.info/sct",
            "code": "430679000",
            "display": "Family history of diabetes mellitus type 2"
          }
        ]
      }
    }
  ]
}
```

</TabItem>
<TabItem value="xml">

```xml
<FamilyMemberHistory xmlns="http://hl7.org/fhir">
  <meta>
    <profile value="https://fhir.graphnethealth.com/STU3/StructureDefinition-FamilyMemberHistory" />
  </meta>
  <identifier>
    <system value="http://acme.org" />
    <value value="12345-343423" />
  </identifier>
  <status value="completed" />
  <patient>
    <reference value="Patient/999999999" />
  </patient>
  <date value="2018-07-11T14:00:00" />
  <relationship>
    <coding>
      <system value="http://terminology.hl7.org/CodeSystem/v3-NullFlavor" />
      <code value="NAVU" />
      <display value="Not Available" />
    </coding>
    <text value="Not Available" />
  </relationship>
  <condition>
    <code>
      <coding>
        <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid">
          <extension url="descriptionId">
            <valueString value="2773645012" />
          </extension>
          <extension url="descriptionDisplay">
            <valueString value="Family history of diabetes mellitus type 2" />
          </extension>
        </extension>
        <system value="http://snomed.info/sct" />
        <code value="430679000" />
        <display value="Family history of diabetes mellitus type 2" />
      </coding>
    </code>
  </condition>
</FamilyMemberHistory>

```

</TabItem>
</Tabs>
