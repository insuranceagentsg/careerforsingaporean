(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
@@ -0,0 +1,12 @@
+# Code of Conduct
+
+Chúng tôi cam kết xây dựng cộng đồng thân thiện, chuyên nghiệp.
+
+## Nguyên tắc
+- Tôn trọng mọi người, không phân biệt.
+- Giao tiếp tích cực, mang tính xây dựng.
+- Không chấp nhận quấy rối dưới mọi hình thức.
+
+## Báo cáo vi phạm
+Gửi email tới `conduct@headhunt.pro`. Chúng tôi sẽ xử lý nhanh chóng và bảo mật.
+
EOF
)
