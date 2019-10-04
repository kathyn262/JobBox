import React from 'react';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';
import JobBoxApi from './JobBoxApi';

class CompanyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let result = await JobBoxApi.searchCompanies();
    this.setState({ companies: result });
  }

  async searchCompanies(query) {
    let result = await JobBoxApi.searchCompanies(query);
    this.setState({ companies: result });
  }

  render() {
    let companies = this.state.companies ? this.state.companies.map(c => <CompanyCard company={c} key={c.handle}/>) : null;
    return (
      <div>
        <SearchBar search={this.searchCompanies}/>
        {companies}
      </div>
    );
  }
}

export default CompanyList;