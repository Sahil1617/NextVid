import { getUploadAuthParams } from "@imagekit/next/server"
import { NextResponse } from "next/server"

export async function GET() {

    try {
        const authenticationParameters = getUploadAuthParams({
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string, // Never expose this on client side
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string, 
    })

    return Response.json({ authenticationParameters, publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY })
    } catch (error) {
        return NextResponse.json({
            error:"Error generating authentication parameters"
        }, {status: 500})
    }   
}