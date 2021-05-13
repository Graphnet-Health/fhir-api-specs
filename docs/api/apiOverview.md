---
id: apiOverview
title: API Overview
sidebar_label: API Overview
---

import LinkCard from '@site/src/components/LinkCard';
import LinkItem from '@site/src/components/LinkItem';

The Graphnet FHIR APIs make use of the [FHIR STU3](http://hl7.org/fhir/STU3/index.html) CareConnect profiles developed by the [INTEROPen](https://www.interopen.org/) community where possible. On occasion, Graphnet specific profiles have been used so as to make provision for extensions that are not part of the CareConnect profiles.

When Graphnet specific profiles are used, the rationale for the profile is documented within this API guide.

The profiles are available from the [online profile repository](https://fhir.hl7.org.uk/) hosted by [HL7 UK](https://www.hl7.org.uk/)

## FHIR Profiles

The profiles used by the Graphnet APIs are detailed below.

<LinkCard/>

## FHIR Roadmap

The table above shows the development of the Graphnet FHIR API. The API is actively being developed and successive releases will increase the available functionality. The colour coding used within the table signifies the development status.

<LinkItem status="green" text="Functionality marked in green is available in this release and can be utilised straight away."/>

<LinkItem status="amber" text="Functionality marked in amber is currently still in development and is expected to be available in the near future."/>

<LinkItem status="red" text="Functionality marked in grey is in the development backlog and will be made available in later API releases."/>
