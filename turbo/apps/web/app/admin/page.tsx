import exp from "constants";
import React from "react";
import { Greeting } from "@repo/ui/greeting";
function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      <Greeting children={<Butner />} />
      <p>This is the admin page.</p>
    </div>
  );
}
function Butner() {
  return (
    <div>
      <h1>Butner</h1>
      <p>This is the butner page.</p>
    </div>
  );
}
export default Admin;
