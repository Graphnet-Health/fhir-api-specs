---
id: apiLinkedMergedPatient
title: Linked and Merged Patients
sidebar_label: Linked and Merged Patients
---


## Overview
As part of Graphnet's management of the Master Patient Index, Patient records can be linked and merged. This page defines the functionality and behaviour expected when querying FHIR with respect to linked and merged patients and how the bespoke `getAllLinkedPatients` search parameter can be used in the context of a Patient query and as a chained query when searching other resource types.

### Patient Resource "link" element
The `link` element within the Patient resource is used to describe the relationships between Patient resources. The `link.type` element will describe which type of relationship exists between the instances of Patient records.

| Type        | Use                         |
| ------------| --------------------------- |
| seealso     | Linked patient              |
| replaces    | Major merged patient        |
| replaced-by | Minor merged patient        |

Any linked or merged patient relationships will be returned in the Patient resource.

### Get All Linked Patients

The `getAllLinkedPatients` search parameter is a boolean that allows the Patient to be queried alongside any other Patient search parameter to include in the response any linked or merged Patients. For example:

```http
GET /Patient?family=smith&getAllLinkedPatients=true 
```
This will return a Bundle with all the Patient resources that have a family name of Smith and all the Patients linked to the search responses. 

The search criteria in the URL identifies that criteria for the patients of interest, but when invoking the custom search parameter `getAllLinkedPatients`, the linked records do not have to match that criteria, they are returned due to the link to a patient that does.  Therefore in the above query if there is a linked patient with the family name “Smythe”, it will be returned based on the link alone, it does not have to match the original criteria itself.

### Non-Patient Resource Queries

When querying for non-patient resources e.g. Observation the `getAllLinkedPatients` search parameter can be used as a chained query in the context of a Patient. For example:

```http
GET /Observation?patient.family=smith&patient.getAllLinkedPatients=true
```

This will return a bundle with all the Observation resources for Patients that have a family name of Smith and all the Patients that are linked to those Patients.

There must be at least one other Patient scoped search parameter used alongside the `getAllLinkedPatients` search parameter.