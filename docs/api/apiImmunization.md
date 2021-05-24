---
id: apiImmunization
title: GET Immunization
sidebar_label: GET Immunization
---

## Overview

The **Immunization** API can be used to interact with Immunization records for a patient. When querying for data it must always be in the context of a single patient.

`Immunization` records can be queried using this API.

- Retrieving or searching for `Immunization` records is performed using a HTTP GET described below

## Immunization Retrieval

### id and \_id

The `Immunization` resource can be retrieved directly if the `id` of the resource is known. Appending the `id` to the url will cause the `Immunization` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`.

```http
GET /Immunization/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Immunization` resource, otherwise the `Bundle` will be empty.

```http
GET /Immunization?_id={id}
```

## Query Parameters

Unless retrieving an `Immunization` resource by the use of `id` the `subject` must always be present. The `Immunization` can only be targetted against a single patient at any one time.

### Subject

```http
GET /Immunization?patient=Patient/{id}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number` for example:

```http
GET /Immunization?patient.identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

All the search examples shown below will accept the patient parameter in either form.

### Vaccine Code

When searching for `Immunizations` with a specific vaccine code the query can be constructed using different combinations of the code system and the code value.

```http
GET /Immunization?patient=[value]&vaccine-code=[code]
GET /Immunization?patient=[value]&vaccine-code=[system]|[code]
GET /Immunization?patient=[value]&vaccine-code=|[code]
GET /Immunization?patient=[value]&vaccine-code=[system]|
GET /Immunization?patient=[value]&vaccine-code:text=[value]
```

For example to search for a Yellow Fever vaccination product using SNOMED would look like the following:

```http
GET /Immunization?patient=[value]&vaccine-code=http://snomed.info/sct|9895711000001104
```
In addition, the ':in' search modifier can be used to search for an immunization code that is in a specific valueset. For example to seach for an Immunization code in the CareConnect-VaccineCode valueset would look like the following:

```http
GET /Immunization?patient=[value]&vaccine-code:in=https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-VaccineCode-1
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Vaccine Procedure Code

When searching for `Immunizations` with a specific vaccine procedure code the query can be constructed using different combinations of the code system and the code value.

```http
GET /Immunization?patient=[value]&immunization-procedure=[code]
GET /Immunization?patient=[value]&immunization-procedure=[system]|[code]
GET /Immunization?patient=[value]&immunization-procedure=|[code]
GET /Immunization?patient=[value]&immunization-procedure=[system]|
GET /Immunization?patient=[value]&immunization-procedure:text=[value]
```

For example to search for the administration of a Yellow Fever vaccination product using SNOMED would look like the following:

```http
GET /Immunization?patient=[value]&immunization-procedure=http://snomed.info/sct|67308009
```
In addition, the ':in' search modifier can be used to search for a vaccination procedure code that is in a specific valueset. For example to seach for a vaccination procedure code in the CareConnect-VaccinationProcedure valueset would look like the following:

```http
GET /Immunization?patient=[value]&immunization-procedure:in=https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-VaccinationProcedure-1
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Date

To search on the date an `Immunization` was administered the following search constructs can be used.

```http
GET /Immunization?patient=[value]&date=[value]
GET /Immunization?patient=[value]&date=eq[value]
GET /Immunization?patient=[value]&date=ne[value]
GET /Immunization?patient=[value]&date=le[value]
GET /Immunization?patient=[value]&date=ge[value]
GET /Immunization?patient=[value]&date=lt[value]
GET /Immunization?patient=[value]&date=gt[value]
```

To search for an `Immunization` administered on 23rd January 2021 the query would be:

```http
GET /Immunization?patient=[value]&date=2021-01-23
```

To search for all `Immunizations` administered before the 23rd December 2020 the query would be:

```http
GET /Immunization?patient=[value]&date=lt2020-12-23
```

### Identifiers

To search for `Immunizations` using identifiers present on the `Immunization` record the following search constructs can be used.

```http
GET /Immunization?patient=[value]&identifier=[code]
GET /Immunization?patient=[value]&identifier=[system]|[code]
GET /Immunization?patient=[value]&identifier=|[code]
GET /Immunization?patient=[value]&identifier=[system]|
```

For example:

```http
GET /Immunization?patient=[value]&identifier=http://acme.org/immsdata|21897-654238
```

:::tip
For further information consult the FHIR specification at http://hl7.org/fhir/STU3/search.html#token
:::

### Status

The `Immunization` FHIR query currently only accepts records with a status of `completed`. The search parameter is a placeholder for future developments.

```http
GET /Immunization?patient={id}&status=completed
```

### Not Given

To search for `Immunizations` not given the following search construct can be used.

```http
GET /Immunization?patient={id}&notgiven=true
```


### \_lastUpdated

To retrieve `Immunizations` based on the updated date of the record

```http
GET /Immunization?patient={id}&_lastUpdated={value}
```

<!-- :::important
Need to check how this was implemented (were modifiers used?)
::: -->

### \_summary

Adding the `_summary=count` query parameter will change the behaviour of the query to return just the count of records, rather than the records themselves.

```http
GET /Immunization?patient={id}&_summary=count
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

The default sort order for `Immunization` records is in descending date order (i.e. most current first).
The following sort parameters are also available.

### Date

```http
GET /Immunization?_sort=date
GET /Immunization?_sort=-date
```

## Paging

### \_count

```http
GET /Immunization?patient={id}&_count
```

## Examples

Example of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
