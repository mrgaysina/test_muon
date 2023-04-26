import React, { useState } from 'react';
import { Wrapper, Filter } from './App.styles';
import Tumbler from './components/Tumbler/Tumbler';
import List from './components/List/List';
import Picker from './components/Picker/Picker';
import Input from './components/Input/Input';




const App: React.FC = () => {


  return (
    <Wrapper>
      <Tumbler />
      <Filter>
        <Input />
        <Picker />
      </Filter>
      <List />
    </Wrapper>
  );
}

export default App;
