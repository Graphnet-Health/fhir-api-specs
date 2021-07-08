---
id: apiQuestionnaireResponse
title: GET QuestionnaireResponse
sidebar_label: GET QuestionnaireResponse
---

## Overview

The **QuestionnaireResponse** API can be used to interact with QuestionnaireResponse records for a patient. When querying for data it must always be in the context of a single patient.

`QuestionnaireResponse` records can be created, updated, queried and deleted using this API.

- Retrieving or searching for `QuestionnaireResponse` records is performed using a HTTP GET described below.
- Adding new `QuestionnaireResponse` records is performed using a [HTTP POST](apiQuestionnaireResponsePOST)
- Updating existing `QuestionnaireResponse` records is performed using a [HTTP PUT](apiQuestionnaireResponsePUT)
- Deleting existing `QuestionnaireResponse` records is performed using a [HTTP DELETE](apiQuestionnaireResponseDELETE)

## QuestionnaireResponse Retrieval

### id and \_id

The `QuestionnaireResponse` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `QuestionnaireResponse` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /QuestionnaireResponse/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `QuestionnaireResponse` resource, otherwise the `Bundle` will be empty.

```http
GET /QuestionnaireResponse?_id={id}
```

## Query Parameters

Unless retrieving a `QuestionnaireResponse` resource by the use of `id` then the `subject` must always be present. The `QuestionnaireResponse` can only be targeted against a single patient at any one time.

### Subject

```http
GET /QuestionnaireResponse?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number`
For example:

```http
GET /QuestionnaireResponse?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Questionnaire TBC

When searching for `QuestionnaireResponses` with a specific code then the query can be constructed using different combinations of the code system and the code value.

```http
GET /QuestionnaireResponse?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number`
For example:

```http
GET /QuestionnaireResponse?patient=[value]&
```


### Authored

To search on the date a `QuestionnaireResponse` was last changed the following search constructs can be used.

```http
GET /QuestionnaireResponse?patient=[value]&authored=[value]
GET /QuestionnaireResponse?patient=[value]&authored=eq[value]
GET /QuestionnaireResponse?patient=[value]&authored=ne[value]
GET /QuestionnaireResponse?patient=[value]&authored=le[value]
GET /QuestionnaireResponse?patient=[value]&authored=ge[value]
GET /QuestionnaireResponse?patient=[value]&authored=lt[value]
GET /QuestionnaireResponse?patient=[value]&authored=gt[value]
```

So to search for a `QuestionnaireResponse` last changed on 23rd January 2021 the query would be

```http
GET /QuestionnaireResponse?patient=[value]&authored=2021-01-23
```

To search for all `QuestionnaireResponses` changed before the 23rd December 2020, the following could be used

```http
GET /QuestionnaireResponse?patient=[value]&date=lt2020-12-23
```

### Identifiers

To search for `QuestionnaireResponses` using identifiers present on the `QuestionnaireResponse` record, the following can be used

```http
GET /QuestionnaireResponse?patient=[value]&identifier=[code]
GET /QuestionnaireResponse?patient=[value]&identifier=[system]|[code]
GET /QuestionnaireResponse?patient=[value]&identifier=|[code]
GET /QuestionnaireResponse?patient=[value]&identifier=[system]|

```

For example

```http
GET /QuestionnaireResponse?patient=[value]&identifier=http://acme.org/obsdata|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Status

To query on the status of the `QuestionnaireResponse` record, the following can be used.

```http
GET /QuestionnaireResponse?patient={id}&status=[value]
```

For example to query on a `QuestionnaireResponse` with a status of completed the query would be

```http
GET /QuestionnaireResponse?patient={id}&status=completed
```

### \_lastUpdated

To retrieve `QuestionnaireResponses` based on the updated date of the record

```http
GET /QuestionnaireResponse?patient={id}&_lastUpdated={value}
```

<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /QuestionnaireResponse?patient={id}&_summary=count
```

will return a response along the lines of

```javascript
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 15,
    "id": "df23fd8b-d30c-47c6-a2bd-64c8a24b1166"
}
```

This can be added to any query construct.

## Sort Parameters

The default sort order for `QuestionnaireResponse` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date

```http
GET /QuestionnaireResponse?_sort=date
GET /QuestionnaireResponse?_sort=-date
```

## Paging

### \_count

```http
GET /QuestionnaireResponse?patient={id}&status={code}
```

## Examples

Example of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
