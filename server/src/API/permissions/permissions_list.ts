interface ModuleRole {
    name:String,
    permissions:String[]
}

export const systemPermissions:ModuleRole[] = [
  {
    name:"user_access",
    permissions:["CREATE_ROLE", "EDIT_ROLE", "READ_ROLES", "DELETE_ROLES", "ASSIGN_ROLE"]
  },
  {
    name:"users",
    permissions:["APPROVE_USER", "REJECT_USER", "CREATE_USER", "VIEW_USERS","DEACTIVATE_USER", "ACTIVATE_USER"]
  }
]