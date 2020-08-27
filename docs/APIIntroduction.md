---
id: api_introduction
title: API Introduction
---

This developer portal also allows developers to sign up, and test API calls directly against a sandpit environment. This environment has sample data in it, so no patient information is exposed to developers testing in this way.

The steps required to test an API in the portal are described below :

### Create an account on the developer portal.
- This is self-service with no approvals required – it allows us to limit the volume of calls coming through, and track usage of our APIs.
- Registering an account requires an email address to be provided – this will be verified as part of the registration process

### Request access to an API "product".
- APIs are grouped into "products" to allow us to track and manage usage, and for live API products, charge for use of APIs in a flexible way.
- Some products may require approval before access is granted – especially those that allow data to be submitted into the record, and products relating to customer environments.
- Once your request has been approved, you will be given a subscription key which you will need to include in API calls.
- You can see any existing subscriptions on your account in your profile.

### Explore the APIs in the API catalogue.
- [Click here](https://api.graphnethealth.com/docs/services/?pageSize=0&groupBy=tag) to browse the API catalogue.
- When you open an API page, you will see details of the inputs and outputs, and at the bottom of the page you should see sample code snippets in various languages you can use to call the APIs from your own code.
- To test directly in the developer portal, click the "Try it" button
- This will allow you to enter values to pass into the API call, and generate the actual API request for you (the full HTTP request is shown at the bottom of the page)
- Assuming you are signed in, your subscription key should be pre-populated in the Ocp-Apim-Subscription-Key header, but you can change this to use a different subscription from the subscription key - drop-down if you have more than one.

### Authenticate
- Before you can submit the API call, you will need to authorise the user or system making the API call
- This uses OAuth2 – for more details, see the Access Control section below.
- For testing in the developer portal, a test account is provided for you – in the Authorization section, click the drop-down and select the relevant grant type
- This will open a pop-up with a tick box to use a test user. You can untick this and provide other user credentials, or leave it ticked and click Authorize to request an OAuth2 access token.
- Click here for more details about Authentication for API calls.

### Send the API request
- Click "Send" to send your test API request
- Assuming it has worked correctly, you should see the response in the box below.
- You should also be able to see the exact HTTP request including the URL and headers that were sent - this is very useful when replicating that call from a local system.








