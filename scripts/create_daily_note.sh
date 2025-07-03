#!/bin/bash

# エラー時に停止
set -e

# 今日の日付と曜日
TODAY=$(date '+%Y-%m-%d')
WEEKDAY=$(date '+%A')  # 例: Monday
YEAR=$(date '+%Y')
MONTH=$(date '+%m')

# パス設定
BASE_DIR="journal/${YEAR}/${MONTH}"
TARGET_FILE="${BASE_DIR}/${TODAY}.md"
TEMPLATE_FILE="templates/daily-template.md"
PRACTICE_DIR="${BASE_DIR}/practice_codes"
AI_CODE_DIR="${BASE_DIR}/ai_code_review"

# ディレクトリ作成（ノート用 + practice_codes）
mkdir -p "${BASE_DIR}"
mkdir -p "${PRACTICE_DIR}"
mkdir -p "${AI_CODE_DIR}"

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

# practice_codes フォルダがあることを通知
echo "📁 確認: ${PRACTICE_DIR} ディレクトリあり"
# AIコードレビュー用ディレクトリがあることを通知
echo "📁 確認: ${AI_CODE_DIR} ディレクトリあり"
