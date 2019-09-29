import React, { useState } from 'react';
import { withMapConsumer } from '../../Context/Context';
import MapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import SatInfo from './satInfo';
import Loading from '../Loading/loading';
import satIcon from '../../images/satellite_icon.png';
import Skeleton from '@material-ui/lab/Skeleton';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;
const geolocateStyle = {
  float: 'left',
  margin: '10px',
  padding: '10px'
};

const Map = ({ context }) => {
  const {
    mapLoading,
    satellites,
    getData,
  } = context;

  //Setting location to Washington, DC by default
  const [viewport, setViewPort] = useState({
    width: 1200,
    height: 400,
    latitude: 38.9072,
    longitude: -77.0369,
    zoom: 4,
  });

  const [loading, setLoading] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);

  const onViewportChange = viewport => setViewPort({
     ...viewport,
     maxZoom: 6,
    transitionDuration: 300
  });

  const onResetButtonClick = async () => {
    setLoading(true);
    try {
      await getData();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Something went wrong with getting satellite data.")
    }
  };

  const renderPopup = () => {
    return popupInfo && (
      <Popup
        tipSize={5}
        anchor='bottom'
        longitude={popupInfo.satLng}
        latitude={popupInfo.satLat}
        sortByDepth={true}
        closeOnClick={true}
        onClose={() => setPopupInfo(null)}
      >
      {popupInfo.satName}
      </Popup>
    )
  };

  const renderSatInfo = () => {
    if (popupInfo === null ) {
      return <div className='display'>
        <p>Click on a satellite to see more info</p>
      </div>
    }

    return popupInfo && (
      <SatInfo satellite={popupInfo} />
    )
  };

  return (
    <>
      <div className='defaultHero'>
        <div className='section-title'>
          <h3>Operational GPS Satellites Tracker</h3>
          {loading ? <Loading />
            :
            <button
              className='btn-primary'
              onClick={onResetButtonClick}
            >Update Data</button>
          }
        </div>
        {mapLoading ? (
          <div>
          <Loading />
          <Skeleton variant="rect" width={1200} height={300} />
          </div>
        )
          :
          <MapGL
            {...viewport}
            mapboxApiAccessToken={mapToken}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            onViewportChange={onViewportChange}
          >
            <GeolocateControl
              style={geolocateStyle}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
            {satellites.map((sat, index) => {
              return (
                <Marker
                  key={index}
                  latitude={sat.satLat}
                  longitude={sat.satLng}
                >
                  <img src={satIcon}
                    alt='satellite'
                    onClick={() => setPopupInfo(satellites[index])}
                  />
                </Marker>
              );
            })}
            {renderPopup()}
          </MapGL>
        }
      </div>
      <div className='display-container'>
      {renderSatInfo()}
      </div>
    </>
  )
}

export default withMapConsumer(Map);