#!/bin/bash
# Installation and First Run Script for Wedding Car Rental Website

echo "🎯 Prestige Wedding Cars - Installation Script"
echo "=============================================="
echo ""

# Navigate to project directory
cd "$(dirname "$0")" || exit

echo "📦 Installing dependencies..."
npm install

echo ""
echo "⚙️  Creating environment file..."
if [ ! -f .env.local ]; then
    cp .env.local.example .env.local
    echo "✅ .env.local created from template"
    echo "📝 Please edit .env.local with your contact information"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "✨ Installation complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Edit .env.local with your contact details"
echo "   2. Add vehicle images to public/images/vehicles/"
echo "   3. Run: npm run dev"
echo "   4. Open: http://localhost:3000"
echo ""
echo "📚 For more information, see README.md"
