#!/usr/bin/env bash
MSG_FILE=".agents/CHANGE_MSG.txt"
if [ -f "$MSG_FILE" ]; then
  MSG=$(cat "$MSG_FILE")
else
  MSG="Agent: automated commit"
fi
python .agents/commit_agent.py "$MSG"