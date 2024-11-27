import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    MODERATOR = "MODERATOR",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN"
}


registerEnumType(Role, { name: 'Role', description: undefined })
