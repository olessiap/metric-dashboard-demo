export default [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        // color: "#004358"
        color: "#080b0f"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#25292f"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#25292f"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3f4651"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#25292f"
      },
      {
        lightness: -20
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#25292f"
      },
      {
        lightness: -17
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#5a6577"
      },
      {
        visibility: "on"
      },
      {
        weight: 0.9
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#5a6577"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#25292f"
      },
      {
        lightness: -10
      }
    ]
  },
  {},
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#25292f"
      },
      {
        weight: 0.7
      }
    ]
  }
];