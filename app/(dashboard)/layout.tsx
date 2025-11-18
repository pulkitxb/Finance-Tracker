import Header from "@/components/header";
import { Suspense } from 'react';

type props = {
    children: React.ReactNode
}
const DashboardLayout = ({ children }: props) => {
    return (
        <>
            <Suspense fallback={<div>Loading component...</div>}>
                <Header />
                <main className="px-3">
                    {children}
                </main>
            </Suspense>
        </>
    )
}

export default DashboardLayout;