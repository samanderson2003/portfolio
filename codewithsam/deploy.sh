#!/bin/bash

# Sam Anderson Y Portfolio Deployment Script
echo "🚀 Deploying Sam Anderson Y Portfolio..."

# Create deployment directory
mkdir -p deploy

# Copy files to deployment directory
echo "📁 Copying files..."
cp -r *.html css js deploy/
cp README.md deploy/

# Optional: Minify CSS and JS files
echo "🗜️  Optimizing files..."

# Start local server for testing
echo "🌐 Starting local server..."
echo "Portfolio will be available at: http://localhost:3000"
echo "Press Ctrl+C to stop the server"

# Start Python HTTP server
cd deploy
python3 -m http.server 3000
