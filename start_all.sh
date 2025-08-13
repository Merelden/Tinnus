#!/bin/bash

echo "🔄 Запуск Django..."
cd /root/project/hearing_project || exit 1
pkill -f "manage.py runserver" || true
nohup python3 manage.py runserver 0.0.0.0:8000 > ../django.log 2>&1 &

echo "🟢 Запуск React dev..."
cd /root/project/hearing-frontend || exit 1
pkill -f "vite" || pkill -f "react-scripts" || true
nohup npm run dev > ../react-dev.log 2>&1 &
