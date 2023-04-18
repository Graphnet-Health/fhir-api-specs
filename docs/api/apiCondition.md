---
id: apiCondition
title: GET Condition
sidebar_label: GET Condition
---

## Overview

The **Condition** API can be used to interact with Condition records for a patient. When querying for data it must always be in the context of a single patient.

<!--`Condition` records can be created, updated, queried and deleted using this API.-->

- Retrieving or searching for `Condition` records is performed using a HTTP GET described below.

:::info
The **Condition** API supports Clinical items only. Other items such as GP Problems will be added in a later release.
:::

## Condition Retrieval

### id and \_id

The `Condition` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `Condition` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /Condition/{id}
```

An alternate method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Condition` resource, otherwise, the `Bundle` will be empty.

```http
GET /Condition?_id={id}
```

## Query Parameters

Unless retrieving a `Condition` resource by the use of `id` the `subject` must always be present. The `Condition` can only be targeted against a single patient at any one time.

### Subject

```http
GET /Condition?patient=Patient/{id}
```

When searching for NHS Numbers use the system `https://fhir.nhs.uk/Id/nhs-number`. For example:

```http
GET /Condition?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `Conditions` with a specific code the query can be constructed using different combinations of the code system and the code value.

```http
GET /Condition?patient=[value]&code=[code]
GET /Condition?patient=[value]&code=[system]|[code]
GET /Condition?patient=[value]&code=[system]|
```

For example to search for a Condition of Chronic heart disease using SNOMED then a query would look like the following:

```http
GET /Condition?patient=[value]&code=http://snomed.info/sct|128238001
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

In addition to searching for `Conditions` with single codes, it is possible to construct a search using a predefined `ValueSet` that defines a collection of codes.

```http
GET /Condition?patient=[value]&code:in=[ValueSet url]
```

:::note
The `ValueSets` that are available for this function will evolve over time. Speak to Graphnet if you intend to use this capability.
:::

### Onset Date

To search on the date of onset of a `Condition` the following search constructs can be used.

```http
GET /Condition?patient=[value]&onset-date=[value]
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
GET /Condition?patient=[value]&onset-date=lt[value]
GET /Condition?patient=[value]&onset-date=le[value]
GET /Condition?patient=[value]&onset-date=gt[value]
GET /Condition?patient=[value]&onset-date=ge[value]
GET /Condition?patient=[value]&onset-date=eq[value]
```

So to search for a `Condition` with an onset date of 23rd January 2021 the query would be:

```http
GET /Condition?patient=[value]&onset-date=2021-01-23
```

To search for all `Conditions` with an onset date before the 23rd December 2020 the query would be:

```http
GET /Condition?patient=[value]&onset-date=lt2020-12-23
```
:::tip

For more information on using FHIR search modifiers for dates, take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#date

:::

### Asserted Date

To search on the date a `Condition` was asserted the following search constructs can be used.

```http
GET /Condition?patient=[value]&asserted-date=[value]
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
GET /Condition?patient=[value]&asserted-date=lt[value]
GET /Condition?patient=[value]&asserted-date=le[value]
GET /Condition?patient=[value]&asserted-date=gt[value]
GET /Condition?patient=[value]&asserted-date=ge[value]
GET /Condition?patient=[value]&asserted-date=eq[value]
```

So to search for a `Condition` with an asserted date of 23rd January 2021 the query would be:

```http
GET /Condition?patient=[value]&asserted-date=2021-01-23
```

To search for all `Conditions` with an asserted date before the 23rd December 2020 the query would be:

```http
GET /Condition?patient=[value]&asserted-date=lt2020-12-23
```
:::tip

For more information on using FHIR search modifiers for dates, take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#date

:::

### Identifiers

To search for `Conditions` using identifiers present on the `Condition` record, the following search constructs can be used.

```http
GET /Condition?patient=[value]&identifier=[system]|[code]
```

For example:

```http
GET /Condition?patient=[value]&identifier=http://acme.org/conditiondata|21323-123213
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Category

To search for `Conditions` classified by type, the following search constructs can be used.

```http
GET /Condition?patient=[value]&category=[code]
GET /Condition?patient=[value]&category=[system]|[code]
GET /Condition?patient=[value]&category=[system]|
```

### Clinical Status

The search for `Conditions` by clinical status the following construct can be used.

```http
GET /Condition?patient={id}&clinical-status=active
```

### \_lastUpdated

To retrieve `Conditions` based on the last updated date of the record.

```http
GET /Condition?patient={id}&_lastUpdated={value}
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
GET /Condition?patient=[value]&_lastUpdated=lt[value]
GET /Condition?patient=[value]&_lastUpdated=le[value]
GET /Condition?patient=[value]&_lastUpdated=gt[value]
GET /Condition?patient=[value]&_lastUpdated=ge[value]
GET /Condition?patient=[value]&_lastUpdated=eq[value]
```

So to search for a `Condition` last updated on 23rd January 2021 the query would be:

```http
GET /Condition?patient=[value]&_lastUpdated=2021-01-23
```

To search for all `Conditions` last updated before the 23rd December 2020 the query would be:

```http
GET /Condition?patient=[value]&_lastUpdated=lt2020-12-23
```

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /Condition?patient={id}&_summary=count
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
GET /Condition?patient={id}&_format=[format value]
```
For example the query below would return a response in XML format.

```http
GET /Condition?patient={id}&_format=xml
```

This can be added to any query construct.

## Sort Parameters

The default sort order for `Condition` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date
The `Condition` resource can be sorted by onset date or asserted date.

```http
GET /Condition?_sort=onset-date
GET /Condition?_sort=-onset-date
GET /Condition?_sort=asserted-date
GET /Condition?_sort=-asserted-date
```

## Paging

### \_count
The parameter `_count` is defined as a hint to the server regarding how many resources should be returned in a single page.

For example the query below would return a `Bundle` with 5 records per page.

```http
GET /Condition?patient={id}&status={code}&_count=5
```

## Examples

Examples of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
