#!/bin/bash

# エラー時に停止
set -e

# 今日の日付と曜日（日本語に変換も可能）
TODAY=$(date '+%Y-%m-%d')
WEEKDAY=$(date '+%A')  # 例: Monday, Tuesday
YEAR=$(date '+%Y')
MONTH=$(date '+%m')

# パス設定
TARGET_DIR="journal/${YEAR}/${MONTH}"
TARGET_FILE="${TARGET_DIR}/${TODAY}.md"
TEMPLATE_FILE="templates/daily-template.md"

# ディレクトリ作成
mkdir -p "${TARGET_DIR}"

# ファイルがなければテンプレートから作成
if [[ ! -f "${TARGET_FILE}" ]]; then
    {
      echo "# 📅 ${TODAY} (${WEEKDAY})"
      echo
      cat "${TEMPLATE_FILE}"
    } > "${TARGET_FILE}"
    
    echo "✅ 作成: ${TARGET_FILE}"
else
    echo "⚠️  既に存在: ${TARGET_FILE}"
fi
