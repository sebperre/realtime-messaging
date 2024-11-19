#!/bin/bash
cd backend && npm install && cd ../frontend && npm install && npm run build

serve -s build -l 3000 &
serve -s build -l 3001 &

cd ..
cd backend
npm start &



