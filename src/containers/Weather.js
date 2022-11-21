import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import WeatherDataListItem from './WeatherDataListItem';

const Weather = () => {
  const weatherData = useSelector((state) => state.weather);
  const renderWeatherDataList = () =>
    _.map(weatherData, (obj, key) => {
      const location = obj;
      return <WeatherDataListItem id={key} key={key} weather={location} />;
    });

  return (
    <Row className="">
      <Col md={12}>{renderWeatherDataList()}</Col>
    </Row>
  );
};

export default Weather;
