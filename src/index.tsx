import ReactDOM from 'react-dom/client';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from 'asset/Common/Theme';
import { CommonStyle } from 'asset/Common/Common';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CommonStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

