import Layout from './layouts/default/Layout'
import Home from './pages/homepage/Home'


const App = () => {

  return (
    <div className="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default App
