import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

import settings from '../../content/settings/signup.json';
import { schema } from '../../components/SignupForm';

/**
 * @param {import("next/types").NextApiRequest} req
 * @param {import("next/types").NextApiResponse} res */

export default async function handler(req, res) {
    const data = schema.cast(JSON.parse(req.body));
    const valid = await schema.isValid(data);

    if (!valid) {
        return res.status(500);
    }

    const serviceAccountAuth = new JWT({
        email: settings.email,
        key: settings.key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(settings.id, serviceAccountAuth);
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow([data.name, data.class, data.whatsapp, 'NO']);

    res.status(200).json({ success: true });
}