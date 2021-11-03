---
id: exampleFlag-1
title: Flag Example
sidebar_label: Flag Example
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
    "resourceType": "Flag",
    "id": "986DFDFFDGTDINHYGEI9IK",
    "meta": {
        "versionId": "20211103123000",
        "lastUpdated": "2021-11-03T00:00:00+00:00",
        "profile": [
            "https://fhir.graphnethealth.com/STU3/StructureDefinition-Flag"
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
            "value": "12345-878787"
        }
    ],
    "status": "active",
    "category": {
        "text": "Alert"
    },
    "code": {
        "coding": [
            {
                "system": "https://fhir.graphnethealth.com/CodeSystem-ChildSocialCareCode",
                "code": "CC-CP123456",
                "display": "Child Protection"
            }
        ],
        "text": "Child Protection"
    },
    "subject": {
        "reference": "Patient/999991239"
    },
    "period": {
        "start": "2021-07-22T10:27:30+00:00"
    },
    "author": {
        "display": "Mr A Another"
    }
}
```

</TabItem>
<TabItem value="xml">

```xml
<Flag xmlns="http://hl7.org/fhir">
    <id value="986DFDFFDGTDINHYGEI9IK" />
    <meta>
        <versionId value="20211103123000" />
        <lastUpdated value="2021-11-03T00:00:00+00:00" />
        <profile value="https://fhir.graphnethealth.com/STU3/StructureDefinition-Flag" />
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
        <value value="12345-878787" />
    </identifier>
    <status value="active" />
    <category>
        <text value="Alert" />
    </category>
    <code>
        <coding>
            <system value="https://fhir.graphnethealth.com/CodeSystem-ChildSocialCareCode" />
            <code value="CC-CP123456" />
            <display value="Child Protection" />
        </coding>
        <text value="Child Protection" />
    </code>
    <subject>
        <reference value="Patient/999991239" />
    </subject>
    <period>
        <start value="2021-07-22T10:27:30+00:00" />
    </period>
    <author>
        <display value="Mr A Another" />
    </author>
</Flag>
```

</TabItem>
</Tabs>
