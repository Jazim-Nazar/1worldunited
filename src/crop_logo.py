import os
from PIL import Image, ImageOps

logo_path = r"c:\Users\Jasim Nazar\Documents\project\src\assets\images\logo.jpg"
output_path = r"c:\Users\Jasim Nazar\Documents\project\src\assets\images\logo_cropped.jpg"

if not os.path.exists(logo_path):
    print(f"Logo not found at {logo_path}")
    exit(1)

print("Opening logo image...")
img = Image.open(logo_path)

# Convert to RGB if it is in another mode
if img.mode != "RGB":
    img = img.convert("RGB")

# Convert to grayscale to simplify thresholding
gray = img.convert("L")

# Threshold: pixels with intensity > 245 (close to white) become pure white (255)
# pixels <= 245 become pure black (0)
threshold = 248
binary = gray.point(lambda p: 255 if p > threshold else 0)

# Invert so that background is black (0) and logo text/symbol is white (255)
inverted = ImageOps.invert(binary)

# Get bounding box of non-zero (white logo) pixels
bbox = inverted.getbbox()

if bbox:
    print(f"Original size: {img.size}")
    print(f"Detected bounding box: {bbox}")
    
    # Extract coordinates
    left, top, right, bottom = bbox
    
    # Add a small padding of 15 pixels around the logo so it doesn't touch the borders tightly
    padding = 15
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(img.size[0], right + padding)
    bottom = min(img.size[1], bottom + padding)
    
    cropped_img = img.crop((left, top, right, bottom))
    cropped_img.save(output_path, "JPEG", quality=95)
    print(f"Saved cropped logo to {output_path} (New size: {cropped_img.size})")
    
    # Overwrite the original logo.jpg with the cropped version to keep paths clean
    cropped_img.save(logo_path, "JPEG", quality=95)
    print("Overwrote original logo.jpg with cropped version.")
else:
    print("No bounding box found. Trying a lower threshold...")
    # Fallback to a lower threshold if needed
