Geolocation = function() {
    if (Geolocation.prototype.instance)
        return Geolocation.prototype.instance;
    Geolocation.prototype.instance = this;

    this.lat = null;
    this.lng = null;
    this.error = null;
    this.maximumAge = 3000;
    this.timeout = 10000;
};

Geolocation.getInstance = function() {
    var geoInstance = new Geolocation();
    geoInstance.localize();
    return geoInstance;
};

Geolocation.prototype.localize = function() {
    var self = this;
    if (!navigator.geolocation) {
        self.error = "Geolocation is not supported by browser";
        return self;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        maximumAge: this.maximumAge,
        timeout: this.timeout,
        enableHighAccuracy: true
    });

    function onSuccess(position) {
        self.lat = position.coords.latitude;
        self.lng = position.coords.longitude;
        self.error = null;
    }

    function onError(error) {
        if (error.code === error.TIMEOUT) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {
                maximumAge: this.maximumAge,
                timeout: 2 * this.timeout,
                enableHighAccuracy: false
            });
        }
        self.error = error;
    }
    return this;
};