---
id: exampleObservation-1
title: Observation Example
sidebar_label: Observation Example
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
    "resourceType": "Observation",
    "id": "52WMVUDFTVLER2AFIKKFYVZSYI",
    "meta": {
        "versionId": "20210302120000",
        "lastUpdated": "2021-03-02T00:00:00+00:00",
        "profile": [
            "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1"
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
            "system": "http://www.acme.com/health/Id",
            "value": "069e985e-7eb1-47a2-9a21-513edc2086af"
        },
        {
            "system": "http://www.med.com/id",
            "value": "32443-234/DF"
        }
    ],
    "status": "final",
    "code": {
        "coding": [
            {
                "extension": [
                    {
                        "extension": [
                            {
                                "url": "descriptionId",
                                "valueString": "598581000000118"
                            },
                            {
                                "url": "descriptionDisplay",
                                "valueString": "Weight
                            }
                        ],
                        "url": "https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid"
                    }
                ],
                "system": "http://snomed.info/sct",
                "code": "27113001",
                "display": "Body Weight"
            }
        ]
    },
    "subject": {
        "reference": "https://gnharazdev-vs01.grhapp.com/Vonk_IIS/R3/Patient/H5N7RZRF7KEPHTO56HIVANH7HU"
    },
    "effectiveDateTime": "2021-03-02T00:00:00+00:00",
    "issued": "2021-03-02T00:00:00+00:00",
    "performer": [
        {
            "display": "Dr David Mannings"
        }
    ],
    "valueQuantity": {
        "value": 82.600,
        "unit": "kg",
        "system": "http://unitsofmeasure.org",
        "code": "kg"
    }
}
```

</TabItem>
<TabItem value="xml">

```xml
<Observation xmlns="http://hl7.org/fhir">
    <id value="52WMVUDFTVLER2AFIKKFYVZSYI" />
    <meta>
        <versionId value="20210302120000" />
        <lastUpdated value="2021-03-02T00:00:00+00:00" />
        <profile value="https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1" />
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
        <system value="http://www.acme.com/health/Id" />
        <value value="069e985e-7eb1-47a2-9a21-513edc2086af" />
    </identifier>
    <status value="final" />
    <code>
        <coding>
            <extension url="https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid">
                <extension url="descriptionId">
                    <valueString value="598581000000118" />
                </extension>
                <extension url="descriptionDisplay">
                    <valueString value="Weight" />
                </extension>
            </extension>
            <system value="http://snomed.info/sct" />
            <code value="27113001" />
            <display value="Body Weight" />
        </coding>
    </code>
    <subject>
        <reference value="https://gnharazdev-vs01.grhapp.com/Vonk_IIS/R3/Patient/H5N7RZRF7KEPHTO56HIVANH7HU" />
    </subject>
    <effectiveDateTime value="2021-03-02T00:00:00+00:00" />
    <issued value="2021-03-02T00:00:00+00:00" />
    <performer>
        <display value="Dr David Mannings" />
    </performer>
    <valueQuantity>
        <value value="82.600" />
        <unit value="kg" />
        <system value="http://unitsofmeasure.org" />
        <code value="kg" />
    </valueQuantity>
</Observation>
```

</TabItem>
</Tabs>
