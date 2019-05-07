import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './AppBarKu';
import HotelCard from './HotelCard';
import SMap from './SampleMap';



class App extends Component {
      state = {
        open: false,
    };

    state = {
      open: false,
      hotels :[
        {judul: 'Hotel Trivago',tanggal:'13 September 2019',deskripsi:'Hotel murah fasilitas mewah'},
        {judul: 'Hotel Trivago',tanggal:'13 September 2019',deskripsi:'Hotel murah fasilitas mewah'},
        {judul: 'Hotel Trivago',tanggal:'13 September 2019',deskripsi:'Hotel murah fasilitas mewah'}
      ]
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    
    render(){
      return(
        <div className="row">
          <div className="col m12">
            <AppBar/>
            <SMap/>
            <br/>
            <div className="row">
              <div className="col m5">
                {this.state.hotels.map((data,key) => {
                  return(
                    <div key={key}>
                      <HotelCard key={key} judul={data.judul} tanggal={data.tanggal} deskripsi={data.deskripsi}/>
                      <br/>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default App;
