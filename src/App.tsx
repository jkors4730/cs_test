import { FC } from 'react'
import { hatTitle, hatFioEncoded } from './components/data'
import Hat from './components/Hat/Hat'
import Table from './components/Table/Table'
import './App.scss'

const App: FC = () => {
  return (
    <>
      <Hat
        title={hatTitle}
        fio={hatFioEncoded}
        logo={true}
      />
      <Table />
    </>
  )
}

export default App
