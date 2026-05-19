import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { telegram_id, device_name } = body;

    if (!telegram_id) {
      return NextResponse.json(
        { error: 'telegram_id is required' },
        { status: 400 }
      );
    }

    // Генерация WireGuard конфигурации
    const privateKey = generateRandomKey();
    const publicKey = generateRandomKey();
    const ipAddress = `10.8.0.${Math.floor(Math.random() * 254) + 2}`;

    const config = `[Interface]
PrivateKey = ${privateKey}
Address = ${ipAddress}/24
DNS = 1.1.1.1, 8.8.8.8

[Peer]
PublicKey = ${publicKey}
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0, ::/0
PersistentKeepalive = 25`;

    // TODO: Сохранить конфигурацию в базу данных
    console.log('Config generated for user:', telegram_id);

    return NextResponse.json({
      success: true,
      config,
      device_name: device_name || 'Device',
      qr_code_url: `/api/config/qr?data=${encodeURIComponent(config)}`,
      download_url: `/api/config/download?telegram_id=${telegram_id}`,
    });
  } catch (error) {
    console.error('Config generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateRandomKey(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let key = '';
  for (let i = 0; i < 44; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}
