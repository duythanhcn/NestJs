import { applyDecorators, UseGuards, CanActivate } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

interface Decorators {
  useGuards: (CanActivate | Function)[];
}
export function Auth({ useGuards }) {
  return applyDecorators(
    UseGuards(useGuards),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized"' })
  );
}
