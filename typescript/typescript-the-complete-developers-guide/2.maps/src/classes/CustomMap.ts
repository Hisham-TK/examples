export interface IMappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private customMap: google.maps.Map;

  constructor(mapId: string) {
    this.customMap = new google.maps.Map(document.getElementById(mapId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  createMarker(mappable: IMappable) {
    const marker = new google.maps.Marker({
      map: this.customMap,
      position: mappable.location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.customMap, marker);
    });
  }
}
