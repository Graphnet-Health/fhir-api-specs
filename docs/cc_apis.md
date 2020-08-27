---
id: cc_apis
title: CareCentric APIs
---
The CareCentric APIs are simple ReST APIs for retrieving data from the shared care record. Over time, we plan to develop our FHIR APIs as a strategic API suite for this, but currently only certain data is available via FHIR, so CareCentric APIs can be used to get access to other data in the record not yet available using FHIR.

## API Bundles
The CCAPIs are split into a number of "bundles" representing different parts of the shared record. Bundles include Demographics, Acute, ADT, Alerts, GP, Community / Mental Health, etc.

Your subscription to a "product" includes access to a number of these bundles (depending on the product). 

See here for an overview of product subscriptions.

## Patient Identifiers
Before calling any of the other APIs, you will need to locate the patient you are interested in using the "Find Patient" API in the Demographics bundle. This allows you to search for a patient using a range of criteria including name, date of birth, gender, NHS Number, etc.

Many of the other API calls in the CCAPI bundles use a 'patient detail ID' value rather than an NHS number or specific patient ID from the source systems that submit data into CareCentric. This allows local identifiers to change over time, and for patients to be linked and un-linked without the detail IDs for specific record content having to change.

From your initial "find patient" search, you may see multiple matches for the same patient - this is because we may have received data about that patient from a number of source systems. We retain each individual patient record, and "link" records which we believe are for the same patient - you should be able to see the identifiers any linked patient records in the search results. Because all linked records are for the same patient within CareCentric, you can use any of the linked DetailID values in your subsequent API calls, and they should all return results for your selected patient (where data exists).