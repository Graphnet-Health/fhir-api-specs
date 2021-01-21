---
id: apiPatient
title: FHIR Patient
sidebar_label: GET Patient
---

## Overview

The Graphnet FHIR API is intended to be used as a patient centric API and as such all FHIR APIs are targetted on a patient.

The **Patient** API can be used to retrieve demographics information for a patine or as a means to discover the `Patient.id` so other FHIR APIs can be used.

Patients cannot be created, deleted or updated using the FHIR APIs. There are a number of different ways for searching for patients, these are described below.

## Patient Retrieval

## Query Parameters

### NHS Number & Local identifiers

```http
GET /Patient?identifier={system}|{value}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number`
For example

```http
GET /Patient?identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

### Family Name

To find patients using their Family name (aka Surname) the `family` search parameter can be used.

```http
GET /Patient?family=Jones
```

To improve searching the API supports the use of a number of different search modifiers.
The ones supported for 'family'are as below:

| Modifier | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| exact    | Returns family names that are exactly as per the search term (case sensitive) |
| contains | Returns family names that contain the search terms somewhere within it        |

```http
GET /Patient?family:exact=McAndrews

GET /Patient?family:contains=anders
```

:::tip

For more information on using FHIR search modifiers take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#string

:::

### Given Name

To find patients using their given name (aka Forename) the `given` search parameter can be used.

```http
GET /Patient?given=Sarah
```

To improve searching the API supports the use of a number of different search modifiers.
The ones supported are as below:

| Modifier | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| exact    | Returns given names that are exactly as per the search term (case sensitive) |
| contains | Returns given names that contains the search terms somewhere within it       |

```http
GET /Patient?given:exact=Johnathon

GET /Patient?given:contains=John
```

:::tip

For more information on using FHIR search modifiers take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#string

:::

### Gender

To find patients using their gender the `gender` search parameter can be used

```http
GET /Patient?gender=1985-06-01
```

### Date of Birth

To find patients using their date of birth the `birthDate` search parameter can be used

```http
GET /Patient?birthDate=1985-06-01
```

To improve searching the API supports the use of a number of different search modifiers.
The ones supported are as below:

| Modifier | Description                                            |
| :------: | ------------------------------------------------------ |
|  **LT**  | Returns dates less than the search term                |
|  **LE**  | Returns dates less than or equal to the search term    |
|  **GT**  | Returns dates greater than the search term             |
|  **GE**  | Returns dates greater than or equal to the search term |
|  **NE**  | Returns dates not equal to the search term             |
|  **EQ**  | Returns dates equal to the search term                 |

```http
GET /Patient?birthDate=LT1985-06-01
GET /Patient?birthDate=LE1985-06-01
GET /Patient?birthDate=GT1985-06-01
GET /Patient?birthDate=GE1985-06-01
GET /Patient?birthDate=NE1985-06-01
GET /Patient?birthDate=EQ1985-06-01
```

:::tip

For more information on using FHIR search modifiers take a look at the FHIR STU3 standard at http://hl7.org/fhir/STU3/search.html#date

:::

```

```
