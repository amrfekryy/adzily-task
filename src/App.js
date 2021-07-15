import "./App.css";
import Stepper from "./stepper";
import Receipt from './receipt'
import * as sampleData from './sample_data'
import { useApp } from './helpers'

export default function App() {
  const appStore = useApp(sampleData)  
  // const {
  //   singers, albums, songs, totals, form,
  //   setSinger, setAlbum, setSong
  // } = appStore

  // console.log('singers', singers)
  // console.log('albums', albums)
  // console.log('songs', songs)

  console.log('form', form)

  return (
    <div className="App">
      {form.submitted? <Receipt appStore={appStore}/> : <Stepper appStore={appStore}/>}
    </div>
  );
}
