import React, { useState } from 'react';
import { Wrapper } from './styles/App.styles';
import Tumbler from './components/Tumbler';
import List from './components/List';
import DataPicker from './components/DataPicker';
import Input from './components/Input';
import { DataArrivals, DataDepartures } from './data/data';



const App: React.FC = () => {


  return (
    <Wrapper>
      <Tumbler />
      <div>
        <Input />
        <DataPicker />
      </div>
      <List/>
    </Wrapper>
  );
}

export default App;
