param(
    [string]$Message = $(Get-Content -Raw -ErrorAction SilentlyContinue -Path ".agents/CHANGE_MSG.txt" -ErrorAction SilentlyContinue)
)

if (-not $Message) {
    $Message = "Agent: automated commit"
}

python .agents/commit_agent.py $Message