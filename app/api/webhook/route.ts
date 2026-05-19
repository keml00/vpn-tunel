import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');

    if (authHeader !== `Bearer ${WEBHOOK_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { event, data } = body;

    console.log('Webhook received:', event, data);

    switch (event) {
      case 'user.registered':
        // Обработка регистрации пользователя
        console.log('New user registered via bot:', data);
        break;

      case 'subscription.created':
        // Обработка создания подписки
        console.log('New subscription:', data);
        break;

      case 'payment.received':
        // Обработка платежа
        console.log('Payment received:', data);
        break;

      default:
        console.log('Unknown event:', event);
    }

    return NextResponse.json({
      success: true,
      message: 'Webhook processed',
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
