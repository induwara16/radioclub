import { object, string } from "yup";

export const signup = object({
  name: string().trim().required().label('Name'),
  class: string().uppercase().trim().required().label('Class'),
  whatsapp: string().matches(/^\d+$/g, 'Must only contain digits from 0-9').min(10).required().label('WhatsApp no.')
});

export const contact = object({
  name: string().trim().required().label('Name'),
  email: string().email().trim().required().label('E-mail'),
  message: string().max(5000).trim().required().label('Message')
});