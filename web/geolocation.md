```html
<script>
	var x = document.getElementById("demo");
    function getLocation() {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(showPosition);
        else
            x.innerHTML="Geolocation is not supported by this browser";
    }
    function showPosition(position){
        x.innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude:" + position.coords.longitude;
    }
</script>

<button onclick="getLocation()">현재 위치 확인</button>
<p id="demo"></p>
```

