"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("4428a896-d249-41ca-b94e-c302bff18d62");
    }, []);

    return null;
}