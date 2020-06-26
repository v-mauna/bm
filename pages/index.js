import Layout from '../components/layout'
import Home from './home'

const Index = () => (
  <Layout>
    <div>
      <Home />
    </div>

    <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    width: 100%;
    margin-bottom: auto;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
  }
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  }
`}</style>
  </Layout>
)

export default Index
