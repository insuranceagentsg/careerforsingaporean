(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/.github/pull_request_template.md b/.github/pull_request_template.md
--- a/.github/pull_request_template.md
+++ b/.github/pull_request_template.md
@@ -0,0 +1,11 @@
+## Mô tả
+- Tóm tắt thay đổi và lý do
+
+## Liên quan
+- Close #<issue-number>
+
+## Checklist
+- [ ] Đã tự review
+- [ ] Cập nhật tài liệu nếu cần
+- [ ] Build/Pages vẫn hoạt động
+
EOF
)
