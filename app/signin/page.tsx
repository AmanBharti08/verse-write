export default function SignIn(){
    return (
        <main className="w-full h-full bg-zinc-950 flex justify-center items-center">
            <section className="flex flex-col items-center gap-10 p-10 rounded-2xl bg-black shadow-white shadow w-120">
                <h1 className="text-white text-2xl font-bold">SIGN IN</h1>
                <form action="" method="post" className="flex flex-col gap-5 w-full">
                    <input type="text" required placeholder="Email" className="bg-zinc-800 text-gray-400 px-5 py-2 rounded-4xl"/>
                    <input type="text" required placeholder="Password" className="bg-zinc-800 text-gray-400 px-5 py-2 rounded-4xl"/>
                    <button type="submit" className="bg-zinc-950 text-white shadow shadow-white w-30 flex justify-center items-center rounded-2xl px-3 py-2">Sign In</button>
                </form>
            </section>
        </main>
    )
}