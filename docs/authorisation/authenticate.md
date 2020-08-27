---
id: authenticate
title: Introduction
---
All APIs use OAuth2 tokens to secure access. In order to obtain a token, there are two approaches that can be used depending on the way you are consuming the APIs:

### User Authorisation

 This is the preferred approach for authenticating and authorising access to APIs. It assumes there is a user present, whose credentials can be passed into the OAuth2 service (using an OAuth2 "resource owner password credentials grant" flow). In addition, the system itself will be identified using a client ID and secret (issued by Graphnet as part of on-boarding a system for access to data). 
 
 These user and system credentials will be verified, and if valid, a token returned that grants access to API data on behalf of that user. Any information about the role of the user will be taken into account when issuing the token

  <a class="button button--primary" href="user_auth">
    More Details
  </a>



 ### System-to-System Authorisation

In some cases, systems need to make API calls when there is no user present. This is often the case for contributing data into the shared record, which may occur at the end of an episode of care after the patient has left, or in an overnight batch process. 

In this case, authorisation can be given to a system to make API calls without any specific user credentials (using an OAuth2 "client credentials grant" flow). In this case, the system will be identified using a client ID and secret alone, and access authorised for specific APIs agreed during the process of on-boarding the system for API access.

  <a class="button button--primary" href="system_system_auth">
    More Details
  </a>


