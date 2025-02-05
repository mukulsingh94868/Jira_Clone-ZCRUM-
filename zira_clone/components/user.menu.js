"use client";

import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";
const UserMenu = () => {
    return (
        <UserButton
            appearance={{
                elements: {
                    avatarBox: "w-10 h-10",
                },
            }}
        >
            <UserButton.MenuItems>
                <UserButton.Link
                    label="My Organizations"
                    labelIcon={<ChartNoAxesGantt size={15} />}
                    href="/onboarding"
                />
                <UserButton.Action label="manageAccount" />
            </UserButton.MenuItems>
        </UserButton>
    );
};

export default UserMenu;


// prisma/schema.prisma
// datasource db {
//     provider  = "postgresql"
//     url  	    = env("DATABASE_URL")
//     // uncomment next line if you use Prisma <5.10
//     // directUrl = env("DATABASE_URL_UNPOOLED")
//   }

// DATABASE_URL="postgresql://neondb_owner:npg_HYwE3fX5dsRj@ep-damp-star-a8iaa0ov-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
// # uncomment next line if you use Prisma <5.10
// # DATABASE_URL_UNPOOLED="postgresql://neondb_owner:npg_HYwE3fX5dsRj@ep-damp-star-a8iaa0ov.eastus2.azure.neon.tech/neondb?sslmode=require"



// role--> mukulsingh94868
// password--> npg_W3xMk5NUGAFP


// "postgresql://mukulsingh94868:npg_W3xMk5NUGAFP@ep-damp-star-a8iaa0ov-pooler.eastus2.azure.neon.tech/zcrum?sslmode=require"