import { z } from 'zod';
import { Tiers } from './LoginFormData';
import {
  signUpFormSchema,
  validationSchema,
  FormSchema,
} from './LoginValidationSchema';

export type TireIDType = typeof Tiers[number]['id'];

export const TireIDEnum: [TireIDType, ...TireIDType[]] = [
  Tiers[0].id,
  ...Tiers.slice(1).map((p) => p.id),
];

export type FormSchemaType = z.infer<typeof FormSchema>;

export type ResetType = {
  values: FormSchemaType;
};

export type FormContextType = {
  register: (name: string, options?: any) => {};
};