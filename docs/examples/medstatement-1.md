---
id: exampleMedicationStatement-1
title: MedicationStatement Example
sidebar_label: MedicationStatement Example
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
    "resourceType": "MedicationStatement",
    "id": "JNQDXHKO4AOVBXREZWELZJZA5A",
    "meta": {
        "versionId": "20220922012635751",
        "lastUpdated": "2022-09-22T13:26:35+00:00",
        "profile": [
            "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationStatement"
        ],
        "tag": [
            {
                "system": "https://fhir.graphnethealth.com/CodeSystem-Tenancies",
                "code": "3"
            },
            {
                "system": "https://fhir.graphnethealth.com/CodeSystem-TenancyType",
                "code": "EMIS"
            }
        ]
    },
    "contained": [
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
                        "code": "317971007",
                        "display": "Furosemide 20mg tablets"
                    }
                ],
                "text": "Furosemide 20mg tablets"
            }
        }
    ],
    "extension": [
        {
            "url": "https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-MedicationStatementLastIssueDate",
            "valueDateTime": "2004-06-28"
        },
        {
            "url": "https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-Prescription-Type",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "https://fhir.graphnethealth.com/CodeSystem-PrescriptionType",
                        "code": "R",
                        "display": "Repeat"
                    }
                ]
            }
        }
    ],
    "identifier": [
        {
            "system": "http://www.e-mis.com/emis/id",
            "value": "B45CA215-6033-4BDC-8A21-1084950BAC8E"
        },
        {
            "system": "http://www.e-mis.com/exa/id",
            "value": "ea53960a-d2fb-5db2-b2e9-2e97a150f9b8"
        }
    ],
    "status": "active",
    "basedOn": [
        {
            "reference": "MedicationRequest/JNQDXHKO4AOVBXREZWELZJZA5A"
        }
    ],
    "medicationReference": {
        "reference": "#med"
    },
    "effectivePeriod": {
        "start": "2004-03-28"
    },
    "dateAsserted": "2004-03-28T00:00:00+00:00",
    "subject": {
        "reference": "Patient/BKR4S3EYB7ZKZYTYAU5DOCHHQY"
    },
    "taken": "unk",
    "dosage": [
        {
            "text": "TAKE ONE DAILY",
            "doseQuantity": {
                "value": 28,
                "unit": "tablet(s)",
                "system": "http://unitsofmeasure.org",
                "code": "tablet(s)"
            }
        }
    ]
}
```

</TabItem>
<TabItem value="xml">

```xml
<MedicationStatement xmlns="http://hl7.org/fhir">
    <id value="JNQDXHKO4AOVBXREZWELZJZA5A" />
    <meta>
        <versionId value="20220922012635751" />
        <lastUpdated value="2022-09-22T13:26:35+00:00" />
        <profile value="https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationStatement" />
        <tag>
            <system value="https://fhir.graphnethealth.com/CodeSystem-Tenancies" />
            <code value="3" />
        </tag>
        <tag>
            <system value="https://fhir.graphnethealth.com/CodeSystem-TenancyType" />
            <code value="EMIS" />
        </tag>
    </meta>
    <contained>
        <Medication>
            <id value="med" />
            <meta>
                <profile value="https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Medication-1" />
            </meta>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="317971007" />
                    <display value="Furosemide 20mg tablets" />
                </coding>
                <text value="Furosemide 20mg tablets" />
            </code>
        </Medication>
    </contained>
    <extension url="https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-MedicationStatementLastIssueDate">
        <valueDateTime value="2004-06-28" />
    </extension>
    <extension url="https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-Prescription-Type">
        <valueCodeableConcept>
            <coding>
                <system value="https://fhir.graphnethealth.com/CodeSystem-PrescriptionType" />
                <code value="R" />
                <display value="Repeat" />
            </coding>
        </valueCodeableConcept>
    </extension>
    <identifier>
        <system value="http://www.e-mis.com/emis/id" />
        <value value="B45CA215-6033-4BDC-8A21-1084950BAC8E" />
    </identifier>
    <identifier>
        <system value="http://www.e-mis.com/exa/id" />
        <value value="ea53960a-d2fb-5db2-b2e9-2e97a150f9b8" />
    </identifier>
    <basedOn>
        <reference value="MedicationRequest/JNQDXHKO4AOVBXREZWELZJZA5A" />
    </basedOn>
    <status value="active" />
    <medicationReference>
        <reference value="#med" />
    </medicationReference>
    <effectivePeriod>
        <start value="2004-03-28" />
    </effectivePeriod>
    <dateAsserted value="2004-03-28T00:00:00+00:00" />
    <subject>
        <reference value="Patient/BKR4S3EYB7ZKZYTYAU5DOCHHQY" />
    </subject>
    <taken value="unk" />
    <dosage>
        <text value="TAKE ONE DAILY" />
        <doseQuantity>
            <value value="28" />
            <unit value="tablet(s)" />
            <system value="http://unitsofmeasure.org" />
            <code value="tablet(s)" />
        </doseQuantity>
    </dosage>
</MedicationStatement>
```

</TabItem>
</Tabs>
