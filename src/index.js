import React from 'react'
import ReactDOM from 'react-dom'
import countriesData from './data/countries.js'

const root = document.getElementById('root')


class Header extends React.Component {
  render() {
    return (
      <div className='text-center'>
        <h1>Welcome to 30 days of React</h1>
        <h2>Random Country Selector</h2>
        <hr />
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    const imgStyle = {width :'300px', hight : '150px'}
    return (
      <div>
        <div className='row  justify-content-center'>
          <div className='col-6'>
            <div className='card p-3 shadow'>
              <img style={imgStyle} className='img-fluid d-block m-auto' src={this.props.country.flag} alt='country flag' />
              <h3 className='text-center'>{this.props.country.name}</h3>
              <div className='text-start'>
                <p><span className='fw-bold'>Capital</span>: {this.props.country.capital}</p>
                <p><span className='fw-bold'>Languages</span>: {this.props.country.languages.join(', ')}</p>
                <p><span className='fw-bold'>Population</span>: {this.props.country.population}</p>
              </div>
            </div>
            <div className='text-center'>
              <button onClick={this.props.selectCountry} className='btn btn-primary mt-3'>Select Country</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    country: countriesData[0]
  }

  selectCountry = () => {
    let country = countriesData[Math.floor(Math.random() * countriesData.length)]
    this.setState({country})
  }
  render() {
    return (
      <div>
        <Header />
        <Body country={this.state.country} selectCountry = {this.selectCountry} />
      </div>
    )
  }
}


ReactDOM.render(<App />, root)