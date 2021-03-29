---
id: apiObservation
title: GET Observation
sidebar_label: GET Observation
---

## Overview

The **Observation** API can be used to interactwith observation records for a patient. When querying for data it must always be in the context of a single patient.

`Observation` records can be created, updated, queried and deleted using this API.

- Retrieving of searching for `Observation` records is performed using a HTTP GET described below.
- Adding new `Observation` records is performed using a [HTTP POST](apiObservationPOST)
- Updating existing `Observation` records is performed using a [HTTP PUT](apiObservationPUT)
- Deleting existing `Observation` records is performed using a [HTTP DELETE](apiObservationDELETE)

## Observation Retrieval

### id and \_id

The `Observation` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `Observation` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`

```http
GET /Observation/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Observation` resource, otherwise, the `Bundle` will be empty.

```http
GET /Observation?_id={id}
```

## Query Parameters

Unless retrieving an `Observation` resource by the use of `id` then the `subject` must always be present. The `Observation` can only be targetted against a single patient at any one time.

### Subject

```http
GET /Observation?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number`
For example

```http
GET /Observation?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `Observations` with a specific code then the query can be constructed using different combinations of the code system and the code value.

```http
GET /Observation?patient=[value]&code=[code]
GET /Observation?patient=[value]&code=[system]|[code]
GET /Observation?patient=[value]&code=|[code]
GET /Observation?patient=[value]&code=[system]|
GET /Observation?patient=[value]&code:text=[value]
```

For example to search for a BMI observation using SNOMED then a query would look like the following.

```http
GET /Observation?patient=[value]&code=http://snomed.info/sct|60621009
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

In addition to searching for `Observations` with single codes, it is possible to construct a search using a predefined `ValueSet` that defines a collection of codes.

```http
GET /Observation?patient=[value]&code:in=[value set url]
```

:::note
The `ValueSets` that are available for this functionality will evolve over time. Speak to Graphnet if you intended to use this capability.
:::

### Date

To search on the date an `Observation` was made the following search constructs can be used.

```http
GET /Observation?patient=[value]&date=[value]
GET /Observation?patient=[value]&date=eq[value]
GET /Observation?patient=[value]&date=ne[value]
GET /Observation?patient=[value]&date=le[value]
GET /Observation?patient=[value]&date=ge[value]
GET /Observation?patient=[value]&date=lt[value]
GET /Observation?patient=[value]&date=gt[value]
```

So to search for an `Observation` on 23rd January 2021 the query would be

```http
GET /Observation?patient=[value]&date=2021-01-23
```

To search for all `Observations` before the 23rd December 2020, the following could be used

```http
GET /Observation?patient=[value]&date=lt2020-12-23
```

### Identifiers

To search for `Observations` using identifiers present on the `Observation` record, the following can be used

```http
GET /Observation?patient=[value]&identifier=[code]
GET /Observation?patient=[value]&identifier=[system]|[code]
GET /Observation?patient=[value]&identifier=|[code]
GET /Observation?patient=[value]&identifier=[system]|

```

For example

```http
GET /Observation?patient=[value]&identifier=http://acme.org/obsdata|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Status

The `Observation` FHIR query currently only accepts records with a status of `final`. The search parameter is a placeholder for future developments.

```http
GET /Observation?patient={id}&status=final
```

### Encounter

If the `Observation` record was recorded with information relating to the clinical encounter that it was part of, then it can be retrieved using the `id` of that `Encounter`.

```http
GET /Observation?patient={id}&encounter={id}
```

### \_lastUpdated

To retrieve `Observations` based on the updated date of the record

```http
GET /Observation?patient={id}&_lastUpdated={value}
```

<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /Observation?patient={id}&_summary=count
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

The default sort order for `Observation` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date

```http
GET /Observation?_sort=date
GET /Observation?_sort=-date
```

## Paging

### \_count

```http
GET /Observation?patient={id}&status={code}
```

## Examples

Example of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
