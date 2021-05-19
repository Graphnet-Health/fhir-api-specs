---
id: exampleAllergy-1
title: AllergyIntolerance Example
sidebar_label: AllergyIntolerance Example
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
  "resourceType": "AllergyIntolerance",
  "id": "658FHYVGH2AFIKLPOJUYI5IJEC",
    "meta": {
        "versionId": "20210302120000",
        "lastUpdated": "2021-03-02T00:00:00+00:00",
        "profile": [
            "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1"
        ],
        "tag": [
            {
                "system": "https://fhir.graphnethealth.com/CodeSystem-Tenancies",
                "code": "17"
            },
            {
                "system": "https://fhir.graphnethealth.com/CodeSystem-TenancyType",
                "code": "acute"
            }
        ]
    },  
  "identifier": [
    {
      "system": "http://acme.org",
      "value": "12345-678789"
    }
  ],
  "clinicalStatus": "active",
  "verificationStatus": "confirmed",
  "type": "allergy",
  "criticality": "high",
  "code": {
    "coding": [
      {
        "system": "http://read.info/readv2",
        "code": "14LA",
        "display": "H/O: erythromycin allergy"
      },
      {
        "extension": [
          {
            "extension": [
              {
                "url": "descriptionId",
                "valueString": "152300012"
              },
              {
                "url": "descriptionDisplay",
                "valueString": "H/O: erythromycin allergy"
              }
            ],
            "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
          }
        ],
        "system": "http://snomed.info/sct",
        "code": "91931000",
        "display": "H/O: erythromycin allergy"
      }
    ]
  },
  "patient": {
    "reference": "Patient/999999999"
  },
  "onsetDateTime": "2021-01-06T10:27:30+00:00",
  "assertedDate": "2020-10-09T14:58:00+00:00",
  "recorder": {
    "display": "Mr. Andrew Clerk"
  },
  "asserter": {
    "display": "Mr. Andrew Clerk"
  },
  "note": [
    {
      "text": "Allergy to erythromycin, reaction rash."
    }
  ],
  "reaction": [
    {
      "manifestation": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "162415008",
              "display": "C/O: a rash"
            }
          ]
        }
      ]
    }
  ]
}
```

</TabItem>
<TabItem value="xml">

```xml
<AllergyIntolerance xmlns="http://hl7.org/fhir">
    <id value="658FHYVGH2AFIKLPOJUYI5IJEC" />
    <meta>
        <versionId value="20210302120000" />
        <lastUpdated value="2021-03-02T00:00:00+00:00" />
        <profile value="https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1" />
        <tag>
            <system value="https://fhir.graphnethealth.com/CodeSystem-Tenancies" />
            <code value="17" />
        </tag>
        <tag>
            <system value="https://fhir.graphnethealth.com/CodeSystem-TenancyType" />
            <code value="acute" />
        </tag>
    </meta>
    <identifier>
        <system value="http://acme.org" />
        <value value="12345-678789" />
    </identifier>
    <clinicalStatus value="active" />
    <verificationStatus value="confirmed" />
    <type value="allergy" />
    <criticality value="high" />
    <code>
        <coding>
            <system value="http://read.info/readv2" />
            <code value="14LA" />
            <display value="H/O: erythromycin allergy" />
        </coding>
        <coding>
            <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid">
                <extension url="descriptionId">
                    <valueString value="152300012" />
                </extension>
                <extension url="descriptionDisplay">
                    <valueString value="H/O: erythromycin allergy" />
                </extension>
            </extension>
            <system value="http://snomed.info/sct" />
            <code value="91931000" />
            <display value="H/O: erythromycin allergy" />
        </coding>
    </code>
    <patient>
        <reference value="Patient/999999999" />
    </patient>
    <onsetDateTime value="2021-01-06T10:27:30+00:00" />
    <assertedDate value="2020-10-09T14:58:00+00:00" />
    <recorder>
        <display value="Mr. Andrew Clerk" />
    </recorder>
    <asserter>
        <display value="Mr. Andrew Clerk" />
    </asserter>
    <note>
        <text value="Allergy to erythromycin, reaction rash." />
    </note>
    <reaction>
        <manifestation>
            <coding>
                <system value="http://snomed.info/sct" />
                <code value="162415008" />
                <display value="C/O: a rash" />
            </coding>
        </manifestation>
    </reaction>
</AllergyIntolerance>
```

</TabItem>
</Tabs>
