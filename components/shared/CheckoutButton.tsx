"use client"
import { IEvent } from "@/lib/database/models/event.model"
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import CheckOut from "./CheckOut";

const CheckoutButton = ({ event }: { event: IEvent }) => {
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string
    const hasEventFinished = new Date(event.startDateTime) < new Date();
    return (
        <div className="flex items-center gap-3">
            {hasEventFinished ?
                <p className="p-2 text-red-400">Tickets are no longer available.</p> :
                <>
                    <SignedOut>
                        <Button asChild className="button rounded-full" size="lg">
                            <Link href="/sign-in">Get ticket</Link>
                        </Button>
                    </SignedOut>

                    <SignedIn>
                        <CheckOut event={event} userId={userId} />
                    </SignedIn>
                </>
            }
        </div>
    )
}

export default CheckoutButton