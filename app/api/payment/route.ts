import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan_id, telegram_id, email } = body;

    if (!plan_id || !telegram_id) {
      return NextResponse.json(
        { error: 'plan_id and telegram_id are required' },
        { status: 400 }
      );
    }

    // Определение суммы платежа
    const plans: Record<string, { name: string; price: number }> = {
      basic: { name: 'Базовый', price: 300 },
      premium: { name: 'Премиум', price: 500 },
      family: { name: 'Семейный', price: 800 },
    };

    const plan = plans[plan_id];
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid plan_id' },
        { status: 400 }
      );
    }

    // TODO: Интеграция с ЮKassa или CloudPayments
    // Здесь будет создание платежа через API платежной системы

    // Пример ответа для ЮKassa
    const payment = {
      id: `payment_${Date.now()}`,
      status: 'pending',
      amount: plan.price,
      currency: 'RUB',
      description: `Подписка ${plan.name} - SecureVPN`,
      confirmation_url: `https://yoomoney.ru/checkout/payments/v2/contract?orderId=example`,
      // В реальности здесь будет URL от платежной системы
      telegram_id,
      plan_id,
      created_at: new Date().toISOString(),
    };

    console.log('Payment created:', payment);

    return NextResponse.json({
      success: true,
      payment,
      message: 'Payment created successfully',
    });
  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const payment_id = searchParams.get('payment_id');

    if (!payment_id) {
      return NextResponse.json(
        { error: 'payment_id is required' },
        { status: 400 }
      );
    }

    // TODO: Проверка статуса платежа через API платежной системы
    const payment = {
      id: payment_id,
      status: 'succeeded', // pending, succeeded, canceled
      amount: 500,
      currency: 'RUB',
      paid_at: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, payment });
  } catch (error) {
    console.error('Get payment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
