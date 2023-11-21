interface ModuleRole {
    name:String,
    permissions:String[]
}

export const systemPermissions:ModuleRole[] = [
  {
    name:"USER_ACCESS",
    permissions:["CREATE_ROLE", "EDIT_ROLE", "READ_ROLES", "DELETE_ROLES", "ASSIGN_ROLE"]
  },
  {
    name:"USERS",
    permissions:["APPROVE_USER", "REJECT_USER", "CREATE_USER", "VIEW_USERS","DEACTIVATE_USER", "ACTIVATE_USER"]
  }
]