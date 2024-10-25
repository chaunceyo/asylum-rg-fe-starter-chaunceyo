import React from 'react';
import ReactDOM from 'react-dom';
import Auth0ProviderWithHistory from './components/pages/Auth0/auth0-provider-with-history'; // import Auth0 component
import Profile from './components/pages/Auth0/Profile'; // import Profile component
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

// import { TablePage } from './components/pages/Table';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;
  return (
    <Auth0ProviderWithHistory> {/* Wrap application with Auth0ProviderWithHistory */}
      <Layout>
        <Header
          style={{
            height: '10vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: primary_accent_color,
          }}
        >
          <HeaderContent />
        </Header>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/graphs" component={GraphsContainer} />
          <Route path='/profile' component={Profile}/>  {/* add Route to Profile component*/}
          <Route component={NotFoundPage} />
        </Switch>
        <Footer
          style={{
            backgroundColor: primary_accent_color,
            color: '#E2F0F7',
          }}
        >
          <FooterContent />
        </Footer>
        <Footer
          style={{
            backgroundColor: primary_accent_color,
            padding: 0,
          }}
        >
          <SubFooter />
        </Footer>
      </Layout>
    </Auth0ProviderWithHistory>
  );
}
