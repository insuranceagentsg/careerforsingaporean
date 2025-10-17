(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
@@ -0,0 +1,14 @@
+# Đóng góp
+
+Cảm ơn bạn đã quan tâm đóng góp cho Headhunt Pro.
+
+## Quy tắc chung
+- Fork repo và tạo nhánh tính năng từ branch mặc định.
+- Tạo Pull Request kèm mô tả rõ ràng, liên kết issue nếu có.
+- Giữ cấu trúc và phong cách code nhất quán.
+
+## Quy trình
+1. Tạo issue mô tả đề xuất/bug.
+2. Thực hiện thay đổi trong nhánh mới.
+3. Tạo PR, điền checklist và chờ review.
+
EOF
)
