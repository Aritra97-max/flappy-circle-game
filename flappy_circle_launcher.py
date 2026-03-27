"""
Flappy Circle Game Launcher
A standalone launcher for the Flappy Circle browser game
"""

import os
import sys
import webbrowser
import http.server
import socketserver
import threading
from pathlib import Path

# Game configuration
PORT = 8765
GAME_FILE = "game-standalone.html"

def get_game_path():
    """Get the path to the game HTML file"""
    if getattr(sys, 'frozen', False):
        # Running as compiled executable
        base_path = Path(sys._MEIPASS)
    else:
        # Running as script
        base_path = Path(__file__).parent

    return base_path / GAME_FILE

def start_server(port, game_path):
    """Start a simple HTTP server"""
    os.chdir(game_path.parent)

    class QuietHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, format, *args):
            pass  # Suppress server logs

    with socketserver.TCPServer(("", port), QuietHandler) as httpd:
        print(f"🎮 Flappy Circle Game Server Running...")
        print(f"📂 Serving from: {game_path.parent}")
        print(f"🌐 Local URL: http://localhost:{port}/{GAME_FILE}")
        print(f"\n✨ Game should open in your browser automatically!")
        print(f"❌ Close this window to stop the game server.\n")
        httpd.serve_forever()

def main():
    """Main launcher function"""
    print("=" * 50)
    print("  FLAPPY CIRCLE GAME LAUNCHER")
    print("=" * 50)
    print()

    game_path = get_game_path()

    if not game_path.exists():
        print(f"❌ Error: Game file not found at {game_path}")
        print("Please ensure game-standalone.html is in the same folder.")
        input("\nPress Enter to exit...")
        sys.exit(1)

    # Start server in background thread
    server_thread = threading.Thread(
        target=start_server,
        args=(PORT, game_path),
        daemon=True
    )
    server_thread.start()

    # Wait a moment for server to start
    import time
    time.sleep(1)

    # Open game in default browser
    game_url = f"http://localhost:{PORT}/{GAME_FILE}"
    webbrowser.open(game_url)

    try:
        # Keep the server running
        server_thread.join()
    except KeyboardInterrupt:
        print("\n\n👋 Thanks for playing! Goodbye!")
        sys.exit(0)

if __name__ == "__main__":
    main()
