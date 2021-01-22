---
id: examplePatient
title: Patient Example
sidebar_label: Patient Example
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
  "resourceType": "Patient",
  "id": "BENL5UI3MDN7JWNWJXGT7LAJP4",
  "meta": {
    "versionId": "20210121074554233",
    "lastUpdated": "2021-01-21T19:45:54+00:00",
    "profile": [
      "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1"
    ],
    "tag": [
      {
        "system": "https://fhir.graphnethealth.com/Tenancies",
        "code": "170",
        "display": "Royal Brompton and Harefield Foundation Trust"
      },
      {
        "system": "https://fhir.graphnethealth.com/Tenancy-Type",
        "code": "acute"
      }
    ]
  },
  "contained": [
    {
      "resourceType": "Practitioner",
      "id": "gp",
      "identifier": [
        {
          "system": "https://fhir.hl7.org.uk/Id/gmp-number",
          "value": "G3030293"
        }
      ]
    }
  ],
  "extension": [
    {
      "extension": [
        {
          "url": "interpreterRequired",
          "valueBoolean": false
        },
        {
          "url": "language",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-HumanLanguage-1",
                "code": "tr",
                "display": "Turkish"
              }
            ],
            "text": "Turkish"
          }
        }
      ],
      "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSCommunication-1"
    }
  ],
  "identifier": [
    {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "1233211300"
    },
    {
      "system": "https://fhir.graphnethealth.com/Id/Local-Identifiers-RT3",
      "value": "123 321 1300"
    }
  ],
  "name": [
    {
      "family": "Simpson",
      "given": ["William"],
      "prefix": ["Mr"]
    }
  ],
  "gender": "male",
  "birthDate": "1942-06-19",
  "address": [
    {
      "line": [
        "324 Titan Rise",
        "Beachampton",
        "Address3",
        "MILTON KEYNES",
        "Address5"
      ],
      "postalCode": "MK17 1RR"
    }
  ],
  "generalPractitioner": [
    {
      "reference": "#gp"
    }
  ],
  "managingOrganization": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/ods-organization-code",
      "value": "P84639"
    }
  }
}
```

</TabItem>
<TabItem value="xml">

```xml
<Patient xmlns="http://hl7.org/fhir">
    <id value="BENL5UI3MDN7JWNWJXGT7LAJP4" />
    <meta>
        <versionId value="20210121074554233" />
        <lastUpdated value="2021-01-21T19:45:54+00:00" />
        <profile value="https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1" />
        <tag>
            <system value="https://fhir.graphnethealth.com/Tenancies" />
            <code value="170" />
            <display value="Royal Brompton and Harefield Foundation Trust" />
        </tag>
        <tag>
            <system value="https://fhir.graphnethealth.com/Tenancy-Type" />
            <code value="acute" />
        </tag>
    </meta>
    <contained>
        <Practitioner>
            <id value="gp" />
            <identifier>
                <system value="https://fhir.hl7.org.uk/Id/gmp-number" />
                <value value="G3030293" />
            </identifier>
        </Practitioner>
    </contained>
    <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSCommunication-1">
        <extension url="interpreterRequired">
            <valueBoolean value="false" />
        </extension>
        <extension url="language">
            <valueCodeableConcept>
                <coding>
                    <system value="https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-HumanLanguage-1" />
                    <code value="tr" />
                    <display value="Turkish" />
                </coding>
                <text value="Turkish" />
            </valueCodeableConcept>
        </extension>
    </extension>
    <identifier>
        <system value="https://fhir.nhs.uk/Id/nhs-number" />
        <value value="1233211300" />
    </identifier>
    <identifier>
        <system value="https://fhir.graphnethealth.com/Id/Local-Identifiers-RT3" />
        <value value="123 321 1300" />
    </identifier>
    <name>
        <family value="Simpson" />
        <given value="William" />
        <prefix value="Mr" />
    </name>
    <gender value="male" />
    <birthDate value="1942-06-19" />
    <address>
        <line value="324 Titan Rise" />
        <line value="Beachampton" />
        <line value="Address3" />
        <line value="MILTON KEYNES" />
        <line value="Address5" />
        <postalCode value="MK17 1RR" />
    </address>
    <generalPractitioner>
        <reference value="#gp" />
    </generalPractitioner>
    <managingOrganization>
        <identifier>
            <system value="https://fhir.nhs.uk/Id/ods-organization-code" />
            <value value="P84639" />
        </identifier>
    </managingOrganization>
</Patient>
```

</TabItem>
</Tabs>
