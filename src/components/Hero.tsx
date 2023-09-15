import '../styles/global.css'

export default function Hero() {
    return(
        <section className='min-h-[50dvh] bg-zinc-100 dark:bg-zinc-800 '>
            <div className="min-h-[50dvh] flex flex-col justify-center container px-4 mx-auto">
                <h1>Page Title</h1>
                <h3>Page Description</h3>
            </div>
        </section>
    )
}