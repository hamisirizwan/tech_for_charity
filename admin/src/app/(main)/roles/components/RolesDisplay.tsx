"use client";
import React from "react";
import RolesTable from "./RolesTable";
import useRoles from "@/app/hooks/queries/useRoles";

function RolesDisplay() {
  const { data, isLoading } = useRoles();

  return (
    <section>
      {/* search will come here */}
    
      {isLoading ? <h1>loading..</h1> : <RolesTable roles={data} />}
    </section>
  );
}

export default RolesDisplay;
