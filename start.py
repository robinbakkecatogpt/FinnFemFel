"""
Finn 18 Fel - Avdelningspresentation
=====================================
Dubbelklicka på denna fil för att starta!
Öppnar spelet i din webbläsare.
"""

import http.server
import socketserver
import webbrowser
import os
import threading

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

os.chdir(DIRECTORY)

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    """Serve files with no-cache headers to prevent stale config."""
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

Handler = NoCacheHandler

def open_browser():
    webbrowser.open(f"http://localhost:{PORT}")

# Försök hitta en ledig port
for port in range(PORT, PORT + 20):
    try:
        with socketserver.TCPServer(("", port), Handler) as httpd:
            print(f"╔══════════════════════════════════════════╗")
            print(f"║   Finn 18 Fel - Avdelningspresentation   ║")
            print(f"║                                          ║")
            print(f"║   Öppnar i webbläsaren...                ║")
            print(f"║   http://localhost:{port:<5}                 ║")
            print(f"║                                          ║")
            print(f"║   Tryck Ctrl+C för att stänga            ║")
            print(f"╚══════════════════════════════════════════╝")
            timer = threading.Timer(0.5, lambda: webbrowser.open(f"http://localhost:{port}"))
            timer.start()
            httpd.serve_forever()
    except OSError:
        continue
