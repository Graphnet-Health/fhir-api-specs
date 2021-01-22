---
id: apiObservation
title: GET Observation
sidebar_label: GET Observation
---

## Overview

The **Observation** API can be used to retrieve observation records for a patient. When querying for data it must always be in the context of a single patient.

`Observation` records can be created, updated, queried and deleted using this API.

- Retrieving of searching for `Observation` records is performed using a [HTTP GET](4) described below.
- Adding new `Observation` records is performed using a [HTTP POST](apiObservationPOST)
- Updating existing `Observation` records is performed using a [HTTP PUT](apiObservationPUT)
- Deleting existing `Observation` records is performed using a [HTTP DELETE](apiObservationDELETE)

## Observation Retrieval

### id

The `Observation` resource can be retrieved directly if the `id` of the resource is known. By appending the `id` to the url will cause the `Observation` resource to be retrieved. Unlike all other retrieval queries, the response will be a single resource as opposed to a `Bundle`

```http
GET /Observation/{id}
```

An alternative method for retrieval is to make use of the `_id` search parameter. In this case, the result will be a `Bundle`. If the `id` is present the `Bundle` will contain a single `Observation` resource, otherwise the `Bundle` will be empty.

```http
GET /Observation?_id={id}
```

## Query Parameters

Unless retrieving an `Observation` resource by the use of `id` then the `subject` must always be present. The `Observation` can only be targetted against a single patient at any one time.

### Subject

```http
GET /Patient?identifier={system}|{value}
```

When searching for NHS Numbers then use the system `https://fhir.nhs.uk/Id/nhs-number`
For example

```http
GET /Patient?identifier=https://fhir.nhs.uk/Id/nhs-number|1234567890
```

### Code

### Date

To find patients using their given name (aka Forename) the `given` search parameter can be used.

### Identifiers

### Status

### Encounter

## Sort Parameters

The default sort order for `observation` records is in decending date order (e.g. most current first).
The following sort parameters are also available.

### Date

```http
GET /Patient?_sort=date
GET /Patient?_sort=-date
```
