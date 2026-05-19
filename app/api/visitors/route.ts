import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const VISITORS_FILE = path.join(process.cwd(), 'data', 'visitors.json');

function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function getVisitorData() {
  ensureDataDir();
  try {
    if (fs.existsSync(VISITORS_FILE)) {
      const data = fs.readFileSync(VISITORS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading visitors file:', error);
  }
  return { total: 0, unique: 0, lastUpdated: new Date().toISOString() };
}

function saveVisitorData(data: any) {
  ensureDataDir();
  try {
    fs.writeFileSync(VISITORS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving visitors file:', error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const data = getVisitorData();
    return NextResponse.json({
      success: true,
      visitors: data
    });
  } catch (error) {
    console.error('Get visitors error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    const data = getVisitorData();

    // Увеличиваем общий счетчик
    data.total = (data.total || 0) + 1;

    // Для уникальных посетителей используем sessionId
    if (sessionId) {
      data.unique = (data.unique || 0) + 1;
    }

    data.lastUpdated = new Date().toISOString();

    saveVisitorData(data);

    return NextResponse.json({
      success: true,
      visitors: data
    });
  } catch (error) {
    console.error('Update visitors error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
