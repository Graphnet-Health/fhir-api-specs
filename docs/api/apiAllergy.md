---
id: apiAllergyIntolerance
title: GET AllergyIntolerance
sidebar_label: GET AllergyIntolerance
---

## Overview

The **AllergyIntolerance** API can be used to interact with Allergy Intolerance records for a patient. When querying for data it must always be in the context of a single patient.

`AllergyIntolerance` records can be created, updated, queried and deleted using this API.

- Retrieving or searching for `AllergyIntolerance` records is performed using a HTTP GET described below
- Adding new `AllergyIntolerance` records is performed using a [HTTP POST](apiAllergyIntolerancePOST)
- Updating existing `AllergyIntolerance` records is performed using a [HTTP PUT](apiAllergyIntolerancePUT)
- Deleting existing `AllergyIntolerance` records is performed using a [HTTP DELETE](apiAllergyIntoleranceDELETE)

## AllergyIntolerance Retrieval

### id and \_id

The `AllergyIntolerance` resource can be retrieved directly if the `id` of the resource is known. Appending the `id` to the url will cause the `AllergyIntolerance` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /AllergyIntolerance/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `AllergyIntolerance` resource, otherwise the `Bundle` will be empty.

```http
GET /AllergyIntolerance?_id={id}
```

## Query Parameters

Unless retrieving an `AllergyIntolerance` resource by the use of `id` the `subject` must always be present. The `AllergyIntolerance` can only be targetted against a single patient at any one time.

### Subject

```http
GET /AllergyIntolerance?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number` for example:

```http
GET /AllergyIntolerance?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `AllergyIntolerances` with a specific code the query can be constructed using different combinations of the code system and the code value.

```http
GET /AllergyIntolerance?patient=[value]&code=[code]
GET /AllergyIntolerance?patient=[value]&code=[system]|[code]
GET /AllergyIntolerance?patient=[value]&code=|[code]
GET /AllergyIntolerance?patient=[value]&code=[system]|
GET /AllergyIntolerance?patient=[value]&code:text=[value]
```

For example to search for a Peanut Allergy Intolerance using SNOMED would look like the following:

```http
GET /AllergyIntolerance?patient=[value]&code=http://snomed.info/sct|762952008
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Date

To search on the date an `AllergyIntolerance` was asserted the following search constructs can be used.

```http
GET /AllergyIntolerance?patient=[value]&date=[value]
GET /AllergyIntolerance?patient=[value]&date=eq[value]
GET /AllergyIntolerance?patient=[value]&date=ne[value]
GET /AllergyIntolerance?patient=[value]&date=le[value]
GET /AllergyIntolerance?patient=[value]&date=ge[value]
GET /AllergyIntolerance?patient=[value]&date=lt[value]
GET /AllergyIntolerance?patient=[value]&date=gt[value]
```

To search for an `AllergyIntolerance` asserted on 23rd January 2021 the query would be:

```http
GET /AllergyIntolerance?patient=[value]&date=2021-01-23
```

To search for all `AllergyIntolerances` asserted before the 23rd December 2020 the query would be:

```http
GET /AllergyIntolerance?patient=[value]&date=lt2020-12-23
```

### Identifiers

To search for `AllergyIntolerances` using identifiers present on the `AllergyIntolerance` record the following search constructs can be used.

```http
GET /AllergyIntolerance?patient=[value]&identifier=[code]
GET /AllergyIntolerance?patient=[value]&identifier=[system]|[code]
GET /AllergyIntolerance?patient=[value]&identifier=|[code]
GET /AllergyIntolerance?patient=[value]&identifier=[system]|
```

For example:

```http
GET /AllergyIntolerance?patient=[value]&identifier=http://acme.org/allergydata|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### \_lastUpdated

To retrieve `AllergyIntolerances` based on the updated date of the record

```http
GET /AllergyIntolerance?patient={id}&_lastUpdated={value}
```

<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /AllergyIntolerance?patient={id}&_summary=count
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

The default sort order for `AllergyIntolerance` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date

```http
GET /AllergyIntolerance?_sort=date
GET /AllergyIntolerance?_sort=-date
```

## Paging

### \_count

```http
GET /AllergyIntolerance?patient={id}&_count
```

## Examples

Example of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
