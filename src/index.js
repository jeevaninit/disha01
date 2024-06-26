import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parent from './Parent'

/* import App from './App'; */

import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Counter from './Counter';
import Netflix from './Netflix';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Netflix />
    <Counter />
    {/* <App /> */}
    {/* <Bootstrapapp /> */}
    {/* <Hoc /> */}
    {/* <UseContactObject /> */}
{/* <UseContexthook /> */}
 {/*      <Navigationbar />
      <Bannercomp /> */}
  {/*     <Container /> */}
     {/*  <Navigationbar /> */}
  {/* <Netflix />  */}
    </BrowserRouter> 
{/*     <UseMemo /> */}
    {/* <UseCallback /> */}
{/*  <UseRef_02 /> */}
{/*     <UserRef /> */}
  {/*   <LifeCycleMethods /> */}
   {/*  <ApiwithAxios /> */}

  {/*   <UseEffect /> */}
  {/*   <UseStateHook /> */}
  {/*   <ConditionTesting04 /> */}
  {/*   <ConditionTesting3 /> */}
   {/*  <ConditionTesting02 /> */}
  {/*   <ConditionTest /> */}

  {/*   <Images /> */}
{/* <ReactMap /> */}

{/* <Parent /> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
