import "./App.css";
import Stepper from "./stepper";
import * as sampleData from './sample_data'
import { useApp } from './helpers'

export default function App() {
  const {
    singers, albums, songs,
    setSinger, setAlbum, setSong
  } = useApp(sampleData)  

  console.log('singers', singers)
  console.log('albums', albums)
  console.log('songs', songs)

  return (
    <div className="App">

      <button onClick={() => setSinger({type: 'check', id: '1'})}>check singer 1</button>
      <button onClick={() => setSinger({type: 'check', id: '2'})}>check singer 2</button>
      <button onClick={() => setSinger({type: 'uncheck', id: '1'})}>uncheck singer 1</button>

      <button onClick={() => setAlbum({type: 'check', id: '4'})}>check album 4</button>
      <button onClick={() => setAlbum({type: 'check', id: '5'})}>check album 5</button>
      <button onClick={() => setAlbum({type: 'uncheck', id: '6'})}>uncheck album 6</button>

      <button onClick={() => setSong({type: 'check', id: '11'})}>check song 11</button>
      <button onClick={() => setSong({type: 'uncheck', id: '1'})}>uncheck song 1</button>
      <input type="checkbox" checked={false} />
      <Stepper />

    </div>
  );
}
