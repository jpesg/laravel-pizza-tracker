import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import Table from "@/Components/Table";
import UpdatePizzaOrderForm from "@/Pages/Pizzas/Partials/UpdatePizzaOrderForm";

const columns = [
    'chef',
    'size',
    'status',
]
export default function Edit({auth, pizza}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order #{pizza.id}</h2>}
        >
            <Head title={'Order #' + pizza.id}></Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4 sm:p-8">
                        <UpdatePizzaOrderForm pizza={pizza} className={'max-w-xl'}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
