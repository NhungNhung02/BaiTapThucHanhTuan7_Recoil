import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil' // Thêm dòng này
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)