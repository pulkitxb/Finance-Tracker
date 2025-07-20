"use client"

import { useUser } from "@clerk/nextjs"

export const WelcomeMsg = () => {
    const { user } = useUser();

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium">Welcome Back{user?.firstName ? ", " : " "}{user?.firstName} 👋🏻</h2>
            <p>
                This is your Financial Overview Report
            </p>
        </div>
    )
}