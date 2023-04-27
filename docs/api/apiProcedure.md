---
id: apiProcedure
title: GET Procedure
sidebar_label: GET Procedure
---

## Overview

The **Procedure** API can be used to interact with Procedure records for a patient. When querying for data it must always be in the context of a single patient.

<!--`Procedure` records can be created, updated, queried and deleted using this API.-->

- Retrieving or searching for `Procedure` records is performed using a HTTP GET described below.


## Procedure Retrieval

### id and \_id

The `Procedure` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `Procedure` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /Procedure/{id}
```

An alternate method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Procedure` resource, otherwise, the `Bundle` will be empty.

```http
GET /Procedure?_id={id}
```

## Query Parameters

Unless retrieving a `Procedure` resource by the use of `id` the `subject` must always be present. The `Procedure` can only be targeted against a single patient at any one time.

### Subject

```http
GET /Procedure?patient=Patient/{id}
```

When searching for NHS Numbers use the system `https://fhir.nhs.uk/Id/nhs-number`. For example:

```http
GET /Procedure?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `Procedures` with a specific code the query can be constructed using different combinations of the code system and the code value.

```http
GET /Procedure?patient=[value]&code=[code]
GET /Procedure?patient=[value]&code=[system]|[code]
GET /Procedure?patient=[value]&code=[system]|
```

For example to search for a Colonoscopy Procedure using SNOMED then a query would look like the following:

```http
GET /Procedure?patient=[value]&code=http://snomed.info/sct|73761001
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

In addition to searching for `Procedures` with single codes, it is possible to construct a search using a predefined `ValueSet` that defines a collection of codes.

```http
GET /Procedure?patient=[value]&code:in=[ValueSet url]
```

:::note
The `ValueSets` that are available for this function will evolve over time. Speak to Graphnet if you intend to use this capability.
:::

### Date

To search on the date a `Procedure` was performed the following search constructs can be used.

```http
GET /Procedure?patient=[value]&date=[value]
```
To improve searching the API supports the use of search modifiers. The modifiers supported for `date` are as below:

| Modifier | Description                                            |
| :------: | ------------------------------------------------------ |
|  **lt**  | Returns dates less than the search term                |
|  **le**  | Returns dates less than or equal to the search term    |
|  **gt**  | Returns dates greater than the search term             |
|  **ge**  | Returns dates greater than or equal to the search term |
|  **eq**  | Returns dates equal to the search term                 |

```http
GET /Procedure?patient=[value]&date=lt[value]
GET /Procedure?patient=[value]&date=le[value]
GET /Procedure?patient=[value]&date=gt[value]
GET /Procedure?patient=[value]&date=ge[value]
GET /Procedure?patient=[value]&date=eq[value]
```

So to search for a `Procedure` performed on 23rd January 2021 the query would be:

```http
GET /Procedure?patient=[value]&date=2021-01-23
```

To search for all `Procedures` performed before the 23rd December 2020 the query would be:

```http
GET /Procedure?patient=[value]&date=lt2020-12-23
```
:::tip

For more information on using FHIR search modifiers for dates, take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#date

:::

### Identifiers

To search for `Procedures` using identifiers present on the `Procedure` record, the following search constructs can be used.

```http
GET /Procedure?patient=[value]&identifier=[system]|[code]
```

For example:

```http
GET /Procedure?patient=[value]&identifier=http://acme.org/Proceduredata|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Category

To search for `Procedures` classified by type, the following search constructs can be used.

```http
GET /Procedure?patient=[value]&category=[code]
GET /Procedure?patient=[value]&category=[system]|[code]
GET /Procedure?patient=[value]&category=[system]|
```

### Status

The search for `Procedures` by status the following construct can be used.

```http
GET /Procedure?patient={id}&status=completed
```

### \_lastUpdated

To retrieve `Procedures` based on the last updated date of the record.

```http
GET /Procedure?patient={id}&_lastUpdated={value}
```
To improve searching the API supports the use of search modifiers. The modifiers supported for `date` are as below:

| Modifier | Description                                            |
| :------: | ------------------------------------------------------ |
|  **lt**  | Returns dates less than the search term                |
|  **le**  | Returns dates less than or equal to the search term    |
|  **gt**  | Returns dates greater than the search term             |
|  **ge**  | Returns dates greater than or equal to the search term |
|  **eq**  | Returns dates equal to the search term                 |

```http
GET /Procedure?patient=[value]&_lastUpdated=lt[value]
GET /Procedure?patient=[value]&_lastUpdated=le[value]
GET /Procedure?patient=[value]&_lastUpdated=gt[value]
GET /Procedure?patient=[value]&_lastUpdated=ge[value]
GET /Procedure?patient=[value]&_lastUpdated=eq[value]
```

So to search for a `Procedure` last updated on 23rd January 2021 the query would be:

```http
GET /Procedure?patient=[value]&_lastUpdated=2021-01-23
```

To search for all `Procedures` last updated before the 23rd December 2020 the query would be:

```http
GET /Procedure?patient=[value]&_lastUpdated=lt2020-12-23
```

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /Procedure?patient={id}&_summary=count
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
GET /Procedure?patient={id}&_format=[format value]
```
For example the query below would return a response in XML format.

```http
GET /Procedure?patient={id}&_format=xml
```

This can be added to any query construct.

## Sort Parameters

The default sort order for `Procedure` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date

```http
GET /Procedure?_sort=date
GET /Procedure?_sort=-date
```

## Paging

### \_count
The parameter `_count` is defined as a hint to the server regarding how many resources should be returned in a single page.

```http
GET /Procedure?patient={id}&status={code}&_count=[n]
```

For example the query below would return a `Bundle` with 5 records per page.

```http
GET /Procedure?patient={id}&status={code}&_count=5
```

## Examples

Examples of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
