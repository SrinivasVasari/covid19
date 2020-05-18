import React, { Fragment } from "react";
import { fetchData, fetchStates } from "./Components/Services";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import CountrySelect from "./Components/CountrySelect/CountrySelect";
import StateSelect from "./Components/StateSelect/StateSelect";
import DistrictSelect from "./Components/DistrictSelect/DistrictSelect";
import "./App.css";

class App extends React.Component {
  state = {
    loading: false,
    data: {
      Countries: [],
      Date: "",
      Global: {},
    },
    country: "",
    currentPage: 1,
    detailsPerPage: 25,
    statewiseData: {},
    districtData: {},
    slectedState: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedStateData = await fetchStates();
    this.setState({
      data: fetchedData,
      statewiseData: fetchedStateData,
    });
  }

  handleClick = async () => {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  };
  handleCountryChange = async (country) => {
    if (country === "Global") {
      const fetchedData = await fetchData(country);
      this.setState({
        data: fetchedData,
      });
    } else {
      let countryValue = this.state.data.Countries.filter(function (item) {
        return item.Country === country;
      });
      let data = { ...this.state.data };
      data.Global = countryValue[0];
      this.setState({ data });
    }
  };
  handleStateChange = async (state) => {
    if (state === 'Gloabl') {
      return <div>Please select State...</div>
    }

    const { statewiseData } = this.state;
    const filteredData = Object.keys(statewiseData)
      .filter((key) => state.includes(key))
      .reduce((obj, key) => {
        obj[key] = statewiseData[key];
        return obj;
      }, {});
    this.setState({
      districtData: filteredData,
      slectedState: state,
      loading: true,
    });
  };

  paginate = (e, pageNumber) => {
    e.preventDefault();
    this.setState({
      currentPage: pageNumber,
    });
  };
  render() {
    const {
      data: { Global, Countries },
      statewiseData,
    } = this.state;
    const statesList = Object.keys(statewiseData);
    if (!Global) {
      return <div>loading...</div>;
    }
    const global = !Global ? "loading..." : Global;

    return (
      <Fragment>
        <div className="container">
          <Header />
          <div className="main-content">
            <CountrySelect
              handleCountryChange={this.handleCountryChange}
              handleClick={this.handleClick}
              countries={Countries}
            />
            <Cards global={global} date={this.state.data.Date} />
            <StateSelect
              statesList={statesList}
              handleStateChange={this.handleStateChange}
            />
            <DistrictSelect
              data={this.state.districtData}
              loading={this.state.loading}
              slectedState={this.state.slectedState}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default App;
