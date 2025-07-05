'use client';

export function DebugEnv() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const nodeEnv = process.env.NODE_ENV || '';

  // Only show in development or when explicitly enabled
  const showDebug =
    process.env.NODE_ENV === 'development' ||
    process.env.NEXT_PUBLIC_SHOW_DEBUG === 'true';

  if (!showDebug) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/90 text-white p-4 rounded-lg font-mono text-xs">
      <div className="text-green-400 font-bold mb-2">🔧 Debug Environment</div>
      <div>
        <strong>NEXT_PUBLIC_BASE_PATH:</strong> "{basePath}"
      </div>
      <div>
        <strong>NODE_ENV:</strong> "{nodeEnv}"
      </div>
      <div>
        <strong>Current Path:</strong>{' '}
        {typeof window !== 'undefined' ? window.location.pathname : 'SSR'}
      </div>
      <div>
        <strong>Current Origin:</strong>{' '}
        {typeof window !== 'undefined' ? window.location.origin : 'SSR'}
      </div>
      <div>
        <strong>Full URL:</strong>{' '}
        {typeof window !== 'undefined' ? window.location.href : 'SSR'}
      </div>
    </div>
  );
}
