---
id: apiMedicationRequest
title: GET MedicationRequest
sidebar_label: GET MedicationRequest
---

## Overview

The **MedicationRequest** API can be used to interact with data relating to the authorisation and issue(s) of medications for a patient. When querying for data it must always be in the context of a single patient and must state the `intent` of the Medication Request.

<!--`MedicationRequest` records can be created, updated, queried and deleted using this API.-->

- Retrieving or searching for `MedicationRequest` records is performed using a HTTP GET described below.


## MedicationRequest Retrieval

### id and \_id

The `MedicationRequest` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `MedicationRequest` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`

```http
GET /MedicationRequest/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `MedicationRequest` resource, otherwise, the `Bundle` will be empty.

```http
GET /MedicationRequest?_id={id}
```

## Query Parameters

Unless retrieving a `MedicationRequest` resource by the use of `id` then the `subject` must always be present. The `MedicationRequest` can only be targeted against a single patient at any one time.

### Subject

```http
GET /MedicationRequest?patient=Patient/{id}&intent=[value]
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number`
For example

```http
GET /MedicationRequest?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890&intent=[value]
```

All the search examples shown below will accept the patient parameter in either form.

### Intent

To search `MedicationRequests` based on intent, the following can be used.

```http
GET /MedicationRequest?patient={id}&intent=[value]
```
Permitted Values

|Code	         |Definition |
| :------------: |---------------------------------------------- |
|proposal        |The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act|
|plan            |The request represents an intension to ensure something occurs without providing an authorization for others to act|
|order           |The request represents a request/demand and authorization for action|
|instance-order  |The request represents an instance for the particular order, for example a medication administration record.|


### Code

When searching for `MedicationRequests` with a specific medication code then the query can be constructed using different combinations of the code system and the code value.

```http
GET /MedicationRequest?patient=[value]&intent=[value]&code=[code]
GET /MedicationRequest?patient=[value]&intent=[value]&code=[system]|[code]
GET /MedicationRequest?patient=[value]&intent=[value]&code=|[code]
GET /MedicationRequest?patient=[value]&intent=[value]&code=[system]|
```

For example to search for a MedicationRequest for 'Amoxicillin 500mg capsules' using SNOMED then a query would look like the following.

```http
GET /MedicationRequest?patient=[value]&intent=[value]&code=http://snomed.info/sct|39732411000001100
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Authored On Date

To search on the date a `MedicationRequest` was authored on the following search constructs can be used.

```http
GET /MedicationRequest?patient=[value]&intent=order&authoredon=[value]
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
GET /MedicationRequest?patient=[value]&intent=[value]&authoredon=lt[value]
GET /MedicationRequest?patient=[value]&intent=[value]&authoredon=le[value]
GET /MedicationRequest?patient=[value]&intent=[value]&authoredon=gt[value]
GET /MedicationRequest?patient=[value]&intent=[value]&authoredon=ge[value]
GET /MedicationRequest?patient=[value]&intent=[value]&authoredon=eq[value]
```
So to search for an `MedicationRequest` authored on 23rd January 2021 the query would be

```http
GET /MedicationRequest?patient=[value]&intent=[value]&authoredon=2021-01-23
```

To search for all `MedicationRequests` authored before the 23rd December 2020, the following could be used

```http
GET /MedicationRequest?patient=[value]&intent=[value]&authoredon=lt2020-12-23
```

### Identifiers

To search for `MedicationRequests` using identifiers present on the `MedicationRequest` record, the following can be used

```http
GET /MedicationRequest?patient=[value]&intent=[value]&identifier=[code]
GET /MedicationRequest?patient=[value]&intent=[value]&identifier=[system]|[code]
GET /MedicationRequest?patient=[value]&intent=[value]&identifier=|[code]
GET /MedicationRequest?patient=[value]&intent=[value]&identifier=[system]|
```

For example

```http
GET /MedicationRequest?patient=[value]&intent=[value]&identifier=http://acme.org/medreqdata|98765-1365428
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Status

To search `MedicationRequests` based on status, the following can be used.

```http
GET /MedicationRequest?patient={id}&intent=[value]&status=active
```
Permitted Values

|Code	         |Definition |
| :------------: |---------------------------------------------- |
|active          |The prescription is 'actionable', but not all actions that are implied by it have occurred yet.|
|on-hold         |Actions implied by the prescription are to be temporarily halted, but are expected to continue later. May also be called "suspended".|
|cancelled       |The prescription has been withdrawn.|
|completed       |The medication is no longer being taken.|
|entered-in-error|All actions that are implied by the prescription have occurred.|
|stopped         |Actions implied by the prescription are to be permanently halted, before all of them occurred.|
|draft           |The prescription is not yet 'actionable', i.e. it is a work in progress, requires sign-off or verification, and needs to be run through decision support process.|
|unknown       |The authoring system does not know which of the status values currently applies for this request|


### \_lastUpdated

To retrieve `MedicationRequests` based on the updated date of the record

```http
GET /MedicationRequest?patient={id}&_lastUpdated={value}
```
To improve searching the API supports the use of search modifiers. The modifiers supported for `_lastUpdated` are as below:

| Modifier | Description                                            |
| :------: | ------------------------------------------------------ |
|  **lt**  | Returns dates less than the search term                |
|  **le**  | Returns dates less than or equal to the search term    |
|  **gt**  | Returns dates greater than the search term             |
|  **ge**  | Returns dates greater than or equal to the search term |
|  **eq**  | Returns dates equal to the search term                 |

```http
GET /MedicationRequest?patient=[value]&_lastUpdated=lt[value]
GET /MedicationRequest?patient=[value]&_lastUpdated=le[value]
GET /MedicationRequest?patient=[value]&_lastUpdated=gt[value]
GET /MedicationRequest?patient=[value]&_lastUpdated=ge[value]
GET /MedicationRequest?patient=[value]&_lastUpdated=eq[value]
```

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /MedicationRequest?patient={id}&intent=[value]&_summary=count
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
GET /MedicationRequest?patient={id}&intent=[value]&_format=[format value]
```
For example the query below would return a response in XML format.

```http
GET /MedicationRequest?patient={id}&intent=[value]&_format=xml
```

This can be added to any query construct.

## Sort Parameters

The default sort order for `MedicationRequest` records is in descending date order (i.e. most current first).

## Paging

### \_count

```http
GET /MedicationRequest?patient={id}&intent=[value]&status={code}
```

## Examples

Examples of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
