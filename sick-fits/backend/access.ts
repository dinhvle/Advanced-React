import { ListAccessArgs } from './types';

// The access control return true or false value depending on the users' session.
export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}
