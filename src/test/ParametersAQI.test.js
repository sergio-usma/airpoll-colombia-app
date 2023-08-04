import { render, screen } from '@testing-library/react';
import ParametersAQI from '../components/ParametersAQI';

describe('ParametersAQI component', () => {
  it('renders the ParametersAQI component with the given values', () => {
    const props = {
      aqi: 3,
      co: 2.5,
      no: 1.1,
      no2: 0.8,
      o3: 0.5,
      so2: 0.2,
      pm25: 10,
      pm10: 20,
      nh3: 0.3,
    };

    const parametersAQI = (
      <ParametersAQI
        aqi={props.aqi}
        co={props.co}
        no={props.no}
        no2={props.no2}
        o3={props.o3}
        so2={props.so2}
        pm25={props.pm25}
        pm10={props.pm10}
        nh3={props.nh3}
      />
    );

    render(parametersAQI);

    expect(screen.getByText('Ammonia:')).toBeInTheDocument();
    expect(screen.getByText(`${props.nh3} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText('Carbon:')).toBeInTheDocument();
    expect(screen.getByText(`${props.co} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText('Nitrogen Dioxide:')).toBeInTheDocument();
    expect(screen.getByText(`${props.no2} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText('Nitrogen Monoxide:')).toBeInTheDocument();
    expect(screen.getByText(`${props.no} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText('Ozone:')).toBeInTheDocument();
    expect(screen.getByText(`${props.o3} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText('Particulates PM2.5:')).toBeInTheDocument();
    expect(screen.getByText(`${props.pm25} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText('Particulates PM10:')).toBeInTheDocument();
    expect(screen.getByText(`${props.pm10} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText('Sulphur Dioxide:')).toBeInTheDocument();
    expect(screen.getByText(`${props.so2} μg/m3`)).toBeInTheDocument();
    expect(screen.getByText(`Air Quality Index: ${props.aqi} (Moderate)`)).toBeInTheDocument();
  });
});
