(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/site/assets/js/main.js b/site/assets/js/main.js
--- a/site/assets/js/main.js
+++ b/site/assets/js/main.js
@@ -0,0 +1,22 @@
+document.addEventListener('DOMContentLoaded',()=>{
+  const year = new Date().getFullYear();
+  const yearEl = document.querySelector('[data-year]');
+  if(yearEl) yearEl.textContent = year;
+
+  const filterForm = document.getElementById('jobs-filter');
+  if(filterForm){
+    filterForm.addEventListener('input',()=>{
+      const q = (document.getElementById('q').value||'').toLowerCase();
+      const loc = document.getElementById('location').value;
+      const type = document.getElementById('type').value;
+      document.querySelectorAll('[data-job]').forEach(row=>{
+        const title = row.getAttribute('data-title').toLowerCase();
+        const location = row.getAttribute('data-location');
+        const jtype = row.getAttribute('data-type');
+        const ok = (!q || title.includes(q)) && (!loc || location===loc) && (!type || jtype===type);
+        row.style.display = ok ? '' : 'none';
+      });
+    });
+  }
+});
+
EOF
)
