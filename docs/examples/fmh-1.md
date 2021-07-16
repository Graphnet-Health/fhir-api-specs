---
id: fmh-1
title: FamilyMemberHistory Example 1
sidebar_label: FamilyMemberHistory  1
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
      "value": "12345-678789"
    },
    {
      "system": "http://acme.co.uk",
      "value": "ABC-DEF-GHI-999"
    }
  ],
  "status": "completed",
  "patient": {
    "reference": "Patient/999999999"
  },
  "date": "2020-10-09T14:58:00",
  "relationship": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "1490734016",
        "display": "Grandfather"
      }
    ],
    "text": "Grandfather"
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
                    "valueString": "249813019"
                  },
                  {
                    "url": "descriptionDisplay",
                    "valueString": "FH: Osteoporosis"
                  }
                ],
                "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
              }
            ],
            "system": "http://snomed.info/sct",
            "code": "160313009",
            "display": "FH: Osteoporosis"
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
    <value value="12345-678789" />
  </identifier>
  <identifier>
    <system value="http://acme.co.uk" />
    <value value="ABC-DEF-GHI-999" />
  </identifier>
  <status value="completed" />
  <patient>
    <reference value="Patient/999999999" />
  </patient>
  <date value="2020-10-09T14:58:00" />
  <relationship>
    <coding>
      <system value="http://snomed.info/sct" />
      <code value="1490734016" />
      <display value="Grandfather" />
    </coding>
    <text value="Grandfather" />
  </relationship>
  <condition>
    <code>
      <coding>
        <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid">
          <extension url="descriptionId">
            <valueString value="249813019" />
          </extension>
          <extension url="descriptionDisplay">
            <valueString value="FH: Osteoporosis" />
          </extension>
        </extension>
        <system value="http://snomed.info/sct" />
        <code value="160313009" />
        <display value="FH: Osteoporosis" />
      </coding>
    </code>
  </condition>
</FamilyMemberHistory>
```

</TabItem>
</Tabs>
