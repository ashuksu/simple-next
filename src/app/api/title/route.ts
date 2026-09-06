import path from 'node:path';
import fs from 'fs/promises';
import { cookies, headers } from 'next/headers';

export async function GET() {
  const headersLIst = await headers();
  const userAgents = headersLIst.get('user-agent');
  console.log(1, 'userAgents - ', userAgents);

  const cookiesLIst = await cookies();
  console.log(2, 'cookiesLIst - ', cookiesLIst);

  const getParsedData = async () => {
    const filePath = path.join(process.cwd(), 'public', 'data.json');

    try {
      const data = await fs.readFile(filePath);
      return JSON.parse(data.toString());
    } catch {
      return { title: 'no title' };
    }
  };

  const data = await getParsedData();
  return Response.json(data);
}
