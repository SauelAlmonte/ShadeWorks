import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO: verify Stripe webhook signature and handle subscription events
  const body = await req.text();
  void body;
  return NextResponse.json({ received: true });
}
