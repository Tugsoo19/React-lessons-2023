import { ReactNode } from "react";
import Header from "./header";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <main>
                <Header />
                {children}
            </main>
        </div>
    )
}