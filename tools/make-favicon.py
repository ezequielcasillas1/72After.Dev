"""Render the 72After typographic favicon: black rounded square + white "72" in Velodrome."""

from PIL import Image, ImageDraw, ImageFont

FONT = r"C:\Dev\72After.Dev\public\fonts\Velodrome.ttf"
FAVICON = r"C:\Dev\72After.Dev\public\favicon.ico"
TEST = r"C:\Dev\72After.Dev\tools\logo-test\favicon-on-white.png"

SIZE = 256
RADIUS = 56

img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.rounded_rectangle((0, 0, SIZE - 1, SIZE - 1), radius=RADIUS, fill=(10, 10, 10, 255))

font = ImageFont.truetype(FONT, 150)
draw.text((SIZE // 2, SIZE // 2 - 6), "72", font=font, fill=(255, 255, 255, 255), anchor="mm")

img.save(FAVICON, sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

bg = Image.new("RGBA", (SIZE, SIZE), (255, 255, 255, 255))
bg.alpha_composite(img)
bg.convert("RGB").save(TEST)
print("favicon written:", FAVICON)
