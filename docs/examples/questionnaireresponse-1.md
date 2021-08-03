---
id: exampleQuestionnaireResponse-1
title: QuestionnaireResponse Example
sidebar_label: QuestionnaireResponse Example
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
  "resourceType": "QuestionnaireResponse",
  "id": "637FHDFFDGTDINHYGEI9IK",
  "meta": {
    "versionId": "20210601120000",
    "lastUpdated": "2021-06-01T00:00:00+00:00",
    "profile": [
      "https://fhir.graphnethealth.com/STU3/StructureDefinition-QuestionnaireResponse"
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
  "questionnaire": {
    "reference": "https://domain.com/covid-19-vaccination-experience"
  },
  "status": "completed",
  "authored": "2021-07-22T10:27:30+00:00",
  "item": [
    {
      "linkId": "1",
      "text": "Encounter Details",
      "item": [
        {
          "linkId": "1-1",
          "text": "Please select the location of your vaccination",
          "answer": {
            "valueCoding": {
              "system": "http://domain.com/vaccinationcentre",
              "code": "ERS",
              "display": "Elland Road Stadium"
            }
          }
        },
        {
          "linkId": "1-2",
          "text": "What was the date of your visit?",
          "answer": [
            {
              "valueDate": "2021-01-13"
            }
          ]
        }
      ]
    },
    {
      "linkId": "2",
      "text": "Survey",
      "item": [
        {
          "linkId": "2-1",
          "text": "Thinking about your visit, overall how was your experience of our service?",
          "answer": {
            "valueCoding": {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                  "valueDecimal": 5
                }
              ],
              "system": "http://domain.com/experience",
              "code": "VG",
              "display": "Very Good"
            }
          }
        },
        {
          "linkId": "2-2",
          "text": "In relation to the environment, social distancing and hand sanitising did you feel safe uring your visit?",
          "answer": {
            "valueCoding": {
              "system": "http://hl7.org/fhir/v2/0136",
              "code": "Y",
              "display": "Yes"
            }
          }
        },
        {
          "linkId": "2-3",
          "text": "Were you always planning on having the vaccine?",
          "answer": {
            "valueCoding": {
              "system": "http://hl7.org/fhir/v2/0136",
              "code": "Y",
              "display": "Yes"
            }
          }
        }
      ]
    },
    {
      "linkId": "3",
      "text": "Demographics",
      "item": [
        {
          "linkId": "3-1",
          "text": "What is your gender?",
          "answer": {
            "valueCoding": {
              "system": "http://hl7.org/fhir/administrative-gender",
              "code": "male",
              "display": "Male"
            }
          }
        },
        {
          "linkId": "3-2",
          "text": "What is your age?",
          "answer": {
            "valueCoding": {
              "system": "http://domain.com/agegroup",
              "code": "25-34",
              "display": "25-34"
            }
          }
        },
        {
          "linkId": "3-3",
          "text": "What is your ethnicity?",
          "answer": {
            "valueCoding": {
              "system": "https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-EthnicCategory-1",
              "code": "A",
              "display": "British, Mixed British"
            }
          }
        }
      ]
    }
  ]
}
```

</TabItem>
<TabItem value="xml">

```xml
<QuestionnaireResponse xmlns="http://hl7.org/fhir">
    <id value="637FHDFFDGTDINHYGEI9IK" />
    <meta>
        <versionId value="20210601120000" />
        <lastUpdated value="2021-06-01T00:00:00+00:00" />
        <profile value="https://fhir.graphnethealth.com/STU3/StructureDefinition-QuestionnaireResponse" />
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
    <questionnaire>
        <reference value="https://domain.com/covid-19-vaccination-experience" />
    </questionnaire>
    <status value="completed" />
    <authored value="2021-07-22T10:27:30+00:00" />
    <item>
        <linkId value="1" />
        <text value="Encounter Details" />
        <item>
            <linkId value="1-1" />
            <text value="Please select the location of your vaccination" />
            <answer>
                <valueCoding>
                    <system value="http://domain.com/vaccinationcentre" />
                    <code value="ERS" />
                    <display value="Elland Road Stadium" />
                </valueCoding>
            </answer>
        </item>
        <item>
            <linkId value="1-2" />
            <text value="What was the date of your visit?" />
            <answer>
                <valueDate value="2021-01-13" />
            </answer>
        </item>
    </item>
    <item>
        <linkId value="2" />
        <text value="Survey" />
        <item>
            <linkId value="2-1" />
            <text value="Thinking about your visit, overall how was your experience of our service?" />
            <answer>
                <valueCoding>
                    <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-CO-value">
                        <valueDecimal value="5" />
                    </extension>
                    <system value="http://domain.com/experience" />
                    <code value="VG" />
                    <display value="Very Good" />
                </valueCoding>
            </answer>
        </item>
        <item>
            <linkId value="2-2" />
            <text value="In relation to the environment, social distancing and hand sanitising did you feel safe uring your visit?" />
            <answer>
                <valueCoding>
                    <system value="http://hl7.org/fhir/v2/0136" />
                    <code value="Y" />
                    <display value="Yes" />
                </valueCoding>
            </answer>
        </item>
        <item>
            <linkId value="2-3" />
            <text value="Were you always planning on having the vaccine?" />
            <answer>
                <valueCoding>
                    <system value="http://hl7.org/fhir/v2/0136" />
                    <code value="Y" />
                    <display value="Yes" />
                </valueCoding>
            </answer>
        </item>
    </item>
    <item>
        <linkId value="3" />
        <text value="Demographics" />
        <item>
            <linkId value="3-1" />
            <text value="What is your gender?" />
            <answer>
                <valueCoding>
                    <system value="http://hl7.org/fhir/administrative-gender" />
                    <code value="male" />
                    <display value="Male" />
                </valueCoding>
            </answer>
        </item>
        <item>
            <linkId value="3-2" />
            <text value="What is your age?" />
            <answer>
                <valueCoding>
                    <system value="http://domain.com/agegroup" />
                    <code value="25-34" />
                    <display value="25-34" />
                </valueCoding>
            </answer>
        </item>
        <item>
            <linkId value="3-3" />
            <text value="What is your ethnicity?" />
            <answer>
                <valueCoding>
                    <system value="https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-EthnicCategory-1" />
                    <code value="A" />
                    <display value="British, Mixed British" />
                </valueCoding>
            </answer>
        </item>
    </item>
</QuestionnaireResponse>
```

</TabItem>
</Tabs>
