---
id: system_system_auth
title: System-to-System Authorisation
---
Accessing APIs requires an OAuth2 token, which for system-to-system use-cases can be obtained using the OAuth 2.0 Client Credentials Flow.

### OAuth Flow
An access token needs to be included with each API request. To generate this access token, consumers pass their client credentials to the authorisation server. Assuming the credentials are valid, an access token is returned in the response.

A token can be reused for any number of requests until it expires, at which time a new token must be generated.

### Requesting a token
```
HTTP POST https://coret1.syhapp.com/vlive/hpca/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=[client-id-value]
&client_secret=[client-secret-value]
```

The client ID and secret will be allocated as part of on-boarding a new system to access APIs - please [contact us](mailto:adam.hatherly@graphnethealth.com) to request this.


### Typical response
```
{
	"token_type": "Bearer",
	"access_token": "eyJhbGciOiJSUzI...truncated for readability...",
	"refresh_token": null
}
```

### Authorization Header
Once a valid access token has been received it should be included with all requests to the API within the Authorisation header.
```
Authorization: Bearer [access_token value]
```

### Access to specific APIs
The APIs this token authorises access to will depend on what has been agreed as part of the on-boarding process with Graphnet. The JWT token will contain claims listing specific APIs that have been authorised. If your token doesn't give you access to the APIs you want to call please [contact us](mailto:adam.hatherly@graphnethealth.com) to discuss.

### Expiry
The token content can be decoded using standard libraries in most development languages, and for testing can be decoded using the [JWT.io website](http://jwt.io/). Included within the payload of the token is an expiry date/time (in the "exp" claim). This specifies the date/time at which the token expires and must be discarded. The client application must then request a new token before continuing.

More details about JSON Web Tokens can be found in [RFC7519](https://tools.ietf.org/html/rfc7519).


