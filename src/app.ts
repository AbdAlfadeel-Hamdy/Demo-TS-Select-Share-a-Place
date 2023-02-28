const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

declare var ol: any;

const searchAddressHandler = (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value.trim();
  const latlng = enteredAddress.split(",");
  if (latlng.length !== 2) return alert("Invalid data!");

  addressInput.value = "";
  const coordinates = { lat: +latlng[0], lng: +latlng[1] }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 7,
    }),
  });
};

form.addEventListener("submit", searchAddressHandler);
