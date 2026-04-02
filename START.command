#!/bin/bash
cd "$(dirname "$0")"

echo ""
echo "================================"
echo "  1X Technologies — NEO Website"
echo "================================"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed."
  echo ""
  echo "Please download it from: https://nodejs.org"
  echo "(Download the LTS version, install it, then double-click this file again)"
  echo ""
  read -p "Press Enter to close..."
  exit 1
fi

echo "✅ Node.js found: $(node -v)"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies (first time only — takes ~1 min)..."
  npm install
  echo ""
fi

echo "🚀 Starting dev server..."
echo ""
echo "➜ Open your browser to: http://localhost:3000"
echo ""
echo "(Press Ctrl+C in this window to stop the server)"
echo ""

# Auto-open browser after a short delay
sleep 2 && open http://localhost:3000 &

npm run dev
