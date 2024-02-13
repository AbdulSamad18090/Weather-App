import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng }) => {
  const MAP_API_KEY = "AIzaSyADg60utc-W05mrSyTaPC-wGn9XowAI1Tk";
  return (
    <div style={{ height: "200px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_API_KEY }}
        defaultCenter={{ lat: lat, lng: lng }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={lat} lng={lng} text="Your location" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
