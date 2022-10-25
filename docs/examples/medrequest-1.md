---
id: exampleMedicationRequest-1
title: MedicationRequest Example
sidebar_label: MedicationRequest Example
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
    "resource": {
        "resourceType": "MedicationRequest",
        "id": "AFT37PVD3OBOJAQ362ORIPI6CA",
        "meta": {
            "versionId": "20220922012635751",
            "lastUpdated": "2022-09-22T13:26:35+00:00",
            "profile": [
                "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationRequest"
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
                "extension": [
                    {
                        "url": "numberOfRepeatPrescriptionsIssued",
                        "valueInteger": 4
                    },
                    {
                        "url": "authorisationExpiryDate",
                        "valueDateTime": "2004-07-26"
                    }
                ],
                "url": "https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-MedicationRepeatInformation"
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
        "intent": "plan",
        "medicationReference": {
            "reference": "#med"
        },
        "subject": {
            "reference": "Patient/BKR4S3EYB7ZKZYTYAU5DOCHHQY"
        },
        "authoredOn": "2004-03-28",
        "requester": {
            "agent": {
                "display": "Dr Patrick Pump"
            },
            "onBehalfOf": {
                "identifier": {
                    "system": "https://fhir.nhs.uk/Id/ods-organization-code",
                    "value": "GP12345"
                },
                "display": "Low Valley GP Surgery"
            }
        },
        "recorder": {
            "display": "Dr Patrick Pump"
        },
        "dosageInstruction": [
            {
                "text": "TAKE ONE DAILY"
            }
        ],
        "dispenseRequest": {
            "validityPeriod": {
                "start": "2004-03-28"
            },
            "quantity": {
                "value": 28,
                "unit": "tablet(s)",
                "system": "http://unitsofmeasure.org",
                "code": "tablet(s)"
            }
        }
    }
}
```

</TabItem>
<TabItem value="xml">

```xml
<MedicationRequest>
    <id value="AFT37PVD3OBOJAQ362ORIPI6CA" />
    <meta>
        <versionId value="20220922012635751" />
        <lastUpdated value="2022-09-22T13:26:35+00:00" />
        <profile value="https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationRequest" />
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
    <extension url="https://fhir.graphnethealth.com/STU3/StructureDefinition/Extension-MedicationRepeatInformation">
        <extension url="numberOfRepeatPrescriptionsIssued">
            <valueInteger value="4" />
        </extension>
        <extension url="authorisationExpiryDate">
            <valueDateTime value="2004-07-26" />
        </extension>
    </extension>
    <identifier>
        <system value="http://www.e-mis.com/emis/id" />
        <value value="B45CA215-6033-4BDC-8A21-1084950BAC8E" />
    </identifier>
    <identifier>
        <system value="http://www.e-mis.com/exa/id" />
        <value value="ea53960a-d2fb-5db2-b2e9-2e97a150f9b8" />
    </identifier>
    <status value="active"/>
    <intent value="plan" />
    <medicationReference>
        <reference value="#med" />
    </medicationReference>
    <subject>
       <reference value="Patient/BKR4S3EYB7ZKZYTYAU5DOCHHQY" />
     </subject>
    <authoredOn value="2004-03-28" />
    <requester>
        <agent>
            <display value="Dr Patrick Pump"/>
        </agent>
        <onBehalfOf>
            <identifier>
                <system value="https://fhir.nhs.uk/Id/ods-organization-code" />
                <value value="GP12345" />
            </identifier>
            <display value="Low Valley GP Surgery"/>
        </onBehalfOf>
    </requester>
    <recorder>
        <display value="Dr Patrick Pump" />
    </recorder>
    <dosageInstruction>
        <text value="TAKE ONE DAILY" />
    </dosageInstruction>
    <dispenseRequest>
        <validityPeriod>
            <start value="2004-03-28" />
        </validityPeriod>
        <quantity>
            <value value="28" />
            <unit value="tablet(s)" />
            <system value="http://unitsofmeasure.org" />
            <code value="tablet(s)" />
        </quantity>
    </dispenseRequest>
</MedicationRequest>
```

</TabItem>
</Tabs>
