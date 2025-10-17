(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/.github/ISSUE_TEMPLATE/bug_report.md b/.github/ISSUE_TEMPLATE/bug_report.md
--- a/.github/ISSUE_TEMPLATE/bug_report.md
+++ b/.github/ISSUE_TEMPLATE/bug_report.md
@@ -0,0 +1,25 @@
+---
+name: Bug report
+title: "[Bug]: "
+labels: [bug]
+assignees: []
+---
+
+### Mô tả lỗi
+
+Mô tả ngắn gọn vấn đề.
+
+### Bước tái hiện
+1. 
+2. 
+3. 
+
+### Kết quả mong đợi
+
+
+### Ảnh chụp / log
+
+
+### Ngữ cảnh bổ sung
+
+
EOF
)
