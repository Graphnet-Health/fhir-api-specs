---
id: apiObservation
title: GET Observation
sidebar_label: GET Observation
---

## Overview

The **Observation** API can be used to interact with Observation records for a patient. When querying for data it must always be in the context of a single patient.

<!--`Observation` records can be created, updated, queried and deleted using this API.-->

- Retrieving or searching for `Observation` records is performed using a HTTP GET described below.


## Observation Retrieval

### id and \_id

The `Observation` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `Observation` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /Observation/{id}
```

An alternate method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Observation` resource, otherwise, the `Bundle` will be empty.

```http
GET /Observation?_id={id}
```

## Query Parameters

Unless retrieving an `Observation` resource by the use of `id` the `subject` must always be present. The `Observation` can only be targeted against a single patient at any one time.

### Subject

```http
GET /Observation?patient=Patient/{id}
```

When searching for NHS Numbers use the system `https://fhir.nhs.uk/Id/nhs-number`. For example:

```http
GET /Observation?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `Observations` with a specific code the query can be constructed using different combinations of the code system and the code value.

```http
GET /Observation?patient=[value]&code=[code]
GET /Observation?patient=[value]&code=[system]|[code]
GET /Observation?patient=[value]&code=|[code]
GET /Observation?patient=[value]&code=[system]|
GET /Observation?patient=[value]&code:text=[value]
```

For example to search for a BMI observation using SNOMED then a query would look like the following:

```http
GET /Observation?patient=[value]&code=http://snomed.info/sct|60621009
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

In addition to searching for `Observations` with single codes, it is possible to construct a search using a predefined `ValueSet` that defines a collection of codes.

```http
GET /Observation?patient=[value]&code:in=[ValueSet url]
```

:::note
The `ValueSets` that are available for this function will evolve over time. Speak to Graphnet if you intend to use this capability.
:::

### Date

To search on the date an `Observation` was made the following search constructs can be used.

```http
GET /Observation?patient=[value]&date=[value]
```
To improve searching the API supports the use of search modifiers. The modifiers supported for `date` are as below:

| Modifier | Description                                            |
| :------: | ------------------------------------------------------ |
|  **lt**  | Returns dates less than the search term                |
|  **le**  | Returns dates less than or equal to the search term    |
|  **gt**  | Returns dates greater than the search term             |
|  **ge**  | Returns dates greater than or equal to the search term |
|  **ne**  | Returns dates not equal to the search term             |
|  **eq**  | Returns dates equal to the search term                 |

```http
GET /Observation?patient=[value]&date=lt[value]
GET /Observation?patient=[value]&date=le[value]
GET /Observation?patient=[value]&date=gt[value]
GET /Observation?patient=[value]&date=ge[value]
GET /Observation?patient=[value]&date=ne[value]
GET /Observation?patient=[value]&date=eq[value]
```

So to search for an `Observation` on 23rd January 2021 the query would be:

```http
GET /Observation?patient=[value]&date=2021-01-23
```

To search for all `Observations` before the 23rd December 2020 the query would be:

```http
GET /Observation?patient=[value]&date=lt2020-12-23
```
:::tip

For more information on using FHIR search modifiers for dates, take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#date

:::


### Identifiers

To search for `Observations` using identifiers present on the `Observation` record, the following search constructs can be used.

```http
GET /Observation?patient=[value]&identifier=[code]
GET /Observation?patient=[value]&identifier=[system]|[code]
GET /Observation?patient=[value]&identifier=|[code]
GET /Observation?patient=[value]&identifier=[system]|
```

For example:

```http
GET /Observation?patient=[value]&identifier=http://acme.org/obsdata|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Category

To search for `Observations` classified by type, the following search constructs can be used.

```http
GET /Observation?patient=[value]&category=[code]
GET /Observation?patient=[value]&category=[system]|[code]
GET /Observation?patient=[value]&category=|[code]
GET /Observation?patient=[value]&category=[system]|
```

### Status

The search for `Observations` by status the following construct can be used.

```http
GET /Observation?patient={id}&status=final
```

### Encounter

If the `Observation` record was recorded with information relating to the clinical encounter that it was part of, then it can be retrieved using the `id` of that `Encounter`.

```http
GET /Observation?patient={id}&encounter={id}
```

### \_lastUpdated

To retrieve `Observations` based on the last updated date of the record.

```http
GET /Observation?patient={id}&_lastUpdated={value}
```
To improve searching the API supports the use of search modifiers. The modifiers supported for `date` are as below:

| Modifier | Description                                            |
| :------: | ------------------------------------------------------ |
|  **lt**  | Returns dates less than the search term                |
|  **le**  | Returns dates less than or equal to the search term    |
|  **gt**  | Returns dates greater than the search term             |
|  **ge**  | Returns dates greater than or equal to the search term |
|  **ne**  | Returns dates not equal to the search term             |
|  **eq**  | Returns dates equal to the search term                 |

```http
GET /Observation?patient=[value]&_lastUpdated=lt[value]
GET /Observation?patient=[value]&_lastUpdated=le[value]
GET /Observation?patient=[value]&_lastUpdated=gt[value]
GET /Observation?patient=[value]&_lastUpdated=ge[value]
GET /Observation?patient=[value]&_lastUpdated=ne[value]
GET /Observation?patient=[value]&_lastUpdated=eq[value]
```

So to search for an `Observation` last updated on 23rd January 2021 the query would be:

```http
GET /Observation?patient=[value]&_lastUpdated=2021-01-23
```

To search for all `Observations` last updated before the 23rd December 2020 the query would be:

```http
GET /Observation?patient=[value]&_lastUpdated=lt2020-12-23
```
<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /Observation?patient={id}&_summary=count
```

This will return a response like:

```javascript
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 15,
    "id": "df23fd8b-d30c-47c6-a2bd-64c8a24b1166"
}
```

This can be added to any query construct.

### \_format
The API supports both XML and JSON formats. The default format is JSON. The format can be requested either using HTTP headers or via the use of the _format query parameter as per the following table. 

| Format Value            | API Response Format |
| ----------------------- | :------------------:|
|  xml                    | XML                 |
|  text/xml               | XML                 |
|  application/xml        | XML                 |
|  application/fhir+xml   | XML                 |
|  json                   | JSON                |
|  text/json              | JSON                |
|  application/json       | JSON                |
|  application/fhir+json  | JSON                |

```http
GET /Observation?patient={id}&_format=[format value]
```
For example the query below would return a response in XML format.

```http
GET /Observation?patient={id}&_format=xml
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
The parameter `_count` is defined as a hint to the server regarding how many resources should be returned in a single page.

For example the query below would return a `Bundle` with 5 records per page.

```http
GET /Observation?patient={id}&status={code}&_count=5
```

## Examples

Examples of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
