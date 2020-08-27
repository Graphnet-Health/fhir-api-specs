---
id: user_auth
title: User Authorisation
---
Accessing APIs requires an OAuth2 token, which typically uses the credentials for a registered CareCentric user and is obtained using the OAuth 2.0 Resource Owner Password Flow.

### OAuth Flow
An access token needs to be included with each API request. To generate this access token, consumers pass the user's credentials, along with credentials for their client (system) to the authorisation server. Assuming the credentials are valid, an access token is returned in the response.

A token can be reused for any number of requests until it expires, at which time a new token must be generated.

### Requesting a token
```
HTTP POST https://prv-is.grhapp.com/connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=password
&client_id=FHIRUser
&client_secret=fh1rA%24dial0gUe
&username=RewiredHackathon
&password=Rew1redH%26ck
&scope=launch%20user%2F*.read%20openid%20profile
```

The client ID and secret will be allocated as part of on-boarding a new system to access APIs - please [contact us](mailto:adam.hatherly@graphnethealth.com) to request this.

For initial development and testing, the values in the above example can be used, which should give access to all test API endpoints for reading data.

### Typical response
```
{
    "access_token": "eyJhbGciOiJSUzI1N...truncated for readability...",
    "expires_in": 172800,
    "token_type": "Bearer"
}
```

### Authorization Header
Once a valid access token has been received it should be included with all requests to the API within the Authorisation header.
```
Authorization: Bearer [access_token value]
```

### Resource scopes
The APIs this token authorises access to will depend on the role and permissions of the user (along with any specific restrictions based on the client system, as agreed during on-boarding of the system). 

Checks such as role-based access control and user group permissions may be used to determine which APIs can be called, and what data will be returned. This is primarily represented in the form of "scopes" in the token returned. For FHIR APIs this makes use of the scopes defined in the [SMART on FHIR standard](http://hl7.org/fhir/smart-app-launch/scopes-and-launch-context/index.html). If your token doesn't give you access to the APIs you want to call please [contact us](mailto:adam.hatherly@graphnethealth.com) to discuss.

### Expiry
The token content can be decoded using standard libraries in most development languages, and for testing can be decoded using the [JWT.io website](http://jwt.io/). Included within the payload of the token is an expiry date/time (in the "exp" claim). This specifies the date/time at which the token expires and must be discarded. The client application must then request a new token before continuing.

More details about JSON Web Tokens can be found in [RFC7519](https://tools.ietf.org/html/rfc7519).


