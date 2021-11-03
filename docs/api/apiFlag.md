---
id: apiFlag
title: GET Flag
sidebar_label: GET Flag
---

## Overview

The **Flag** API can be used to interact with Alert records for a patient. When querying for data it must always be in the context of a single patient.

`Flag` records can be created, updated, queried and deleted using this API.

- Retrieving or searching for `Flag` records is performed using a HTTP GET described below
- Adding new `Flag` records is performed using a [HTTP POST](apiFlagPOST)
- Updating existing `Flag` records is performed using a [HTTP PUT](apiFlagPUT)
- Deleting existing `Flag` records is performed using a [HTTP DELETE](apiFlagDELETE)

## Flag Retrieval

### id and \_id

The `Flag` resource can be retrieved directly if the `id` of the resource is known. Appending the `id` to the url will cause the `Flag` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /Flag/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Flag` resource, otherwise the `Bundle` will be empty.

```http
GET /Flag?_id={id}
```

## Query Parameters

Unless retrieving a `Flag` resource by the use of `id` the `subject` must always be present. The `Flag` can only be targetted against a single patient at any one time.

### Subject

```http
GET /Flag?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number` for example:

```http
GET /Flag?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `Flags` with a specific code the query can be constructed using different combinations of the code system and the code value.

```http
GET /Flag?patient=[value]&code=[code]
GET /Flag?patient=[value]&code=[system]|[code]
GET /Flag?patient=[value]&code=|[code]
GET /Flag?patient=[value]&code=[system]|
GET /Flag?patient=[value]&code:text=[value]
```

For example to search for a Food Allergy Flag would look like the following:

```http
GET /Flag?patient=[value]&code=TBC
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Category

When searching for `Flags` with a specific code the query can be constructed using different combinations of the code system and the code value.

```http
GET /Flag?patient=[value]&category=[code]
GET /Flag?patient=[value]&category=[system]|[code]
GET /Flag?patient=[value]&category=|[code]
GET /Flag?patient=[value]&category=[system]|
GET /Flag?patient=[value]&category:text=[value]
```

For example to search for a Patient Safety Flag using text would look like the following:

```http
GET /Flag?patient=[value]&category:text="Patient Safety"
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Date

To search on the time period a `Flag` is active the following search constructs can be used.

```http
GET /Flag?patient=[value]&date=[value]
GET /Flag?patient=[value]&date=eq[value]
GET /Flag?patient=[value]&date=ne[value]
GET /Flag?patient=[value]&date=le[value]
GET /Flag?patient=[value]&date=ge[value]
GET /Flag?patient=[value]&date=lt[value]
GET /Flag?patient=[value]&date=gt[value]
```

To search for a `Flag` active on 23rd January 2021 the query would be:

```http
GET /Flag?patient=[value]&date=2021-01-23
```

To search for all `Flags` asserted before the 23rd December 2020 the query would be:

```http
GET /Flag?patient=[value]&date=lt2020-12-23
```

### Identifiers

To search for `Flags` using identifiers present on the `Flag` record the following search constructs can be used.

```http
GET /Flag?patient=[value]&identifier=[code]
GET /Flag?patient=[value]&identifier=[system]|[code]
GET /Flag?patient=[value]&identifier=|[code]
GET /Flag?patient=[value]&identifier=[system]|
```

For example:

```http
GET /Flag?patient=[value]&identifier=http://acme.org/allergydata|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### \_lastUpdated

To retrieve `Flags` based on the updated date of the record

```http
GET /Flag?patient={id}&_lastUpdated={value}
```

<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /Flag?patient={id}&_summary=count
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

The default sort order for `Flag` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date

```http
GET /Flag?_sort=date
GET /Flag?_sort=-date
```

## Paging

### \_count

```http
GET /Flag?patient={id}&_count
```

## Examples

Example of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
