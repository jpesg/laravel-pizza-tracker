import {Head} from "@inertiajs/react";
import PizzaStatus from "@/Pages/Pizzas/Partials/PizzaStatus.jsx";
import {useEffect} from "react";
import { router } from '@inertiajs/react'

const columns = [
    'chef',
    'size',
    'status',
]
export default function Edit({pizza}) {
    //websokets
    //server side events
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('xxx')
            router.reload({only: ['pizza']})
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div className={'max-w-3xl mx-auto py-12'}>
            <Head title={'Order #' + pizza.id}></Head>
            <div className={'py-8'}>
                PIZZA LOGO
            </div>
            <PizzaStatus pizza={pizza}></PizzaStatus>

            <div className={'text-center mt-4'}>
                <p className={'text-lg'}>{pizza.chef} started {pizza.status.toLowerCase()} your oder
                    {' '}<span className={'underline font-semibold'}>{pizza.last_updated}</span>
                </p>
            </div>
        </div>
    )
}
