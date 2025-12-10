import { NextRequest, NextResponse } from 'next/server';

/**
 * API route handler for legacy mg-assets requests
 * Returns 410 Gone to indicate the resource is permanently removed
 * This prevents 404 errors for legacy asset references
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join('/');
  
  // Return 410 Gone - resource permanently removed
  // This prevents 404 errors in logs while clearly indicating the resource is gone
  return new NextResponse(null, {
    status: 410,
    statusText: 'Gone',
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': 'text/plain',
    },
  });
}
