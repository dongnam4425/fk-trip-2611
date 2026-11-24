"""src/template.html + src/trip-data.js + Motion 라이브러리를 합쳐 index.html을 만든다.
사용법: pip 없이 python3 src/build.py path/to/motion.js
"""
import sys, pathlib
root = pathlib.Path(__file__).resolve().parent
t = (root / "template.html").read_text(encoding="utf-8")
seed = (root / "trip-data.js").read_text(encoding="utf-8")
motion = pathlib.Path(sys.argv[1]).read_text(encoding="utf-8").replace("</script", "<\\/script")
out = t.replace("<script>/*MOTION*/</script>", "<script>" + motion + "</script>", 1).replace("/*SEED*/", seed, 1)
(root.parent / "index.html").write_text(out, encoding="utf-8")
print("index.html 생성 완료")
