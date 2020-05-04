import React, { Fragment } from "react";
import { fetchData } from "./Components/Services";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import CountrySelect from "./Components/CountrySelect/CountrySelect";
import DetailsTable from "./Components/DetailsTable/DetailsTable";
import { Pagination } from "./Components/Pagination/Pagination";
import './App.css';
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";

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
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
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
      this.setState({ data, country: country });
    }
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
      currentPage,
      detailsPerPage,
    } = this.state;
    if (!Global) {
      return <div>loading...</div>;
    }
    const global = !Global ? "loading..." : Global;
    const indexOfLastTable = currentPage * detailsPerPage;
    const indexOfFirstTable = indexOfLastTable - detailsPerPage;
    const currentDetailsPage = Countries.slice(
      indexOfFirstTable,
      indexOfLastTable
    );
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
            <DetailsTable countries={currentDetailsPage} />
            <Pagination
              detailsPerPage={detailsPerPage}
              totalDetails={Countries.length}
              paginate={this.paginate}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default App;
