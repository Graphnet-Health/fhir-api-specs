---
id: exampleImmunization-1
title: Immunization Example
sidebar_label: Immunization Example
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
  "resourceType": "Immunization",
  "id": "658FHYVGH2AFDINHYGEI5IJ",
    "meta": {
        "versionId": "20210601120000",
        "lastUpdated": "2021-06-01T00:00:00+00:00",
        "profile": [
            "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Immunization-1"
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
      "value": "98765-4563789"
    }
  ],
  "status": "completed",
  "notGiven": "false",
  "vaccineCode": {
    "coding": [
      {
        "extension": [
          {
            "extension": [
              {
                "url": "descriptionId",
                "valueString": "31811801000001118"
              },
              {
                "url": "descriptionDisplay",
                "valueString": "Yellow fever vaccine"
              }
            ],
            "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
          }
        ],
        "system": "http://snomed.info/sct",
        "code": "9895711000001104",
        "display": "Yellow fever vaccine"
      }
    ]
  },
  "patient": {
    "reference": "Patient/999999999"
  },
  "primarySource": "true",
  "date": "2021-01-06",
  "expirationDate": "2023-01-31",
  "site": [
    {
      "coding": [
        {
            "extension": [
              {
                "extension": [
                  {
                    "url": "descriptionId",
                    "valueString": "507685017"
                  },
                  {
                    "url": "descriptionDisplay",
                    "valueString": "Left upper arm structure"
                  }
                ],
                "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
              }
            ],
          "system": "http://snomed.info/sct",
          "code": "368208006",
          "display": "Left upper arm structure"
        }
      ]
    }
  ],
  "route": [
    {
      "coding": [
        {
            "extension": [
              {
                "extension": [
                  {
                    "url": "descriptionId",
                    "valueString": "56893201000001114"
                  },
                  {
                    "url": "descriptionDisplay",
                    "valueString": "Intramuscular"
                  }
                ],
                "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
              }
            ],
          "system": "http://snomed.info/sct",
          "code": "78421000",
          "display": "Intramuscular"
        }
      ]
    }
  ],
  "practitioner": {
    "actor":[
        {"display": "Mr. Andrew Clerk"}
        ]
    }
}
```

</TabItem>
<TabItem value="xml">

```xml
<Immunization xmlns="http://hl7.org/fhir">
    <id value="658FHYVGH2AFDINHYGEI5IJ" />
    <meta>
        <versionId value="20210601120000" />
        <lastUpdated value="2021-06-01T00:00:00+00:00" />
        <profile value="https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Immunization-1" />
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
        <value value="98765-4563789" />
    </identifier>
    <status value="completed" />
    <notGiven value="false" />
    <vaccineCode>
        <coding>
            <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid">
                <extension url="descriptionId">
                    <valueString value="31811801000001118" />
                </extension>
                <extension url="descriptionDisplay">
                    <valueString value="Yellow fever vaccine" />
                </extension>
            </extension>
            <system value="http://snomed.info/sct" />
            <code value="9895711000001104" />
            <display value="Yellow fever vaccine" />
        </coding>
    </vaccineCode>
    <patient>
        <reference value="Patient/999999999" />
    </patient>
    <date value="2021-01-06" />
    <primarySource value="true" />
    <expirationDate value="2023-01-31" />
    <site>
        <coding>
            <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid">
                <extension url="descriptionId">
                    <valueString value="507685017" />
                </extension>
                <extension url="descriptionDisplay">
                    <valueString value="Left upper arm structure" />
                </extension>
            </extension>
            <system value="http://snomed.info/sct" />
            <code value="368208006" />
            <display value="Left upper arm structure" />
        </coding>
    </site>
    <route>
        <coding>
            <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid">
                <extension url="descriptionId">
                    <valueString value="56893201000001114" />
                </extension>
                <extension url="descriptionDisplay">
                    <valueString value="Intramuscular" />
                </extension>
            </extension>
            <system value="http://snomed.info/sct" />
            <code value="78421000" />
            <display value="Intramuscular" />
        </coding>
    </route>
    <practitioner>
        <actor>
            <display value="Mr. Andrew Clerk" />
        </actor>
    </practitioner>
</Immunization>
```

</TabItem>
</Tabs>
