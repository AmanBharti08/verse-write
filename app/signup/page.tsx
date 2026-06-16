import { headers } from "next/headers"
import { useState } from "react"

export default function SignUp(){

    const [formData,setFormData] = useState<{username: string;email: string;password:string}>({username:"",email:"",password:""})

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await fetch("/api/sign/signup",{
                method: `POST`,
                headers: {"Content-Type": "application-json"},
                body: JSON.stringify(formData),
            })
        }
    }


    return (
        <main className="w-full h-full bg-zinc-950 flex justify-center items-center">
            <section className="flex flex-col items-center gap-10 p-10 rounded-2xl bg-black shadow-white shadow w-120">
                <h1 className="text-white text-2xl font-bold">SIGN UP</h1>
                <form action="" onSubmit={handleSubmit} method="post" className="flex flex-col gap-5 w-full">
                    <input type="text" required placeholder="Username" name="username" className="bg-zinc-800 text-gray-400 px-5 py-2 rounded-4xl"/>
                    <input type="email" required placeholder="Email" name="email" className="bg-zinc-800 text-gray-400 px-5 py-2 rounded-4xl"/>
                    <input type="password" required placeholder="Password" name="password"  className="bg-zinc-800 text-gray-400 px-5 py-2 rounded-4xl"/>
                    <button type="submit" className="bg-zinc-950 text-white shadow shadow-white w-30 flex justify-center items-center rounded-2xl px-3 py-2">Sign In</button>
                </form>
            </section>
        </main>
    )
}