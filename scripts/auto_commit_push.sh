#!/bin/bash

# スクリプト実行前提：git init済み、リモート設定済み、トークン認証もOK

# 今日の日付
TODAY=$(date '+%Y-%m-%d')

# コミットメッセージ
MESSAGE="📘 ${TODAY} 学習記録追加"

# ファイル追加・コミット・プッシュ
git add .
git commit -m "${MESSAGE}"
git push

