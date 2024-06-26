
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooks";
import React from "react";


export default function RequireAuth({
  children,
}: {children: JSX.Element}) {
  const authed = useAppSelector((state) => state.auth.authed)
  if (authed)
    return children
  return <Navigate to="/register"/>
}