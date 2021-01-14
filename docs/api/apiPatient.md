---
id: apiPatient
title: FHIR Patient
sidebar_label: GET Patient
---

## Overview

The Graphnet FHIR API is intended to be used as a patient centric API and as such all FHIR APIs are targetted on on a patient.

The **Patient** API can be used to retrieve demographics information for a patine or as a means to discover the `Patient.id` so other FHIR APIs can be used.

Patiente cannot be created or updated using te FHIR APIs. There are a number of different ways for searching for patients, these are described below.

## Patient Retrieval

## Query Parameters

### NHS Number & Local identifiers

```http
GET /Patient?identifier={system}|{value}
```

When searching for NHS Numbers then use the a system of `https://fhir.nhs.uk/Id/nhs-number` for example

```http
GET /Patient?identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

### Family Name

To find patients using the Family name (aka Surname) the `family` search parameter can be used.

```http
GET /Patient?family=Jones
```

To imporve searching the API supports the use of a number of different search modifiers.
The ones supported are as below:

| Modifier | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| exact    | Returns family names that are exactly as per the search term (case sensitive) |
| contains | Returns family names that contains the search terms somewhere within it       |

```http
GET /Patient?family:exact=McAndrews

GET /Patient?family:contains=anders
```

:::tip

For more information on using FHIR search modifiers take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#string

:::

### Given Name

To find patients using the Family name (aka Surname) the `family` search parameter can be used.

```http
GET /Patient?family=Jones
```

To improve searching the API supports the use of a number of different search modifiers.
The ones supported are as below:

| Modifier | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| exact    | Returns family names that are exactly as per the search term (case sensitive) |
| contains | Returns family names that contains the search terms somewhere within it       |

```http
GET /Patient?family:exact=McAndrews

GET /Patient?family:contains=anders
```

:::tip

For more information on using FHIR search modifiers take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#string

:::

### Birth Date

---
