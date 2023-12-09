import React from "react";
import RolesDisplay from "./components/RolesDisplay";
import CreateRoleModal from "./components/createRoleModal";
import TopRoleSection from "./components/TopRoleSection";

function Roles() {
  return (
    <main>
      {/* top section with name and buttons */}
      <TopRoleSection />
      <RolesDisplay />
      <CreateRoleModal />
    </main>
  );
}

export default Roles;
