<h2>Geolocation - Meteor Smart Package</h2>

A package that provides geolocation object for meteor.
<h3>Installation</h3>
Just use your meteorite and type:

`mrt add Geolocation`

You can use it in your non-meteor projects, just copy geoocation.js file.

<h3>How to use?</h3>

Firs create geolocation object (Geolocation class is singleton!):

```javascript
var geo = Golcation.getInstance();
```

To access latitude and longitude use:

```javascript
var latitude = geo.lat;
var longitude = geo.lng;
```

If there are some errors you can find them in error field:
```javascript
geo.error;
```

To get new geolocattion coordinates just type:

```javascript
geo.localize();
```

!Remember not all browsers supports geolocation!

<h3>License</h3>

Geollocation is licensed under the MIT license.
