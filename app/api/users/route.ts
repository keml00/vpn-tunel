import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { telegram_id, username, first_name, email } = body;

    if (!telegram_id) {
      return NextResponse.json(
        { error: 'telegram_id is required' },
        { status: 400 }
      );
    }

    // TODO: Сохранить пользователя в базу данных
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      telegram_id,
      username,
      first_name,
      email,
      created_at: new Date().toISOString(),
      subscription_status: 'trial',
      devices: [],
    };

    console.log('New user registered:', user);

    return NextResponse.json({
      success: true,
      user,
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const telegram_id = searchParams.get('telegram_id');

    if (!telegram_id) {
      return NextResponse.json(
        { error: 'telegram_id is required' },
        { status: 400 }
      );
    }

    // TODO: Получить пользователя из базы данных
    const user = {
      id: 'demo123',
      telegram_id,
      username: 'demo_user',
      subscription_status: 'active',
      devices: ['iPhone', 'MacBook'],
      traffic_used: '24.5 GB',
      traffic_limit: '100 GB',
    };

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
