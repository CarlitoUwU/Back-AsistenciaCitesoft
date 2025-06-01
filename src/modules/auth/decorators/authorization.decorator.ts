import { SetMetadata } from '@nestjs/common';

export const AUTHORIZATION_METADATA_KEY = 'authorization';

export interface AuthorizationMetadata {
  roles?: Role[];
  permission: string;
  description?: string;
}

export enum Role {
  ADMIN = 'admin',
  ESTUDIANTE = 'estudiante',
}

export const Authorization = ({
  roles = [],
  permission,
  description,
}: AuthorizationMetadata) => {
  const rolesWithAdmin = roles.includes(Role.ADMIN)
    ? roles
    : [Role.ADMIN, ...roles];
  return SetMetadata(AUTHORIZATION_METADATA_KEY, {
    roles: rolesWithAdmin,
    permission,
    description,
  });
};
