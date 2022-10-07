---
id: apiMedicationOverview
title: Medications Overview
sidebar_label: Medications Overview
---

## Overview

There are two Medications APIs that represent different events that relate to Medications:

- The Medication Request event represents the authorisation of the medication, this does not mean a medication will in fact be issued, it is a “plan” to do so. 
- The Medication Issue event represents a prescription being issued against a prior Medication Request event. For an acute medication there will be a 1:1 relationship between the request and the issue. For repeats there will potentially be many (1:*) issue events for each request event.

The FHIR resources that can be queried to represent these event are `MedicationStatement` and `MedicationRequest`. The `Medication` resource is referenced from both the `MedicationStatement` and `MedicationRequest` resources, it will always be implemented as a “contained” resource and as such does not have an API to access it.

The sections below show the relationships between the resources for different medication scenarios.

### Acute Medications

An acute medication is intended to be a one off event. Assuming the medication is “Issued” then the relationship between the resources is as below. If no medication is issued, then see “Unissued Medications” below.

![AcuteMedicationsRelationshipDiagram](/img/AcuteMedicationsSTU3.png)

This will yield the following FHIR resources:

1 x MedicationStatement Resource  
1 x MedicationRequest (intent=plan) Resource – The authorisation of the medication  
1 x MedicationRequest (intent=order) Resource  – The issue of the medication  
1 x Medication Resource  


### Repeat Medications

A repeat medication is intended to be “authorised” once and then “issued” multiple times.

![RepeatMedicationsRelationshipDiagram](/img/RepeatMedicationsSTU3.png)

1 x MedicationStatement Resource  
1 x MedicationRequest (intent=plan) Resource – The authorisation of the medication  
{n} x MedicationRequest (intent=order) Resources – The issue(s) of the medication  
1 x Medication Resource  


### Unissued Medications

It is not uncommon for medications to be authorised but never issued. When this happens then the relationship between resources is as shown.

![UnissuedMedicationsRelationshipDiagram](/img/UnissuedMedicationsSTU3.png)

This will yield the following FHIR resources:

1 x MedicationStatement Resource  
1 x MedicationRequest (intent=plan) Resource – The authorisation of the medication  
1 x Medication Resource  
 
