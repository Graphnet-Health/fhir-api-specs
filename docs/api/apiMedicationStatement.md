---
id: apiMedicationStatement
title: GET MedicationStatement
sidebar_label: GET MedicationStatement
---

## Overview

The **MedicationStatement** API can be used to interact with data relating to the authorisation of medications, including repeat medications for a patient. When querying for data it must always be in the context of a single patient.

<!--`MedicationStatement` records can be created, updated, queried and deleted using this API.-->

- Retrieving or searching for `MedicationStatement` records is performed using a HTTP GET described below.


## MedicationStatement Retrieval

### id and \_id

The `MedicationStatement` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `MedicationStatement` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`

```http
GET /MedicationStatement/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `MedicationStatement` resource, otherwise, the `Bundle` will be empty.

```http
GET /MedicationStatement?_id={id}
```

## Query Parameters

Unless retrieving a `MedicationStatement` resource by the use of `id` then the `subject` must always be present. The `MedicationStatement` can only be targeted against a single patient at any one time.

### Subject

```http
GET /MedicationStatement?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number`. For example

```http
GET /MedicationStatement?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Code

When searching for `MedicationStatements` with a specific medication code then the query can be constructed using different combinations of the code system and the code value.

```http
GET /MedicationStatement?patient=[value]&code=[code]
GET /MedicationStatement?patient=[value]&code=[system]|[code]
GET /MedicationStatement?patient=[value]&code=|[code]
GET /MedicationStatement?patient=[value]&code=[system]|
GET /MedicationStatement?patient=[value]&code:text=[value]
```

For example to search for a MedicationStatement for 'Amoxicillin 500mg capsules' using SNOMED then a query would look like the following.

```http
GET /MedicationStatement?patient=[value]&code=http://snomed.info/sct|39732411000001100
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Effective Date

To search on the date a `MedicationStatement` was effective the following search constructs can be used.

```http
GET /MedicationStatement?patient=[value]&effective=[value]
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
GET /MedicationStatement?patient=[value]&effective=lt[value]
GET /MedicationStatement?patient=[value]&effective=le[value]
GET /MedicationStatement?patient=[value]&effective=gt[value]
GET /MedicationStatement?patient=[value]&effective=ge[value]
GET /MedicationStatement?patient=[value]&effective=ne[value]
GET /MedicationStatement?patient=[value]&effective=eq[value]
```
So to search for an `MedicationStatement` effective on 23rd January 2021 the query would be

```http
GET /MedicationStatement?patient=[value]&effective=2021-01-23
```

To search for all `MedicationStatements` effective before the 23rd December 2020, the following could be used

```http
GET /MedicationStatement?patient=[value]&effective=lt2020-12-23
```

### Identifiers

To search for `MedicationStatements` using identifiers present on the `MedicationStatement` record, the following can be used

```http
GET /MedicationStatement?patient=[value]&identifier=[code]
GET /MedicationStatement?patient=[value]&identifier=[system]|[code]
GET /MedicationStatement?patient=[value]&identifier=|[code]
GET /MedicationStatement?patient=[value]&identifier=[system]|

```

For example

```http
GET /MedicationStatement?patient=[value]&identifier=http://acme.org/medreqdata|98765-1365428
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Status

To search `MedicationStatements` based on status, the following can be used.

```http
GET /MedicationStatement?patient={id}&status=active
```
Permitted Values

|Code	         |Definition |
| :------------: |---------------------------------------------- |
|active          |The medication is still being taken.|
|completed       |The medication is no longer being taken.|
|entered-in-error|The statement was recorded incorrectly.|
|intended        |The medication may be taken at some time in the future.|
|stopped         |Actions implied by the statement have been permanently halted, before all of them occurred.|
|on-hold         |Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".|

### Last Issued Date

To search on the date a `MedicationStatement` was last issued the following search constructs can be used.

```http
GET /MedicationStatement?patient=[value]&last-issued=[value]
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
GET /MedicationStatement?patient=[value]&last-issued=lt[value]
GET /MedicationStatement?patient=[value]&last-issued=le[value]
GET /MedicationStatement?patient=[value]&last-issued=gt[value]
GET /MedicationStatement?patient=[value]&last-issued=ge[value]
GET /MedicationStatement?patient=[value]&last-issued=ne[value]
GET /MedicationStatement?patient=[value]&last-issued=eq[value]
```
So to search for an `MedicationStatement` last issued on 23rd January 2021 the query would be

```http
GET /MedicationStatement?patient=[value]&last-issued=2021-01-23
```

To search for all `MedicationStatements` issued before the 23rd December 2020, the following could be used

```http
GET /MedicationStatement?patient=[value]&last-issued=lt2020-12-23
```

### Prescription Type

To search for `MedicationStatements` based on the prescription type of the record, the following can be used

```http
GET /MedicationStatement?patient=[value]&prescription-type=[code]
GET /MedicationStatement?patient=[value]&prescription-type=[system]|[code]
GET /MedicationStatement?patient=[value]&prescription-type=|[code]
GET /MedicationStatement?patient=[value]&prescription-type=[system]|

```
Permitted values:

System = `https://fhir.graphnethealth.com/CodeSystem-PrescriptionType`

| Code | Display |
| :------: | ------ |
|  R  | Repeat   |
|  A  | Acute    |
|  D  | Repeat Dispensed |

For example, to query for repeat prescriptions, the following can be used

```http
GET /MedicationStatement?patient=[value]&prescription-type=R
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### \_lastUpdated

To retrieve `MedicationStatements` based on the updated date of the record

```http
GET /MedicationStatement?patient={id}&_lastUpdated={value}
```

<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /MedicationStatement?patient={id}&_summary=count
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
GET /MedicationStatement?patient={id}&_format=[format value]
```
For example the query below would return a response in XML format.

```http
GET /MedicationStatement?patient={id}&_format=xml
```

This can be added to any query construct.

## Sort Parameters

The default sort order for `MedicationStatement` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date
The `MedicationStatement` resource can be sorted by effective date or last issued date.

```http
GET /MedicationStatement?_sort=effective
GET /MedicationStatement?_sort=-effective
GET /MedicationStatement?_sort=last-issued
GET /MedicationStatement?_sort=-last-issued
```

### Status
The `MedicationStatement` resource can be sorted by status.

```http
GET /MedicationStatement?_sort=status
GET /MedicationStatement?_sort=-status
```

### Prescription Type
The `MedicationStatement` resource can be sorted by prescription type.

```http
GET /MedicationStatement?_sort=prescription-type
GET /MedicationStatement?_sort=-prescription-type
```

## Paging

### \_count

```http
GET /MedicationStatement?patient={id}&status={code}
```

## Examples

Examples of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
