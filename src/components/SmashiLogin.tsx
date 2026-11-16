'use client';
import React, {useState} from 'react';
import '../styles/smashi-onboarding.css';
export type SmashiLoginProps={logoSrc?:string;onLogin:(email:string,password:string)=>void;onSignup:()=>void;onForgotPassword:()=>void;loading?:boolean;error?:string};
export default function SmashiLogin({logoSrc='/smashi/brand/smashi-logo-horizontal-raster.png',onLogin,onSignup,onForgotPassword,loading=false,error}:SmashiLoginProps){
 const[email,setEmail]=useState('');const[password,setPassword]=useState('');
 return <main className="sm-auth"><div className="sm-auth__panel"><img className="sm-auth__logo" src={logoSrc} alt="Smashi"/><p className="sm-auth__eyebrow">PLAY · CONNECT · GROW</p><h1>Welcome back</h1><p className="sm-auth__subtitle">Your badminton training, made personal.</p><form onSubmit={e=>{e.preventDefault();onLogin(email,password)}}><label>Email<input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label>{error&&<p role="alert">{error}</p>}<button className="sm-auth__primary" disabled={loading} type="submit">{loading?'Signing in…':'Log in'}</button></form><button className="sm-auth__link" onClick={onForgotPassword}>Forgot password?</button><p>New to Smashi? <button className="sm-auth__link" onClick={onSignup}>Create an account</button></p></div></main>
}
