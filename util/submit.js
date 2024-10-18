import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

import { attributes as settings } from '../content/forms.md';

/**
 * @param {import("next/types").NextApiRequest} req
 * @param {import("next/types").NextApiResponse} res */

export default async function submit(req, res, id, schema, order) {
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

  const doc = new GoogleSpreadsheet(settings[`${id}_id`], serviceAccountAuth);
  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow([...order.map(function (field) {
    return data[field];
  }), 'NO']);

  res.status(200).json({ success: true });
}