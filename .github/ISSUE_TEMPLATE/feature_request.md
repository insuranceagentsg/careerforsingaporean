(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/.github/ISSUE_TEMPLATE/feature_request.md b/.github/ISSUE_TEMPLATE/feature_request.md
--- a/.github/ISSUE_TEMPLATE/feature_request.md
+++ b/.github/ISSUE_TEMPLATE/feature_request.md
@@ -0,0 +1,16 @@
+---
+name: Feature request
+title: "[Feature]: "
+labels: [enhancement]
+assignees: []
+---
+
+### Vấn đề cần giải quyết
+
+
+### Giải pháp đề xuất
+
+
+### Phạm vi & ưu tiên
+
+
EOF
)
