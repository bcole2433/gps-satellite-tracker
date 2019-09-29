import React, { Component } from 'react';
import axios from 'axios';
const MapContext = React.createContext();


const initUserPosition = {
    lat: 38.9072,
    lng: -77.0369,
    alt: 0
};

const GPS_IDS = [44506, 41328, 41019, 40730, 40534, 40294, 40105, 39741, 39533, 39166, 38833,
    37753, 36585, 35752, 32711, 32384, 32260, 29601, 29486, 28874, 28474, 28361, 28190, 28129, 27704,
    27663, 26605, 26407, 26360, 25933, 24876, 22877
];

class MapProvider extends Component {
    state = {
        userPosition: initUserPosition,
        gps_IDs: GPS_IDS,
        satData: [],
        satellites: [],
        mapLoading: false
    };

    componentDidMount() {
        //Getting data from external api
        this.setState ({
            mapLoading: true
        });
        this.getData()
        .then(() => {
            this.setState ({
                mapLoading: false
            });
        })
    }

    getData = async () => {
        //The N2YO API is pretty slow and doesn't allow to get multiple satellites by category
        const satArr = [];
        const ids = this.state.gps_IDs;
        for (let id of ids) {
            const url = 'https://www.n2yo.com/rest/v1/satellite/positions/' + id + '/' + this.state.userPosition.lat + '/' + this.state.userPosition.lng + '/0/1/&apiKey=' + process.env.REACT_APP_SATELLITE_API_KEY;
            const response = await axios.get(url);
            const satData = response.data;
            // console.log(satData);
            // console.log('Latitude: ' + satData.positions[0].satlatitude);
            // console.log('Longitude: ' + satData.positions[0].satlongitude);
            const satObj = {
                satID: satData.info.satid,
                satName: satData.info.satname,
                satLat: satData.positions[0].satlatitude,
                satLng: satData.positions[0].satlongitude,
                azimuth: satData.positions[0].azimuth,
                elevation: satData.positions[0].elevation,
                ra: satData.positions[0].ra,
                dec: satData.positions[0].dec,
                timestamp: satData.positions[0].timestamp,
            };
            satArr.push(satObj)
        };

        this.setState({
            satellites: satArr,
        });
    };

    render() {
        return (
            <MapContext.Provider
                value={{
                    ...this.state,
                    getData: this.getData,
                }}
            >
                {this.props.children}
            </MapContext.Provider>
        )
    }
}

const MapConsumer = MapContext.Consumer;

export { MapProvider, MapConsumer, MapContext };

export function withMapConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <MapConsumer>
                {value => <Component {...props} context={value} />}
            </MapConsumer>
        );
    };
}