---
id: apiMedicationUseCases
title: Medications Use Cases
sidebar_label: Medications Use Cases
---
 
## Query Use Cases
How to use the Medications API's to perform queries for common use cases are detailed below: 

### Issued Medications
To query for all issued medications for a patient, use the MedicationRequest API with the following parameters:
 
intent = `order`  

For example:

```http
GET /MedicationRequest?patient={id}&intent=order
```

### Repeat Prescriptions
To query for all current repeat prescriptions for a patient, use the MedicationStatement API with the following parameters:

status = `active`  
prescription-type = `https://fhir.graphnethealth.com/CodeSystem-PrescriptionType|R`  

```http
GET /MedicationStatement?patient=[value]&status=active&prescription-type=https://fhir.graphnethealth.com/CodeSystem-PrescriptionType|R
```

## Examples

Examples of payloads in both XML and JSON formats are available from the [examples section](../examples/exampleOverview) of this site.
