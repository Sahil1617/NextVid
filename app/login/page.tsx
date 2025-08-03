"use client";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn('credentials', { email, password, redirect: false });

        if(result?.error) {
            alert(result.error);
            return;
        }
        router.push('/');
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
        <div>
            <button onClick={() => signIn('google')}>Login with Google</button>
            <button onClick={() => signIn('github')}>Login with Github</button>
        </div>
        <div>
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    </div>
  )
}

export default LoginPage