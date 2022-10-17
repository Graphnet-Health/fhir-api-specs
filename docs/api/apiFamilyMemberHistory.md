---
id: apiFamilyMemberHistory
title: GET FamilyMemberHistory
sidebar_label: GET FamilyMemberHistory
---

## Overview

The **FamilyMemberHistory** API can be used to interact with Family History records for a patient. When querying for data it must always be in the context of a single patient.

`FamilyMemberHistory` records can be queried using this API.

- Retrieving or searching for `FamilyMemberHistory` records is performed using a HTTP GET described below

## FamilyMemberHistory Retrieval

### id and \_id

The `FamilyMemberHistory` resource can be retrieved directly if the `id` of the resource is known. Appending the `id` to the url will cause the `FamilyMemberHistory` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /FamilyMemberHistory/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `FamilyMemberHistory` resource, otherwise the `Bundle` will be empty.

```http
GET /FamilyMemberHistory?_id={id}
```

## Query Parameters

Unless retrieving a `FamilyMemberHistory` resource by the use of `id` the `subject` must always be present. The `FamilyMemberHistory` can only be targetted against a single patient at any one time.

### Subject

```http
GET /FamilyMemberHistory?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number` for example:

```http
GET /FamilyMemberHistory?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `FamilyMemberHistory` with a specific code the query can be constructed using different combinations of the code system and the code value.

```http
GET /FamilyMemberHistory?patient=[value]&code=[code]
GET /FamilyMemberHistory?patient=[value]&code=[system]|[code]
GET /FamilyMemberHistory?patient=[value]&code=|[code]
GET /FamilyMemberHistory?patient=[value]&code=[system]|
GET /FamilyMemberHistory?patient=[value]&code:text=[value]
```

For example to search for a family history of Hypertension using SNOMED would look like the following:

```http
GET /FamilyMemberHistory?patient=[value]&code=http://snomed.info/sct|160357008
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Date

To search on the date a `FamilyMemberHistory` was asserted the following search constructs can be used.

```http
GET /FamilyMemberHistory?patient=[value]&date=[value]
GET /FamilyMemberHistory?patient=[value]&date=eq[value]
GET /FamilyMemberHistory?patient=[value]&date=ne[value]
GET /FamilyMemberHistory?patient=[value]&date=le[value]
GET /FamilyMemberHistory?patient=[value]&date=ge[value]
GET /FamilyMemberHistory?patient=[value]&date=lt[value]
GET /FamilyMemberHistory?patient=[value]&date=gt[value]
```

To search for an `FamilyMemberHistory` asserted on 23rd January 2021 the query would be:

```http
GET /FamilyMemberHistory?patient=[value]&date=2021-01-23
```

To search for all `FamilyMemberHistory` asserted before the 23rd December 2020 the query would be:

```http
GET /FamilyMemberHistory?patient=[value]&date=lt2020-12-23
```

### Identifiers

To search for `FamilyMemberHistory` using identifiers present on the `FamilyMemberHistory` record the following search constructs can be used.

```http
GET /FamilyMemberHistory?patient=[value]&identifier=[code]
GET /FamilyMemberHistory?patient=[value]&identifier=[system]|[code]
GET /FamilyMemberHistory?patient=[value]&identifier=|[code]
GET /FamilyMemberHistory?patient=[value]&identifier=[system]|
```

For example:

```http
GET /FamilyMemberHistory?patient=[value]&identifier=http://acme.org/data|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Status

To search for `FamilyMemberHistory` using the status of the record.

```http
GET /FamilyMemberHistory?patient=[value]&status=[code]
```

For example:

```http
GET /FamilyMemberHistory?patient=[value]&status=completed
```

:::info
Currently all records within Graphnet have a status of 'completed"
:::

### \_lastUpdated

To retrieve `FamilyMemberHistory` based on the updated date of the record

```http
GET /FamilyMemberHistory?patient={id}&_lastUpdated={value}
```

<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /FamilyMemberHistory?patient={id}&_summary=count
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

The default sort order for `FamilyMemberHistory` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date

```http
GET /FamilyMemberHistory?_sort=date
GET /FamilyMemberHistory?_sort=-date
```

## Paging

### \_count

```http
GET /FamilyMemberHistory?patient={id}&_count
```

## Examples

Example of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
