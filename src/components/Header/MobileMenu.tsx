import React from 'react';

function Link({href, children}:{href: string, children: React.ReactNode}){
    return <a href={href} className='text-center py-2 rounded-full bg-slate-200 text-gray-800'>
        {children}
    </a>
}

export default function MobileMenu() {
    const [active, setActive] = React.useState<boolean>(false);

    return <>
        <div className="flex flex-col justify-between h-6 w-10 cursor-pointer" onClick={() => setActive(true)}>
            {Array(3).fill(false).map(() => {
                return <div className='h-1 w-full bg-blue-900 rounded-full'></div>
            })}
        </div>
        <div className={`z-99 px-4 py-6 lg:hidden fixed flex flex-col top-30 left-0 inset-0 bg-white transition-all invisible opacity-0 ${active && "!top-0 visible opacity-100"}`}>
            <div className='flex justify-end px-2'>
                <div className='relative w-10 h-10 cursor-pointer' onClick={() => setActive(false)}>
                    <div className='absolute w-full h-1 bg-blue-900 rotate-45 top-[50%] -translate-y-[50%] rounded-full'></div>
                    <div className='absolute w-full h-1 bg-blue-900 -rotate-45 top-[50%] -translate-y-[50%] rounded-full'></div>
                </div>
            </div>
            <div className='mt-5 flex flex-col justify-between grow'>
                <div className='flex flex-col gap-2'>
                    <Link href='/pricing'>Pricing</Link>
                    <Link href='https://docs.warmbly.com'>API</Link>
                    <Link href='/learn'>Learn</Link>
                    <Link href='/warmup'>Email Warmup</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <a href="https://app.warmbly.com/auth/login" className="text-center px-5 py-3 border border-blue-500 text-blue-800 transition hover:bg-blue-50 rounded-full">Login</a>
                    <a href="https://app.warmbly.com/auth/register" className="text-center px-5 py-3 bg-blue-500 hover:bg-blue-600 transition text-gray-50 rounded-full">Get started for free</a>
                </div>
            </div>
        </div>
    </>
}