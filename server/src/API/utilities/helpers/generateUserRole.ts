export default function generateUserPermissionString(
  module: String,
  permission: String
): String {
  const role_permission: String = `${permission}:${module}`;

  return role_permission;
}
