"""Screenshot key page states of the dev site with the installed Chrome."""

import os

from playwright.sync_api import sync_playwright

OUT = r"C:\Dev\72After.Dev\tools\site-test"
BASE = "http://localhost:5173"

os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    page.goto(BASE + "/", wait_until="networkidle")
    page.wait_for_timeout(1200)
    page.screenshot(path=f"{OUT}/01-home-top.png")

    page.evaluate("window.scrollTo(0, 900)")
    page.wait_for_timeout(800)
    page.screenshot(path=f"{OUT}/02-home-scrolled.png")

    page.evaluate("document.querySelector('[class*=aboutContainer]').scrollIntoView({block: 'center'})")
    page.wait_for_timeout(800)
    page.screenshot(path=f"{OUT}/03-home-aboutus.png")

    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)
    page.screenshot(path=f"{OUT}/04-home-footer.png")

    page.goto(BASE + "/about", wait_until="networkidle")
    page.wait_for_timeout(1000)
    page.evaluate("document.querySelector('[class*=aboutContainer]').scrollIntoView({block: 'center'})")
    page.wait_for_timeout(800)
    page.screenshot(path=f"{OUT}/05-about-aboutus.png")

    page.goto(BASE + "/contact", wait_until="networkidle")
    page.wait_for_timeout(1000)
    page.screenshot(path=f"{OUT}/06-contact.png")

    browser.close()
    print("screenshots ->", OUT)
