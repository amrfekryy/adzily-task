import "./App.css";
import Stepper from "./stepper";
import * as sampleData from './sample_data'
import { useApp } from './helpers'

export default function App() {
  const appStore = useApp(sampleData)  
  const {
    singers, albums, songs,
    setSinger, setAlbum, setSong
  } = appStore

  console.log('singers', singers)
  console.log('albums', albums)
  console.log('songs', songs)

  return (
    <div className="App">
      <Stepper appStore={appStore}/>
    </div>
  );
}
