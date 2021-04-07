import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

// The access control return true or false value depending on the users' session.
export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

export const permissions = {
  canManageProducts({ session }) {
    return session?.data.role?.canManageProducts;
  },
};
