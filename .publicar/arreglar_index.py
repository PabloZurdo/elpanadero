"""Prepara el index.html del artefacto de Claude para la web pública de GitHub.

1. Quita el envoltorio que añade el artefacto (<html><head>…</head><body>) para que
   el título, las etiquetas og: (vista previa de WhatsApp) y los iconos queden en
   el <head> real, que es donde los leen WhatsApp, Google y Safari.
2. Desactiva el cargador de La Mesa, que solo funciona dentro de Claude.

Uso: python3 .publicar/arreglar_index.py index.html
Sale con error (código 1) si no encuentra lo esperado, para no publicar algo roto.
"""
import re
import sys

ruta = sys.argv[1]
s = open(ruta, encoding="utf-8").read()

# 1. Envoltorio del artefacto
m = re.match(r"\s*<!doctype html><html><head>(.*?)</head><body>\s*", s, re.S | re.I)
if m:
    cab = m.group(1)                      # charset, viewport y estilo base del artefacto
    cab = re.sub(r"<meta charset=utf8>", "", cab, flags=re.I)
    resto = s[m.end():]
    if re.match(r"<!doctype html>", resto, re.I):
        # La página ya trae su propio documento completo: se mete el estilo base en su <head>.
        estilo = re.findall(r"<style>.*?</style>", cab, re.S)
        resto = re.sub(r"(<head[^>]*>)", lambda x: x.group(1) + "".join(estilo), resto, count=1, flags=re.I)
        s = resto
    else:
        s = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n' + cab + "\n" + resto
elif "og:title" not in s[: s.lower().find("</head>")]:
    sys.exit("No reconozco la cabecera de index.html")

# 2. La Mesa
mesa = 'if (location.hash === "#mesa") { abrirMesa(); return; }'
if mesa in s:
    s = s.replace(mesa, "/* La Mesa solo funciona dentro de Claude */")
elif "La Mesa solo funciona dentro de Claude" not in s:
    sys.exit("No encuentro el cargador de La Mesa en index.html")

open(ruta, "w", encoding="utf-8").write(s)
print("index.html preparado")
