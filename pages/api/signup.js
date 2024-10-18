import { signup as schema } from '../../util/schemas';
import submit from '../../util/submit';

export default async function handler(req, res) {
    await submit(req, res, 'signup', schema, ['name', 'class', 'whatsapp']);
}