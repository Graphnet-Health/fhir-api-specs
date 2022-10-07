---
id: apiPatient
title: FHIR Patient
sidebar_label: GET Patient
---


## Overview

The Graphnet FHIR API is intended to be used as a patient centric API and as such all FHIR APIs are targeted on a patient.

The `Patient` API can be used to retrieve demographic information for a patient or as a means to discover the `Patient.id` so other FHIR APIs can be used.

Patients cannot be created, deleted or updated using the FHIR APIs. There are a number of different ways for searching for patients, these are described below.

## Patient Retrieval

### id and \_id

The `Patient` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `Patient` resource to be retrieved. Unlike all other retrieval queries the response will be a single resource as opposed to a `Bundle`.

```http
GET /Patient/{id}
```

An alternate method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Patient` resource, otherwise the `Bundle` will be empty.


```http
GET /Patient?_id={id}
```

## Query Parameters

### NHS Number & Local Identifiers

To find patients using their NHS number of a local identifier the `identifier` search parameter can be used.

```http
GET /Patient?identifier={system}|{value}
```

When searching for an NHS Number use the system `https://fhir.nhs.uk/Id/nhs-number`. For example:

```http
GET /Patient?identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

### NHS Number Verification Status
To find patients using their NHS number verification status the `nhsNumberVerificationStatus` search parameter can be used.

```http
GET /Patient?nhsNumberVerificationStatus={code}
GET /Patient?nhsNumberVerificationStatus={system}|{code}
GET /Patient?nhsNumberVerificationStatus=|{code}
```
When searching for NHS Number Verification Status use the system `https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSNumberVerificationStatus-1`. The permitted values are:

| Code | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
|01	|Number present and verified |
|02	|Number present but not traced |
|03	|Trace required |
|04	|Trace attempted - No match or multiple match found |
|05	|Trace needs to be resolved - (NHS number or patient detail conflict) |
|06	|Trace in progress |
|07	|Number not present and trace not required |
|08	|Trace postponed (baby under six weeks old) |

For example:

```http
GET /Patient?nhsNumberVerificationStatus=https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSNumberVerificationStatus-1|01
```

### Family Name

To find patients using their Family name (aka Surname) the `family` search parameter can be used.

```http
GET /Patient?family=Jones
```

To improve searching the API supports the use of search modifiers. The modifiers supported for `family` are as below:

| Modifier | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| exact    | Returns family names that are exactly as per the search term (case sensitive) |
| contains | Returns family names that contain the search terms somewhere within it        |

For example:

```http
GET /Patient?family:exact=McAndrews
GET /Patient?family:contains=anders
```

:::tip

For more information on using FHIR search modifiers for strings, take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#string

:::

### Given Name

To find patients using their given name (aka Forename) the `given` search parameter can be used.

```http
GET /Patient?given=Sarah
```

To improve searching the API supports the use ofsearch modifiers. The modifiers supported for `given` are as below:

| Modifier | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| exact    | Returns given names that are exactly as per the search term (case sensitive) |
| contains | Returns given names that contain the search terms somewhere within it        |

For example:

```http
GET /Patient?given:exact=Johnathon
GET /Patient?given:contains=John
```

:::tip

For more information on using FHIR search modifiers for strings, take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#string

:::

### Gender

To find patients using their gender the `gender` search parameter can be used.

```http
GET /Patient?gender=female
GET /Patient?gender=male
GET /Patient?gender=other
GET /Patient?gender=unknown
```

### Date of Birth

To find patients using their date of birth the `birthdate` search parameter can be used.


```http
GET /Patient?birthdate=1985-06-01
```

To improve searching the API supports the use of search modifiers. The modifiers supported for `birthdate` are as below:

| Modifier | Description                                            |
| :------: | ------------------------------------------------------ |
|  **lt**  | Returns dates less than the search term                |
|  **le**  | Returns dates less than or equal to the search term    |
|  **gt**  | Returns dates greater than the search term             |
|  **ge**  | Returns dates greater than or equal to the search term |
|  **ne**  | Returns dates not equal to the search term             |
|  **eq**  | Returns dates equal to the search term                 |

```http
GET /Patient?birthdate=lt1985-06-01
GET /Patient?birthdate=le1985-06-01
GET /Patient?birthdate=gt1985-06-01
GET /Patient?birthdate=ge1985-06-01
GET /Patient?birthdate=ne1985-06-01
GET /Patient?birthdate=eq1985-06-01
```

:::tip

For more information on using FHIR search modifiers for dates, take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#date

:::

### Deceased

To find patients that have been marked as deceased or have a death date entered, the `deceased` search parameter can be used.

```http
GET /Patient?deceased=true
GET /Patient?deceased=false
```

### \_lastUpdated
To retrieve `Patientss` based on the last updated date of the record.

```http
GET /Patient?_sort=_lastUpdated
GET /Patient?_sort=-_lastUpdated
```
### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /Patient?_summary=count
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
GET /Patient?_format=[format value]
```
For example the query below would return a response in XML format.

```http
GET /Patient?_format=xml
```
This can be added to any query construct.

## Sort Parameters

The default sort order for `Patient` records is in descending date order (e.g. most current first).
The following sort parameters are also available.

## Paging

### \_count
The parameter `_count` is defined as a hint to the server regarding how many resources should be returned in a single page.

```http
GET /Patient?_count=[n]
```

For example the query below would return a `Bundle` with 5 records per page.

```http
GET /Patient?_count=5
```

## Examples

Examples of payloads in both XML and JSON format are available from the [examples section](../examples/exampleOverview) of this site.
