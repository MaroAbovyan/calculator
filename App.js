import React from 'react';
import './App.css';
import Button from './components/Button';


function App() {
  let [query, setQuery] = React.useState('')

  let onButtonClick = (el) => {
    if (query === '' && (el !== '-' && isNaN(Number(el)))) { //skzbum chenq grum tiv 
      return
    }
    if (query !== '' && isNaN(Number(query[query.length - 1])) && isNaN(Number(el)) && el !== 'c') {//verjin element@ symbol a, avelacnum enq symbol, avelacrac@ 'c'n chi
      let a = query.slice(0, -1) + el
      setQuery(a)
    } else {
      switch (el) {
        case 'c': {
          setQuery('')
          break
        }
        case '=': {
          setQuery(eval(query))
          break
        }
        default: {
          setQuery(query + el)
        }
      }
    }

  }


  return (
    <>
    <div style={{width:'160px'}}>
      <div style={{ height: '20px', backgroundColor:'lightgray', width:'100%', overflow:'hidden' }} >{query}</div>
      <Button label={'1'} onClick={onButtonClick} />
      <Button label={'2'} onClick={onButtonClick} />
      <Button label={'3'} onClick={onButtonClick} />
      <Button label={'c'} onClick={onButtonClick} />
      <br />
      <Button label={'4'} onClick={onButtonClick} />
      <Button label={'5'} onClick={onButtonClick} />
      {/* <br/> */}
      <Button label={'6'} onClick={onButtonClick} />
      <Button label={'/'} onClick={onButtonClick} />
      <br />
      <Button label={'7'} onClick={onButtonClick} />
      <Button label={'8'} onClick={onButtonClick} />
      <Button label={'9'} onClick={onButtonClick} />
      <Button label={'-'} onClick={onButtonClick} />
      <br />
      <Button label={'+'} onClick={onButtonClick} />
      <Button label={'0'} onClick={onButtonClick} />
      <Button label={'*'} onClick={onButtonClick} />
      <Button label={'='} onClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
