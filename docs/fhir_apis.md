---
id: fhir_apis
title: FHIR APIs
---

## What is FHIR?
FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging healthcare information electronically, and it has been promoted by NHS England / NHSX as the strategic standard for APIs in the NHS.

The core FHIR standard is an international standard defined by HL7 - click here for the documentation of the FHIR standard.

## Graphnet CareCentric FHIR APIs
We have adopted the NHS-specific CareConnect profiles of FHIR for accessing the data in the shared care record, and have implemented APIs that conform to the CareConnect API guidance for ReST APIs using FHIR.

We are delivering support for each of the CareConnect profiles and interactions in a rolling programme – the initial package of API is available for testing now, and includes 4 FHIR resources:

- Patient
- Practitioner (registered GP)
- MedicationStatement (GP Medications)
- Immunization (from the GP record)


 ![alt text](/static/img/CCFHIR-Phase1.png 'FHIR APIs')

## Delivery Roadmap
Subsequent releases will introduce other resources and data from other sources (Acute, Community, Social Care etc). The current roadmap for these releases is below, although this is subject to change as we understand the priorities of API consumers.


 ![alt text](/static/img/FHIR-Roadmap.png 'FHIR Roadmap')
